
import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Calendar as CalendarIcon, 
  Search, 
  ChevronRight, 
  CheckCircle2, 
  Circle,
  TrendingUp,
  Clock,
  ExternalLink,
  Menu,
  X,
  Stethoscope,
  Plus,
  ChevronLeft,
  Bell,
  Trash2,
  AlertCircle,
  Sparkles,
  Wand2,
  CalendarDays
} from 'lucide-react';
import { SEMESTER_DATA } from './constants';
import { Module, Topic, SearchResult, CalendarEvent, EventType } from './types';
import { searchMedicalUpdates, generateSmartSchedule } from './geminiService';

// --- Components ---

const ProgressBar = ({ progress, label, color = 'bg-blue-600' }: { progress: number; label?: string; color?: string }) => (
  <div className="w-full">
    {label && <div className="flex justify-between text-sm mb-1 font-medium"><span>{label}</span><span>{Math.round(progress)}%</span></div>}
    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
      <div 
        className={`${color} h-2.5 rounded-full transition-all duration-500 ease-out`} 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
);

const ModuleCard = ({ module }: { module: Module }) => {
  const completedSubtopics = module.topics.reduce((acc, topic) => 
    acc + topic.subTopics.filter(st => st.isCompleted).length, 0
  );
  const totalSubtopics = module.topics.reduce((acc, topic) => acc + topic.subTopics.length, 0);
  const progress = totalSubtopics > 0 ? (completedSubtopics / totalSubtopics) * 100 : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:border-blue-300 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-500" />
          {module.name}
        </h3>
        <span className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
          {completedSubtopics}/{totalSubtopics} Temas
        </span>
      </div>
      <ProgressBar progress={progress} />
      <div className="mt-4 space-y-3">
        {module.topics.slice(0, 3).map(topic => (
          <div key={topic.id} className="text-sm flex items-center justify-between text-slate-600">
            <span className="truncate">{topic.title}</span>
            {topic.subTopics.every(st => st.isCompleted) ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Circle className="w-4 h-4 text-slate-300" />}
          </div>
        ))}
        {module.topics.length > 3 && <div className="text-xs text-slate-400 italic">+{module.topics.length - 3} temas más...</div>}
      </div>
    </div>
  );
};

// --- Pages ---

const Dashboard = ({ modules, events }: { modules: Module[], events: CalendarEvent[] }) => {
  const totalProgress = useMemo(() => {
    const allSubtopics = modules.flatMap(m => m.topics.flatMap(t => t.subTopics));
    const completed = allSubtopics.filter(s => s.isCompleted).length;
    return allSubtopics.length > 0 ? (completed / allSubtopics.length) * 100 : 0;
  }, [modules]);

  const upcomingExams = events.filter(e => e.type === 'exam' && !e.completed).slice(0, 2);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Hola, Futuro Dr.</h1>
          <p className="text-slate-500">Bienvenido al Séptimo Semestre. Estás progresando bien.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 min-w-[240px]">
          <div className="p-3 bg-blue-100 rounded-lg">
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <ProgressBar progress={totalProgress} label="Progreso Total" />
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map(module => (
          <Link key={module.id} to={`/study/${module.id}`}>
            <ModuleCard module={module} />
          </Link>
        ))}
      </section>

      <div className="grid grid-cols-1 gap-6">
        <section className="bg-blue-600 rounded-xl p-6 text-white shadow-lg shadow-blue-200">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Próximos Desafíos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingExams.length > 0 ? upcomingExams.map(exam => (
              <div key={exam.id} className="bg-white/10 p-4 rounded-lg border border-white/20">
                <p className="font-bold text-lg">{exam.title}</p>
                <p className="text-sm text-blue-100">{new Date(exam.date).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                {exam.description && <p className="text-xs text-blue-200 mt-2 opacity-80">{exam.description}</p>}
              </div>
            )) : (
              <p className="text-blue-100 text-sm italic">No hay exámenes programados próximamente.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

const SmartPlanner = ({ onAddEvents }: { onAddEvents: (events: Omit<CalendarEvent, 'id'>[]) => void }) => {
  const [request, setRequest] = useState('');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<Omit<CalendarEvent, 'id'>[]>([]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!request.trim()) return;
    setLoading(true);
    const newEvents = await generateSmartSchedule(request, startDate);
    setPreview(newEvents);
    setLoading(false);
  };

  const confirmPlan = () => {
    onAddEvents(preview);
    setPreview([]);
    setRequest('');
    alert("Cronograma añadido al calendario exitosamente.");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in zoom-in-95 duration-500">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-2">
          <Sparkles className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Planificador Inteligente</h1>
        <p className="text-slate-500">Dime qué quieres estudiar y yo organizaré tu calendario automáticamente.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6">
        <form onSubmit={handleGenerate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">¿Qué quieres organizar?</label>
              <textarea
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                placeholder="Ej. 'Quiero estudiar todo el módulo de Cardiología en 3 semanas, dejando los fines de semana libres y poniendo un examen final el último día.'"
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none h-32 resize-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Fecha de Inicio</label>
              <input 
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
              />
            </div>
            <div className="flex items-end">
              <button 
                type="submit"
                disabled={loading || !request.trim()}
                className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <Wand2 className="w-5 h-5" />}
                {loading ? 'Generando...' : 'Generar Cronograma'}
              </button>
            </div>
          </div>
        </form>

        {preview.length > 0 && (
          <div className="mt-12 space-y-6 animate-in fade-in slide-in-from-top-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">Vista Previa del Plan</h2>
              <button 
                onClick={confirmPlan}
                className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Confirmar y Añadir
              </button>
            </div>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {preview.map((ev, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex-shrink-0 w-16 text-center">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">{new Date(ev.date).toLocaleDateString('es-ES', { month: 'short' })}</span>
                    <span className="block text-lg font-extrabold text-slate-800">{new Date(ev.date).getDate()}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded text-white ${ev.type === 'exam' ? 'bg-red-500' : 'bg-blue-500'}`}>{ev.type}</span>
                      <h4 className="text-sm font-bold text-slate-800">{ev.title}</h4>
                    </div>
                    {ev.description && <p className="text-xs text-slate-500">{ev.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const StudyPlan = ({ modules, onTopicToggle }: { modules: Module[], onTopicToggle: (modId: string, topicId: string, subId: string) => void }) => {
  const [selectedModuleId, setSelectedModuleId] = useState(modules[0].id);
  const selectedModule = modules.find(m => m.id === selectedModuleId)!;

  return (
    <div className="flex flex-col lg:flex-row gap-6 animate-in slide-in-from-bottom duration-500">
      <aside className="lg:w-64 flex-shrink-0">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-2 sticky top-20">
          {modules.map(m => (
            <button
              key={m.id}
              onClick={() => setSelectedModuleId(m.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${selectedModuleId === m.id ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              {m.name}
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">{selectedModule.name}</h2>
        {selectedModule.topics.map(topic => (
          <div key={topic.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-semibold text-slate-800">{topic.title}</h3>
              <span className="text-xs bg-white px-2 py-1 rounded-md border border-slate-200 text-slate-500">
                Índice de Maestría
              </span>
            </div>
            <div className="p-4 space-y-2">
              {topic.subTopics.map(sub => (
                <div 
                  key={sub.id} 
                  onClick={() => onTopicToggle(selectedModule.id, topic.id, sub.id)}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    {sub.isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 group-hover:text-blue-400" />
                    )}
                    <span className={`text-sm ${sub.isCompleted ? 'text-slate-500 line-through' : 'text-slate-700 font-medium'}`}>
                      {sub.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-slate-300 transition-transform ${sub.isCompleted ? 'rotate-0' : 'group-hover:translate-x-1'}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

const MedicalUpdates = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const data = await searchMedicalUpdates(query);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in zoom-in-95 duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Actualizaciones Médicas</h1>
        <p className="text-slate-500">Búsqueda inteligente con Google Grounding para estar siempre al día.</p>
      </div>

      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ej. 'Últimas guías de manejo para falla cardiaca aguda'"
          className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        <button 
          disabled={loading}
          className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:bg-slate-300"
        >
          {loading ? 'Buscando...' : 'Consultar'}
        </button>
      </form>

      {loading && (
        <div className="flex flex-col items-center justify-center p-12 space-y-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 animate-pulse">Consultando bases de datos médicas...</p>
        </div>
      )}

      {result && !loading && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-bold text-slate-800">Resultados de IA</h2>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase rounded">Google Grounding Activo</span>
            </div>
          </div>
          <div className="p-6">
            <div className="prose prose-slate max-w-none text-slate-700 whitespace-pre-line">
              {result.text}
            </div>
            
            {result.sources.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Fuentes y Referencias</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {result.sources.map((source, i) => (
                    <a 
                      key={i} 
                      href={source.uri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all group"
                    >
                      <span className="text-sm font-medium text-slate-600 truncate mr-2">{source.title}</span>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const StudyCalendar = ({ events, onAddEvent, onDeleteEvent, onToggleEvent }: { 
  events: CalendarEvent[], 
  onAddEvent: (event: Omit<CalendarEvent, 'id'>) => void,
  onDeleteEvent: (id: string) => void,
  onToggleEvent: (id: string) => void
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', type: 'study' as EventType, description: '', reminder: false });

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const calendarDays = useMemo(() => {
    const totalDays = daysInMonth(year, month);
    const offset = firstDayOfMonth(year, month);
    const days = [];
    for (let i = 0; i < offset; i++) days.push(null);
    for (let i = 1; i <= totalDays; i++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      days.push({ date: i, dateStr });
    }
    return days;
  }, [year, month]);

  const selectedEvents = useMemo(() => {
    return events.filter(e => e.date === selectedDate);
  }, [events, selectedDate]);

  const getEventColor = (type: EventType) => {
    switch (type) {
      case 'exam': return 'bg-red-500';
      case 'task': return 'bg-orange-500';
      case 'study': return 'bg-blue-500';
      case 'presentation': return 'bg-purple-500';
      default: return 'bg-slate-500';
    }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !newEvent.title) return;
    onAddEvent({
      date: selectedDate,
      title: newEvent.title,
      type: newEvent.type,
      description: newEvent.description,
      reminderSet: newEvent.reminder,
      completed: false
    });
    setNewEvent({ title: '', type: 'study', description: '', reminder: false });
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{monthNames[month]} {year}</h1>
          <p className="text-sm text-slate-500">Gestiona tus 6 meses de preparación.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/planner" className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all">
            <Sparkles className="w-4 h-4" />
            Planificador Inteligente
          </Link>
          <div className="flex gap-2">
            <button onClick={prevMonth} className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextMonth} className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50/50">
            {daysOfWeek.map(d => <div key={d} className="p-3 text-center text-xs font-bold text-slate-400 uppercase">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 border-collapse">
            {calendarDays.map((day, i) => (
              <div 
                key={i} 
                onClick={() => day && setSelectedDate(day.dateStr)}
                className={`min-h-[100px] border-r border-b border-slate-100 p-2 flex flex-col gap-1 overflow-hidden transition-colors cursor-pointer group ${day ? 'hover:bg-blue-50/30' : 'bg-slate-50/30'} ${selectedDate === day?.dateStr ? 'bg-blue-50 border-2 border-blue-400' : ''}`}
              >
                {day && (
                  <>
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-xs font-semibold ${selectedDate === day.dateStr ? 'text-blue-600' : 'text-slate-400'}`}>{day.date}</span>
                      {day.dateStr === new Date().toISOString().split('T')[0] && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>}
                    </div>
                    <div className="flex flex-col gap-0.5 overflow-hidden">
                      {events.filter(e => e.date === day.dateStr).slice(0, 3).map(e => (
                        <div key={e.id} className={`${getEventColor(e.type)} text-white text-[9px] p-1 rounded font-bold truncate ${e.completed ? 'opacity-50 line-through' : ''}`}>
                          {e.title}
                        </div>
                      ))}
                      {events.filter(e => e.date === day.dateStr).length > 3 && (
                        <div className="text-[9px] text-slate-400 text-center font-bold">+{events.filter(e => e.date === day.dateStr).length - 3} más</div>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-slate-800">Eventos del Día</h2>
              <button 
                onClick={() => selectedDate && setShowAddModal(true)}
                disabled={!selectedDate}
                className="p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {selectedDate ? (
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{selectedDate}</p>
                {selectedEvents.length > 0 ? selectedEvents.map(e => (
                  <div key={e.id} className={`p-3 rounded-xl border flex flex-col gap-2 transition-all ${e.completed ? 'bg-slate-50 border-slate-100' : 'bg-white border-slate-200 hover:shadow-md'}`}>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <button onClick={() => onToggleEvent(e.id)}>
                          {e.completed ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Circle className="w-5 h-5 text-slate-300" />}
                        </button>
                        <div>
                          <p className={`text-sm font-bold ${e.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}>{e.title}</p>
                          <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${getEventColor(e.type)} text-white`}>{e.type}</span>
                        </div>
                      </div>
                      <button onClick={() => onDeleteEvent(e.id)} className="text-slate-300 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    {e.description && <p className="text-xs text-slate-500">{e.description}</p>}
                    {e.reminderSet && (
                      <div className="flex items-center gap-1 text-[10px] text-orange-500 font-bold">
                        <Bell className="w-3 h-3" /> Recordatorio activado
                      </div>
                    )}
                  </div>
                )) : (
                  <div className="text-center py-8">
                    <p className="text-slate-400 text-sm">No hay planes para este día.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                <AlertCircle className="w-8 h-8 mb-2 opacity-20" />
                <p className="text-sm">Selecciona una fecha en el calendario</p>
              </div>
            )}
          </div>
          
          <div className="bg-slate-900 rounded-2xl p-6 text-white">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              Sincronización Android
            </h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Las alarmas y recordatorios se sincronizarán con tu dispositivo si permites las notificaciones en el navegador.
            </p>
            <button 
              onClick={() => Notification.requestPermission()}
              className="w-full py-3 bg-blue-600 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors"
            >
              Habilitar Notificaciones
            </button>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-slate-800">Añadir Plan para {selectedDate}</h2>
              <button onClick={() => setShowAddModal(false)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>
            <form onSubmit={handleAddSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Título</label>
                <input 
                  autoFocus
                  required
                  type="text" 
                  value={newEvent.title}
                  onChange={e => setNewEvent({...newEvent, title: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Ej. Examen de Cardiología"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tipo</label>
                  <select 
                    value={newEvent.type}
                    onChange={e => setNewEvent({...newEvent, type: e.target.value as EventType})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                  >
                    <option value="study">Estudio</option>
                    <option value="exam">Examen</option>
                    <option value="task">Tarea</option>
                    <option value="presentation">Exposición</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <label className="flex items-center gap-2 cursor-pointer p-3 bg-slate-50 border border-slate-200 rounded-xl w-full">
                    <input 
                      type="checkbox" 
                      checked={newEvent.reminder}
                      onChange={e => setNewEvent({...newEvent, reminder: e.target.checked})}
                      className="w-4 h-4 text-blue-600" 
                    />
                    <span className="text-sm font-medium text-slate-700">Alarma</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Descripción (Opcional)</label>
                <textarea 
                  value={newEvent.description}
                  onChange={e => setNewEvent({...newEvent, description: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none h-24 resize-none"
                />
              </div>
              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                Guardar en Cronograma
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// --- App Layout ---

const Navbar = ({ totalProgress }: { totalProgress: number }) => {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', icon: <Home className="w-5 h-5" />, path: '/' },
    { label: 'Temas', icon: <BookOpen className="w-5 h-5" />, path: '/study' },
    { label: 'Calendario', icon: <CalendarIcon className="w-5 h-5" />, path: '/calendar' },
    { label: 'Planner IA', icon: <Sparkles className="w-5 h-5" />, path: '/planner' },
    { label: 'Buscador', icon: <Search className="w-5 h-5" />, path: '/search' },
  ];

  return (
    <nav className="fixed bottom-0 md:top-0 md:bottom-auto w-full z-50 bg-white/80 backdrop-blur-md border-t md:border-t-0 md:border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="hidden md:flex items-center gap-2 text-blue-600 font-extrabold text-lg uppercase tracking-tight">
          <Stethoscope className="w-6 h-6" />
          CRONOGRAMA <span className="text-slate-900">7mo semestre</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`flex items-center gap-2 text-xs font-bold transition-colors uppercase ${location.pathname === item.path || (location.pathname.startsWith('/study/') && item.path === '/study') ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden w-full justify-around items-center h-full">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`flex flex-col items-center gap-1 transition-colors ${location.pathname === item.path || (location.pathname.startsWith('/study/') && item.path === '/study') ? 'text-blue-600' : 'text-slate-400'}`}
            >
              {item.icon}
              <span className="text-[10px] font-bold">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="w-32">
             <ProgressBar progress={totalProgress} />
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs border border-blue-200">
            DR
          </div>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  const [modules, setModules] = useState<Module[]>(() => {
    const saved = localStorage.getItem('medstudy_modules');
    return saved ? JSON.parse(saved) : SEMESTER_DATA;
  });

  const [events, setEvents] = useState<CalendarEvent[]>(() => {
    const saved = localStorage.getItem('medstudy_events');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('medstudy_modules', JSON.stringify(modules));
  }, [modules]);

  useEffect(() => {
    localStorage.setItem('medstudy_events', JSON.stringify(events));
  }, [events]);

  // Basic reminder system using Browser Notification API
  useEffect(() => {
    const checkReminders = () => {
      const today = new Date().toISOString().split('T')[0];
      const reminders = events.filter(e => e.date === today && e.reminderSet && !e.completed);
      
      if (reminders.length > 0 && Notification.permission === 'granted') {
        reminders.forEach(e => {
          new Notification(`MedStudy Pro: Tienes un plan hoy`, {
            body: `${e.title}: ${e.description || '¡Es hora de avanzar en tu cronograma!'}`,
            icon: 'https://cdn-icons-png.flaticon.com/512/822/822143.png'
          });
        });
      }
    };

    const interval = setInterval(checkReminders, 1000 * 60 * 60); // Check every hour
    checkReminders(); // Initial check
    return () => clearInterval(interval);
  }, [events]);

  const handleTopicToggle = (modId: string, topicId: string, subId: string) => {
    setModules(prev => prev.map(m => {
      if (m.id !== modId) return m;
      return {
        ...m,
        topics: m.topics.map(t => {
          if (t.id !== topicId) return t;
          return {
            ...t,
            subTopics: t.subTopics.map(s => {
              if (s.id !== subId) return s;
              return { ...s, isCompleted: !s.isCompleted };
            })
          };
        })
      };
    }));
  };

  const handleAddEvent = (event: Omit<CalendarEvent, 'id'>) => {
    setEvents(prev => [...prev, { ...event, id: crypto.randomUUID() }]);
  };

  const handleBatchAddEvents = (newEvents: Omit<CalendarEvent, 'id'>[]) => {
    const withIds = newEvents.map(ev => ({ ...ev, id: crypto.randomUUID() }));
    setEvents(prev => [...prev, ...withIds]);
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const handleToggleEvent = (id: string) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, completed: !e.completed } : e));
  };

  const totalProgress = useMemo(() => {
    const all = modules.flatMap(m => m.topics.flatMap(t => t.subTopics));
    const done = all.filter(s => s.isCompleted).length;
    return all.length > 0 ? (done / all.length) * 100 : 0;
  }, [modules]);

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar totalProgress={totalProgress} />
        
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 md:pt-24 pb-24 md:pb-8">
          <Routes>
            <Route path="/" element={<Dashboard modules={modules} events={events} />} />
            <Route path="/study" element={<StudyPlan modules={modules} onTopicToggle={handleTopicToggle} />} />
            <Route path="/study/:moduleId" element={<StudyPlan modules={modules} onTopicToggle={handleTopicToggle} />} />
            <Route path="/calendar" element={<StudyCalendar events={events} onAddEvent={handleAddEvent} onDeleteEvent={handleDeleteEvent} onToggleEvent={handleToggleEvent} />} />
            <Route path="/planner" element={<SmartPlanner onAddEvents={handleBatchAddEvents} />} />
            <Route path="/search" element={<MedicalUpdates />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
