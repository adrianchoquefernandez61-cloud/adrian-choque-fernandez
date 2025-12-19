
import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Calendar as CalendarIcon, 
  Search, 
  ChevronRight, 
  CheckCircle2, 
  Circle,
  Clock,
  Plus,
  ChevronLeft,
  Trash2,
  Sparkles,
  LayoutDashboard,
  ClipboardList,
  AlertCircle,
  Dna,
  GraduationCap,
  // Added missing ShieldCheck icon to resolve 'Cannot find name ShieldCheck' error
  ShieldCheck
} from 'lucide-react';
import { SEMESTER_DATA } from './constants';
import { Module, CalendarEvent, EventType, SearchResult } from './types';
import { searchMedicalUpdates, generateSmartSchedule } from './geminiService';

// --- UI Helpers ---
const GLASS_CARD = "bg-white border border-slate-200/60 shadow-sm rounded-3xl overflow-hidden";
const PRIMARY_BLUE = "text-blue-600";

const ProgressBar = ({ progress, label, color = 'bg-blue-600' }: { progress: number; label?: string; color?: string }) => (
  <div className="w-full">
    {label && (
      <div className="flex justify-between text-[10px] mb-2 font-black uppercase tracking-widest text-slate-400">
        <span>{label}</span>
        <span>{Math.round(progress)}%</span>
      </div>
    )}
    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
      <div 
        className={`${color} h-full rounded-full transition-all duration-1000 ease-in-out`} 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
);

// --- Pages ---

const Dashboard = ({ modules, events }: { modules: Module[], events: CalendarEvent[] }) => {
  const totalProgress = useMemo(() => {
    const all = modules.flatMap(m => m.topics.flatMap(t => t.subTopics));
    return all.length > 0 ? (all.filter(s => s.isCompleted).length / all.length) * 100 : 0;
  }, [modules]);

  const upcomingEvents = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    return events
      .filter(e => e.date >= today)
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 4);
  }, [events]);

  return (
    <div className="space-y-10 animate-medical">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">
            UDABOL <span className={PRIMARY_BLUE}>7mo Semestre</span>
          </h1>
          <p className="text-slate-500 font-medium text-lg mt-1">Bienvenido al Séptimo Semestre, Dr.</p>
        </div>
        <div className="flex items-center gap-6 bg-white p-4 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="p-3 bg-blue-50 rounded-2xl">
            <GraduationCap className="w-6 h-6 text-blue-600" />
          </div>
          <div className="min-w-[160px]">
            <ProgressBar progress={totalProgress} label="Progreso del Semestre" />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {modules.slice(0, 4).map(mod => {
              const subTopics = mod.topics.flatMap(t => t.subTopics);
              const done = subTopics.filter(s => s.isCompleted).length;
              const progress = (done / subTopics.length) * 100;
              return (
                <Link key={mod.id} to={`/study/${mod.id}`} className={`${GLASS_CARD} p-6 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group`}>
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{mod.name}</h3>
                      <p className="text-xs text-slate-400 font-medium">{subTopics.length} Temas Clave</p>
                    </div>
                    <span className="text-[10px] font-black px-3 py-1 bg-slate-50 text-slate-500 rounded-full border border-slate-100">{done}/{subTopics.length}</span>
                  </div>
                  <ProgressBar progress={progress} color={progress > 80 ? 'bg-emerald-500' : 'bg-blue-600'} />
                </Link>
              );
            })}
          </section>

          <section className={`${GLASS_CARD} p-10 bg-slate-900 text-white relative overflow-hidden group`}>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">Neural Engine</span>
              <h2 className="text-3xl font-black mb-3">Planner UDABOL IA</h2>
              <p className="text-slate-400 text-base mb-8 max-w-md leading-relaxed">Algoritmo de planificación inteligente que optimiza tus horas de estudio basándose en la carga académica actual.</p>
              <Link to="/planner" className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-blue-50 transition-all shadow-xl shadow-white/5 active:scale-95">
                <Sparkles className="w-5 h-5 text-blue-600" /> Configurar Plan Elite
              </Link>
            </div>
            <Dna className="absolute -right-12 -bottom-12 w-64 h-64 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-700" />
          </section>
        </div>

        <div className="space-y-8">
          <section className={`${GLASS_CARD} p-8`}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" /> Agenda Próxima
              </h2>
              <Link to="/calendar" className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">Ver Todo</Link>
            </div>
            <div className="space-y-5">
              {upcomingEvents.length > 0 ? upcomingEvents.map(event => (
                <div key={event.id} className="flex gap-4 p-4 rounded-2xl bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 transition-all cursor-default">
                  <div className={`w-1.5 rounded-full ${event.type === 'exam' ? 'bg-red-500' : 'bg-blue-600'}`} />
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{new Date(event.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}</p>
                    <p className="text-sm font-bold text-slate-800 leading-snug mt-1">{event.title}</p>
                    <div className="flex items-center gap-2 mt-2">
                       <span className={`text-[8px] font-black px-1.5 py-0.5 rounded border uppercase ${event.type === 'exam' ? 'text-red-500 border-red-100' : 'text-blue-500 border-blue-100'}`}>{event.type}</span>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="text-center py-10">
                   <ClipboardList className="w-12 h-12 text-slate-200 mx-auto mb-3" />
                   <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Agenda despejada</p>
                </div>
              )}
            </div>
          </section>

          <section className={`${GLASS_CARD} p-6 border-l-4 border-l-amber-500 bg-amber-50/30`}>
             <h3 className="text-sm font-black text-slate-900 flex items-center gap-2 mb-3">
               <AlertCircle className="w-4 h-4 text-amber-500" /> Memo de Rotación
             </h3>
             <p className="text-sm text-slate-600 leading-relaxed font-medium">
               Las bitácoras de Neumología deben ser validadas antes del próximo seminario de casos.
             </p>
          </section>
        </div>
      </div>
    </div>
  );
};

const StudyPlan = ({ modules, onTopicToggle }: { modules: Module[], onTopicToggle: (modId: string, topicId: string, subId: string) => void }) => {
  const { moduleId } = useLocation().pathname.includes('/study/') ? { moduleId: useLocation().pathname.split('/').pop() } : { moduleId: modules[0].id };
  const [selectedModId, setSelectedModId] = useState(moduleId || modules[0].id);
  const currentMod = modules.find(m => m.id === selectedModId) || modules[0];

  const modProgress = useMemo(() => {
    const subs = currentMod.topics.flatMap(t => t.subTopics);
    return (subs.filter(s => s.isCompleted).length / subs.length) * 100;
  }, [currentMod]);

  return (
    <div className="flex flex-col lg:flex-row gap-10 animate-medical">
      <aside className="lg:w-72 flex-shrink-0">
        <div className="sticky top-28 space-y-3">
          <div className="px-6 mb-6">
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Especialidades</h2>
          </div>
          <div className="space-y-2">
            {modules.map(m => (
              <button
                key={m.id}
                onClick={() => setSelectedModId(m.id)}
                className={`w-full text-left px-6 py-4 rounded-2xl text-sm font-bold transition-all flex items-center justify-between group ${selectedModId === m.id ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' : 'text-slate-500 hover:bg-slate-100'}`}
              >
                {m.name}
                <ChevronRight className={`w-4 h-4 transition-transform ${selectedModId === m.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>
            ))}
          </div>
        </div>
      </aside>

      <div className="flex-1 space-y-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-2 block">Módulo Especializado</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">{currentMod.name}</h2>
          </div>
          <div className="w-full md:w-64 bg-white p-4 rounded-3xl border border-slate-200/60 shadow-sm">
            <ProgressBar progress={modProgress} label="Objetivo del Módulo" />
          </div>
        </header>

        <div className="space-y-6">
          {currentMod.topics.map(topic => (
            <div key={topic.id} className={GLASS_CARD}>
              <div className="px-8 py-5 bg-slate-50/50 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-900">{topic.title}</h3>
                <span className="text-[10px] font-black text-slate-400">{topic.subTopics.length} Subtemas</span>
              </div>
              <div className="divide-y divide-slate-100">
                {topic.subTopics.map(sub => (
                  <div 
                    key={sub.id} 
                    onClick={() => onTopicToggle(currentMod.id, topic.id, sub.id)}
                    className="flex items-center justify-between px-8 py-5 hover:bg-blue-50/30 cursor-pointer transition-all group"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`transition-all duration-300 ${sub.isCompleted ? 'scale-110' : ''}`}>
                        {sub.isCompleted ? (
                          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        ) : (
                          <Circle className="w-6 h-6 text-slate-200 group-hover:text-blue-300" />
                        )}
                      </div>
                      <span className={`text-base font-semibold transition-colors ${sub.isCompleted ? 'text-slate-400 line-through' : 'text-slate-700'}`}>{sub.title}</span>
                    </div>
                    {sub.isCompleted && <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 uppercase tracking-wider">Completado</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StudyCalendar = ({ events, onAddEvent, onDeleteEvent }: { 
  events: CalendarEvent[], 
  onAddEvent: (e: Omit<CalendarEvent, 'id'>) => void,
  onDeleteEvent: (id: string) => void
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', type: 'study' as EventType });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    onAddEvent({ ...newEvent, date: selectedDate, completed: false, reminderSet: true });
    setShowModal(false);
    setNewEvent({ title: '', type: 'study' });
  };

  return (
    <div className="space-y-10 animate-medical">
      <div className="flex items-center justify-between border-b border-slate-200 pb-8">
        <div>
          <h2 className="text-4xl font-black text-slate-900 capitalize tracking-tighter">
            {new Date(year, month).toLocaleString('es-ES', { month: 'long', year: 'numeric' })}
          </h2>
          <p className="text-slate-500 font-medium">Gestión de tiempos y evaluaciones</p>
        </div>
        <div className="flex gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
          <button onClick={() => setCurrentDate(new Date(year, month - 1, 1))} className="p-3 hover:bg-slate-50 rounded-xl transition-colors"><ChevronLeft className="w-5 h-5" /></button>
          <button onClick={() => setCurrentDate(new Date(year, month + 1, 1))} className="p-3 hover:bg-slate-50 rounded-xl transition-colors"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3 bg-white rounded-[40px] border border-slate-200 overflow-hidden shadow-xl shadow-slate-900/5">
          <div className="grid grid-cols-7 bg-slate-900 border-b border-white/5">
            {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(d => (
              <div key={d} className="p-5 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} className="h-40 border-r border-b border-slate-50 bg-slate-50/20" />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const d = i + 1;
              const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
              const isSelected = selectedDate === dateStr;
              const isToday = dateStr === new Date().toISOString().split('T')[0];
              const dayEvents = events.filter(e => e.date === dateStr);
              
              return (
                <div 
                  key={d} 
                  onClick={() => setSelectedDate(dateStr)}
                  className={`h-40 border-r border-b border-slate-50 p-4 cursor-pointer transition-all hover:bg-blue-50/20 ${isSelected ? 'bg-blue-50/40' : ''}`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-sm font-black rounded-lg w-8 h-8 flex items-center justify-center transition-all ${isSelected ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : isToday ? 'text-blue-600 bg-blue-50 border border-blue-100' : 'text-slate-400'}`}>{d}</span>
                    {dayEvents.length > 0 && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />}
                  </div>
                  <div className="space-y-1.5">
                    {dayEvents.slice(0, 3).map(e => (
                      <div key={e.id} className={`text-[8px] p-2 rounded-lg font-black truncate text-white shadow-sm ${e.type === 'exam' ? 'bg-red-500' : e.type === 'task' ? 'bg-amber-500' : 'bg-slate-900'}`}>
                        {e.title}
                      </div>
                    ))}
                    {dayEvents.length > 3 && <div className="text-[7px] text-slate-400 font-black ml-1 uppercase tracking-widest">+{dayEvents.length - 3} Eventos</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-8">
          <div className={GLASS_CARD + " p-8"}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-black text-slate-900 text-sm uppercase tracking-widest">Actividades</h3>
              <button onClick={() => setShowModal(true)} className="p-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-200 active:scale-95 transition-all"><Plus className="w-5 h-5" /></button>
            </div>
            <div className="space-y-4">
              {events.filter(e => e.date === selectedDate).length > 0 ? events.filter(e => e.date === selectedDate).map(e => (
                <div key={e.id} className="p-5 bg-slate-50 rounded-[28px] border border-slate-100 flex items-center justify-between group hover:bg-white hover:shadow-lg transition-all">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{e.title}</p>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1 inline-block">{e.type}</span>
                  </div>
                  <button onClick={() => onDeleteEvent(e.id)} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-1"><Trash2 className="w-4 h-4" /></button>
                </div>
              )) : (
                <div className="text-center py-16">
                  <ClipboardList className="w-16 h-16 text-slate-100 mx-auto mb-4" />
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Libre de Tareas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white rounded-[40px] p-10 w-full max-w-lg shadow-2xl animate-medical">
            <h3 className="text-2xl font-black mb-8 tracking-tighter">Programar Evento</h3>
            <form onSubmit={handleAdd} className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Descripción</label>
                <input required autoFocus type="text" value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} className="w-full bg-slate-50 border-none rounded-2xl p-5 text-sm font-bold outline-none focus:ring-4 focus:ring-blue-100 transition-all" placeholder="Ej: Seminario de EKG" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Categoría de Evento</label>
                <select value={newEvent.type} onChange={e => setNewEvent({...newEvent, type: e.target.value as EventType})} className="w-full bg-slate-50 border-none rounded-2xl p-5 text-sm font-bold outline-none cursor-pointer">
                  <option value="study">Sesión de Estudio</option>
                  <option value="exam">Evaluación / Final</option>
                  <option value="task">Tarea Académica</option>
                  <option value="other">Hospital / Rotación</option>
                </select>
              </div>
              <div className="flex gap-4 pt-6">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-5 text-sm font-black text-slate-400 hover:bg-slate-50 rounded-2xl transition-all">Cancelar</button>
                <button type="submit" className="flex-1 py-5 bg-blue-600 text-white text-sm font-black rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-200 active:scale-95 transition-all">Confirmar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const MedicalSearch = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const res = await searchMedicalUpdates(query);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-medical">
      <div className="text-center space-y-5">
        <div className="inline-flex p-4 bg-blue-100 text-blue-600 rounded-[32px] mb-4 shadow-xl shadow-blue-900/5">
          <Search className="w-8 h-8" />
        </div>
        <h2 className="text-5xl font-black tracking-tighter">EBM Intelligence</h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">Filtrado inteligente de guías clínicas y actualizaciones basadas en medicina de evidencia.</p>
      </div>

      <form onSubmit={handleSearch} className="relative group max-w-3xl mx-auto">
        <input 
          type="text" 
          value={query} 
          onChange={e => setQuery(e.target.value)}
          placeholder="Ej: Nuevas guías GINA 2024 para asma..." 
          className="w-full bg-white border border-slate-200 rounded-[36px] p-8 pr-40 text-xl font-medium shadow-2xl shadow-slate-900/5 outline-none focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-slate-300"
        />
        <button 
          disabled={loading}
          className="absolute right-4 top-4 bottom-4 bg-blue-600 text-white px-10 rounded-[28px] font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all disabled:opacity-50 active:scale-95 shadow-xl shadow-blue-200"
        >
          {loading ? 'Analizando...' : 'Consultar'}
        </button>
      </form>

      {result && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className={GLASS_CARD + " p-10 leading-relaxed text-slate-800"}>
              <div className="prose prose-slate prose-lg max-w-none whitespace-pre-line text-lg font-medium">
                {result.text}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Fuentes Primarias</h4>
            <div className="space-y-4">
              {result.sources.map((s, i) => (
                <a key={i} href={s.uri} target="_blank" rel="noreferrer" className={GLASS_CARD + " p-6 block hover:bg-slate-50 border-l-4 border-l-blue-600 transition-all group"}>
                  <p className="text-sm font-bold text-slate-900 line-clamp-2 mb-3 group-hover:text-blue-600">{s.title}</p>
                  <p className="text-[10px] text-slate-400 font-bold break-all opacity-60">{s.uri}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SmartPlannerPage = ({ onAddEvents }: { onAddEvents: (es: Omit<CalendarEvent, 'id'>[]) => void }) => {
  const [request, setRequest] = useState('Organiza el estudio para mi examen de Cardiología que es en 2 semanas.');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const today = new Date().toISOString().split('T')[0];
    const events = await generateSmartSchedule(request, today);
    if (events.length > 0) {
      onAddEvents(events);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-16 animate-medical text-center py-20">
      <div className="space-y-6">
        <div className="w-24 h-24 bg-slate-900 rounded-[40px] flex items-center justify-center text-white mx-auto shadow-2xl shadow-slate-900/20">
          <Sparkles className="w-12 h-12" />
        </div>
        <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Elite Medical Planner</h2>
        <p className="text-slate-500 text-xl font-medium max-w-xl mx-auto">La IA de UDABOL diseña tu cronograma óptimo basado en la curva de olvido y prioridad clínica.</p>
      </div>

      <div className={GLASS_CARD + " p-12 bg-white/50"}>
        <div className="mb-8">
           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block text-left mb-4 ml-2">Contexto Académico</label>
           <textarea 
            value={request}
            onChange={e => setRequest(e.target.value)}
            className="w-full bg-slate-50 border-2 border-slate-100 rounded-[32px] p-8 text-slate-700 font-bold text-lg h-40 outline-none focus:ring-4 focus:ring-blue-100 transition-all mb-4 resize-none"
          />
        </div>
        <button 
          onClick={handleGenerate}
          disabled={loading}
          className="w-full py-6 bg-slate-900 text-white rounded-[28px] font-black text-xl hover:bg-slate-800 shadow-2xl shadow-slate-900/10 transition-all disabled:opacity-50 active:scale-[0.98]"
        >
          {loading ? 'Generando Algoritmo de Estudio...' : 'Generar Cronograma'}
        </button>
        {success && <p className="mt-8 text-emerald-600 font-black flex items-center justify-center gap-3 animate-bounce"><ShieldCheck className="w-6 h-6" /> ¡Sincronización Exitosa!</p>}
      </div>
    </div>
  );
};

// --- App Layout ---

const Navbar = () => {
  const loc = useLocation();
  const items = [
    { to: '/', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Inicio' },
    { to: '/study', icon: <BookOpen className="w-5 h-5" />, label: 'Temario' },
    { to: '/calendar', icon: <CalendarIcon className="w-5 h-5" />, label: 'Agenda' },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <div className="bg-slate-900/95 backdrop-blur-xl px-4 py-3 rounded-[40px] border border-white/10 shadow-2xl flex items-center gap-2">
        {items.map(item => (
          <Link 
            key={item.to} 
            to={item.to} 
            className={`flex items-center gap-3 px-6 py-3 rounded-[32px] transition-all duration-300 ${loc.pathname === item.to ? 'bg-white text-slate-900 font-black shadow-lg shadow-white/5' : 'text-slate-400 hover:text-white'}`}
          >
            {item.icon}
            <span className="hidden md:block text-[11px] font-black uppercase tracking-widest">{item.label}</span>
          </Link>
        ))}
        <div className="w-[1px] h-8 bg-white/10 mx-2 hidden md:block"></div>
        <Link 
          to="/search" 
          className={`flex items-center gap-3 px-8 py-3 rounded-[32px] transition-all duration-500 ${loc.pathname === '/search' ? 'bg-white text-slate-900 font-black' : 'bg-blue-600 text-white hover:bg-blue-500 font-black shadow-lg shadow-blue-600/20'}`}
        >
          <Search className="w-5 h-5" />
          <span className="text-[11px] uppercase tracking-widest">EBM</span>
        </Link>
      </div>
    </nav>
  );
};

export default function App() {
  const [modules, setModules] = useState<Module[]>(() => {
    const saved = localStorage.getItem('axioma_modules_v1');
    return saved ? JSON.parse(saved) : SEMESTER_DATA;
  });

  const [events, setEvents] = useState<CalendarEvent[]>(() => {
    const saved = localStorage.getItem('axioma_events_v1');
    return saved ? JSON.parse(saved) : [];
  });

  // Automatic persistence
  useEffect(() => localStorage.setItem('axioma_modules_v1', JSON.stringify(modules)), [modules]);
  useEffect(() => localStorage.setItem('axioma_events_v1', JSON.stringify(events)), [events]);

  const handleTopicToggle = (modId: string, topicId: string, subId: string) => {
    setModules(prev => prev.map(m => {
      if (m.id !== modId) return m;
      return {
        ...m,
        topics: m.topics.map(t => {
          if (t.id !== topicId) return t;
          return {
            ...t,
            subTopics: t.subTopics.map(s => s.id === subId ? { ...s, isCompleted: !s.isCompleted } : s)
          };
        })
      };
    }));
  };

  const handleAddEvent = (e: Omit<CalendarEvent, 'id'>) => setEvents(prev => [...prev, { ...e, id: crypto.randomUUID() }]);
  const handleAddEvents = (es: Omit<CalendarEvent, 'id'>[]) => setEvents(prev => [...prev, ...es.map(e => ({ ...e, id: crypto.randomUUID() }))]);
  const handleDeleteEvent = (id: string) => setEvents(prev => prev.filter(e => e.id !== id));

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 pb-32 md:pt-10">
        <Navbar />
        <main className="max-w-[1440px] mx-auto px-8 py-10">
          <Routes>
            <Route path="/" element={<Dashboard modules={modules} events={events} />} />
            <Route path="/study" element={<StudyPlan modules={modules} onTopicToggle={handleTopicToggle} />} />
            <Route path="/study/:moduleId" element={<StudyPlan modules={modules} onTopicToggle={handleTopicToggle} />} />
            <Route path="/calendar" element={<StudyCalendar events={events} onAddEvent={handleAddEvent} onDeleteEvent={handleDeleteEvent} />} />
            <Route path="/search" element={<MedicalSearch />} />
            <Route path="/planner" element={<SmartPlannerPage onAddEvents={handleAddEvents} />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
