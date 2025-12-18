
import { Module } from './types';

export const SEMESTER_DATA: Module[] = [
  {
    id: 'cardio',
    name: 'Cardiología',
    topics: [
      { 
        id: 'c1', title: 'Semiología Cardiaca', isCompleted: false, 
        subTopics: [
          { id: 'c1-1', title: 'Inspección y Palpación (Choque de la punta)', isCompleted: false },
          { id: 'c1-2', title: 'Focos de Auscultación y Ruidos Normales', isCompleted: false },
          { id: 'c1-3', title: 'Soplos: Clasificación y Maniobras Dinámicas', isCompleted: false },
          { id: 'c1-4', title: 'Pulso Arterial y Presión Venosa Jugular', isCompleted: false }
        ] 
      },
      { 
        id: 'c2', title: 'Exámenes Complementarios', isCompleted: false, 
        subTopics: [
          { id: 'c2-1', title: 'Radiografía de Tórax (Índice Cardiotorácico)', isCompleted: false },
          { id: 'c2-2', title: 'Ecocardiografía Doppler y Transesofágica', isCompleted: false },
          { id: 'c2-3', title: 'Biomarcadores: Troponinas y BNP', isCompleted: false },
          { id: 'c2-4', title: 'Pruebas de Esfuerzo y Medicina Nuclear', isCompleted: false }
        ] 
      },
      { 
        id: 'c3', title: 'ECG Normal y Patológico', isCompleted: false, 
        subTopics: [
          { id: 'c3-1', title: 'Eje Eléctrico y Ondas (P, QRS, T)', isCompleted: false },
          { id: 'c3-2', title: 'Bloqueos de Rama y Auriculoventriculares', isCompleted: false },
          { id: 'c3-3', title: 'Signos de Isquemia, Lesión y Necrosis', isCompleted: false },
          { id: 'c3-4', title: 'Hipertrofias Auriculares y Ventriculares', isCompleted: false }
        ] 
      },
      { 
        id: 'c4', title: 'Fiebre Reumática', isCompleted: false, 
        subTopics: [
          { id: 'c4-1', title: 'Fisiopatología Estreptocócica', isCompleted: false },
          { id: 'c4-2', title: 'Criterios de Jones Mayores y Menores', isCompleted: false },
          { id: 'c4-3', title: 'Afectación Valvular Aguda vs Crónica', isCompleted: false },
          { id: 'c4-4', title: 'Esquema de Profilaxis Secundaria', isCompleted: false }
        ] 
      },
      { 
        id: 'c5', title: 'Insuficiencia Cardiaca (Función Sistólica Normal)', isCompleted: false, 
        subTopics: [
          { id: 'c5-1', title: 'Disfunción Diastólica y Llenado Ventricular', isCompleted: false },
          { id: 'c5-2', title: 'Criterios de Framingham', isCompleted: false },
          { id: 'c5-3', title: 'Tratamiento no Farmacológico y Comorbilidades', isCompleted: false }
        ] 
      },
      { 
        id: 'c6', title: 'Insuficiencia Cardiaca (Función Sistólica Alterada)', isCompleted: false, 
        subTopics: [
          { id: 'c6-1', title: 'Mecanismos de Remodelado Ventricular', isCompleted: false },
          { id: 'c6-2', title: 'Clasificación NYHA y Estadios AHA', isCompleted: false },
          { id: 'c6-3', title: 'Terapia con IECA/ARAII, Beta-bloqueos y ARM', isCompleted: false },
          { id: 'c6-4', title: 'Manejo de la IC Aguda (Warm/Cold, Wet/Dry)', isCompleted: false }
        ] 
      },
      { 
        id: 'c7', title: 'Endocarditis Bacteriana', isCompleted: false, 
        subTopics: [
          { id: 'c7-1', title: 'Etiología: S. Viridans vs S. Aureus', isCompleted: false },
          { id: 'c7-2', title: 'Criterios de Duke Modificados', isCompleted: false },
          { id: 'c7-3', title: 'Tratamiento Antibiótico Empírico', isCompleted: false },
          { id: 'c7-4', title: 'Indicaciones Quirúrgicas de Urgencia', isCompleted: false }
        ] 
      },
      { 
        id: 'c8', title: 'Miocardiopatía Chagásica', isCompleted: false, 
        subTopics: [
          { id: 'c8-1', title: 'Ciclo biológico del T. Cruzi y Transmisión', isCompleted: false },
          { id: 'c8-2', title: 'Fase Indeterminada vs Crónica', isCompleted: false },
          { id: 'c8-3', title: 'Bloqueo de Rama Derecha + HBIA', isCompleted: false },
          { id: 'c8-4', title: 'Aneurisma de la punta y Tromboembolismo', isCompleted: false }
        ] 
      },
      { 
        id: 'c9', title: 'Patología Valvular', isCompleted: false, 
        subTopics: [
          { id: 'c9-1', title: 'Estenosis Mitral (Chasquido y Retumbo)', isCompleted: false },
          { id: 'c9-2', title: 'Insuficiencia Aórtica (Pulsos periféricos)', isCompleted: false },
          { id: 'c9-3', title: 'Estenosis Aórtica (Síncope, Angina, Disnea)', isCompleted: false },
          { id: 'c9-4', title: 'Indicaciones de Prótesis Valvular', isCompleted: false }
        ] 
      },
      { 
        id: 'c10', title: 'Hipertensión Arterial', isCompleted: false, 
        subTopics: [
          { id: 'c10-1', title: 'Técnica Correcta de Toma de Presión', isCompleted: false },
          { id: 'c10-2', title: 'HTA Secundaria: Cuándo sospecharla', isCompleted: false },
          { id: 'c10-3', title: 'Crisis Hipertensiva: Urgencia vs Emergencia', isCompleted: false },
          { id: 'c10-4', title: 'Manejo según Guías AHA/ESC vigentes', isCompleted: false }
        ] 
      },
      { 
        id: 'c11', title: 'Infarto Agudo de Miocardio', isCompleted: false, 
        subTopics: [
          { id: 'c11-1', title: 'SCASEST vs SCACEST: Diferencias ECG', isCompleted: false },
          { id: 'c11-2', title: 'Manejo Inicial (MONA / GAP-BA)', isCompleted: false },
          { id: 'c11-3', title: 'Tiempos de Reperfusión (Puerta-Balón/Aguja)', isCompleted: false },
          { id: 'c11-4', title: 'Complicaciones Mecánicas y Eléctricas', isCompleted: false }
        ] 
      },
      { 
        id: 'c12', title: 'Angina de Pecho', isCompleted: false, 
        subTopics: [
          { id: 'c12-1', title: 'Angina Estable: Clasificación CCS', isCompleted: false },
          { id: 'c12-2', title: 'Angina Inestable y Angina de Prinzmetal', isCompleted: false },
          { id: 'c12-3', title: 'Estratificación de Riesgo (Score GRACE/TIMI)', isCompleted: false }
        ] 
      }
    ]
  },
  {
    id: 'neumo',
    name: 'Neumología',
    topics: [
      { 
        id: 'n1', title: 'Anatomía y Semiología Respiratorias', isCompleted: false, 
        subTopics: [
          { id: 'n1-1', title: 'Lóbulos y Segmentos Pulmonares', isCompleted: false },
          { id: 'n1-2', title: 'Patrones Respiratorios (Cheyne-Stokes, Kussmaul)', isCompleted: false },
          { id: 'n1-3', title: 'Palpación: Frémito Vocal y Expansión', isCompleted: false }
        ] 
      },
      { 
        id: 'n2', title: 'Semiología Respiratoria Especializada', isCompleted: false, 
        subTopics: [
          { id: 'n2-1', title: 'Auscultación: Murmullo vs Rales/Sibilancias', isCompleted: false },
          { id: 'n2-2', title: 'Síndrome de Condensación vs Derrame', isCompleted: false },
          { id: 'n2-3', title: 'Atelectasia y Neumotórax (Clínica)', isCompleted: false }
        ] 
      },
      { 
        id: 'n3', title: 'Métodos de Exploración de Tórax', isCompleted: false, 
        subTopics: [
          { id: 'n3-1', title: 'Espirometría: Patrón Obstructivo vs Restrictivo', isCompleted: false },
          { id: 'n3-2', title: 'Gasometría Arterial e Interpretación Ácido-Base', isCompleted: false },
          { id: 'n3-3', title: 'Rx de Tórax: Opacidades e Hiperclaridad', isCompleted: false },
          { id: 'n3-4', title: 'TAC de Alta Resolución y Fibrobroncoscopía', isCompleted: false }
        ] 
      },
      { 
        id: 'n4', title: 'Neumonías', isCompleted: false, 
        subTopics: [
          { id: 'n4-1', title: 'NAC: Microorganismos más frecuentes', isCompleted: false },
          { id: 'n4-2', title: 'Escala CURB-65 y PSI', isCompleted: false },
          { id: 'n4-3', title: 'Tratamiento antibiótico ambulatorio vs UCI', isCompleted: false },
          { id: 'n4-4', title: 'Neumonía Intrahospitalaria y por Aspiración', isCompleted: false }
        ] 
      },
      { 
        id: 'n5', title: 'Patologías Bronquiales', isCompleted: false, 
        subTopics: [
          { id: 'n5-1', title: 'Bronquiectasias: Etiología y Clínica', isCompleted: false },
          { id: 'n5-2', title: 'Bronquitis Crónica (Blue Bloater)', isCompleted: false }
        ] 
      },
      { 
        id: 'n6', title: 'EPOC', isCompleted: false, 
        subTopics: [
          { id: 'n6-1', title: 'Fisiopatología y Enfisema (Pink Puffer)', isCompleted: false },
          { id: 'n6-2', title: 'Clasificación GOLD (ABCD/E)', isCompleted: false },
          { id: 'n6-3', title: 'Manejo de la Exacerbación Aguda', isCompleted: false },
          { id: 'n6-4', title: 'Oxigenoterapia Domiciliaria: Indicaciones', isCompleted: false }
        ] 
      },
      { 
        id: 'n7', title: 'Insuficiencia Respiratoria Aguda', isCompleted: false, 
        subTopics: [
          { id: 'n7-1', title: 'Tipo 1 (Hipoxémica) vs Tipo 2 (Hipercápnica)', isCompleted: false },
          { id: 'n7-2', title: 'Mecanismos: Shunt, V/Q, Difusión', isCompleted: false },
          { id: 'n7-3', title: 'SDR del Adulto: Criterios de Berlín', isCompleted: false }
        ] 
      },
      { 
        id: 'n8', title: 'Asma', isCompleted: false, 
        subTopics: [
          { id: 'n8-1', title: 'Inflamación de la Vía Aérea y Fenotipos', isCompleted: false },
          { id: 'n8-2', title: 'Control del Asma (GINA)', isCompleted: false },
          { id: 'n8-3', title: 'Crisis Asmática: Manejo de Rescate', isCompleted: false },
          { id: 'n8-4', title: 'Pasos del Tratamiento de Mantenimiento', isCompleted: false }
        ] 
      },
      { 
        id: 'n9', title: 'Enfermedades Pleurales', isCompleted: false, 
        subTopics: [
          { id: 'n9-1', title: 'Derrame Pleural: Criterios de Light', isCompleted: false },
          { id: 'n9-2', title: 'Toracocentesis: Técnica y Análisis', isCompleted: false },
          { id: 'n9-3', title: 'Neumotórax Espontáneo vs a Tensión', isCompleted: false }
        ] 
      },
      { 
        id: 'n10', title: 'Tromboembolismo Pulmonar', isCompleted: false, 
        subTopics: [
          { id: 'n10-1', title: 'Tríada de Virchow', isCompleted: false },
          { id: 'n10-2', title: 'Escala de Wells y Ginebra', isCompleted: false },
          { id: 'n10-3', title: 'Dímero D y AngioTAC Pulmonar', isCompleted: false },
          { id: 'n10-4', title: 'Tratamiento: Anticoagulación vs Fibrinolisis', isCompleted: false }
        ] 
      },
      { 
        id: 'n11', title: 'Urgencias Respiratorias', isCompleted: false, 
        subTopics: [
          { id: 'n11-1', title: 'Manejo del Dolor Torácico de origen pleurítico', isCompleted: false },
          { id: 'n11-2', title: 'Hemoptisis: Clasificación y Algoritmo diagn.', isCompleted: false },
          { id: 'n11-3', title: 'Broncoespasmo Severo', isCompleted: false }
        ] 
      },
      { 
        id: 'n12', title: 'Tuberculosis Pulmonar', isCompleted: false, 
        subTopics: [
          { id: 'n12-1', title: 'Baciloscopia y Cultivo (BK)', isCompleted: false },
          { id: 'n12-2', title: 'Esquema de Tratamiento Acortado Dot-Bal', isCompleted: false },
          { id: 'n12-3', title: 'Reacciones Adversas a Fármacos (RAFA)', isCompleted: false },
          { id: 'n12-4', title: 'Tuberculosis Multirresistente (MDR)', isCompleted: false }
        ] 
      },
      { 
        id: 'n13', title: 'Cáncer de Pulmón', isCompleted: false, 
        subTopics: [
          { id: 'n13-1', title: 'Histología: Células Pequeñas vs No Pequeñas', isCompleted: false },
          { id: 'n13-2', title: 'Estadificación TNM básica', isCompleted: false },
          { id: 'n13-3', title: 'Síndromes Paraneoplásicos', isCompleted: false }
        ] 
      }
    ]
  },
  {
    id: 'gastro',
    name: 'Gastroenterología',
    topics: [
      { 
        id: 'g1', title: 'Enfermedades de la Mucosa Oral', isCompleted: false, 
        subTopics: [
          { id: 'g1-1', title: 'Candidiasis Oral y Leucoplasia', isCompleted: false },
          { id: 'g1-2', title: 'Aftas y Estomatitis Herpética', isCompleted: false }
        ] 
      },
      { 
        id: 'g2', title: 'ERGE', isCompleted: false, 
        subTopics: [
          { id: 'g2-1', title: 'Síntomas Típicos vs Atípicos', isCompleted: false },
          { id: 'g2-2', title: 'Clasificación Endoscópica de Los Ángeles', isCompleted: false },
          { id: 'g2-3', title: 'Tratamiento con IBP y Medidas Higiénicas', isCompleted: false }
        ] 
      },
      { 
        id: 'g3', title: 'Esofagitis', isCompleted: false, 
        subTopics: [
          { id: 'g3-1', title: 'Esofagitis Eosinofílica vs Infecciosa', isCompleted: false },
          { id: 'g3-2', title: 'Esofagitis por Cáusticos: Manejo inicial', isCompleted: false }
        ] 
      },
      { 
        id: 'g4', title: 'Acalasia Esofágica', isCompleted: false, 
        subTopics: [
          { id: 'g4-1', title: 'Manometría Esofágica: Gold Standard', isCompleted: false },
          { id: 'g4-2', title: 'Signo del "Pico de Pájaro" en Esofagograma', isCompleted: false },
          { id: 'g4-3', title: 'Dilatación Neumática vs Miotomía de Heller', isCompleted: false }
        ] 
      },
      { 
        id: 'g5', title: 'Esófago de Barret', isCompleted: false, 
        subTopics: [
          { id: 'g5-1', title: 'Metaplasia Intestinal Especializada', isCompleted: false },
          { id: 'g5-2', title: 'Protocolo de Seattle para Biopsias', isCompleted: false },
          { id: 'g5-3', title: 'Manejo de la Displasia de Bajo y Alto Grado', isCompleted: false }
        ] 
      },
      { 
        id: 'g6', title: 'Trastornos Motores del Esófago', isCompleted: false, 
        subTopics: [
          { id: 'g6-1', title: 'Espasmo Esofágico Difuso (Esófago en Sacacorchos)', isCompleted: false },
          { id: 'g6-2', title: 'Esófago en Cascanueces', isCompleted: false }
        ] 
      },
      { 
        id: 'g7', title: 'Fisiología Gástrica y Gastritis', isCompleted: false, 
        subTopics: [
          { id: 'g7-1', title: 'Barrera Mucosa y Secreción de HCl', isCompleted: false },
          { id: 'g7-2', title: 'Gastritis Crónica: Tipo A vs Tipo B', isCompleted: false },
          { id: 'g7-3', title: 'Diagnóstico de H. Pylori (Invasivo y No Invasivo)', isCompleted: false }
        ] 
      },
      { 
        id: 'g8', title: 'Semiología Gastrointestinal', isCompleted: false, 
        subTopics: [
          { id: 'g8-1', title: 'Exploración de Abdomen: Inspección, Auscultación, Percusión, Palpación', isCompleted: false },
          { id: 'g8-2', title: 'Puntos Dolorosos: McBurney, Murphy, Blumberg', isCompleted: false },
          { id: 'g8-3', title: 'Tacto Rectal: Técnica e Indicaciones', isCompleted: false }
        ] 
      },
      { 
        id: 'g9', title: 'Síndrome de Mallory Weiss', isCompleted: false, 
        subTopics: [
          { id: 'g9-1', title: 'Mecanismo: Vómitos y Laceración', isCompleted: false },
          { id: 'g9-2', title: 'Manejo de la Hemorragia Autolimitada', isCompleted: false }
        ] 
      },
      { 
        id: 'g10', title: 'Síndrome de Mala Absorción', isCompleted: false, 
        subTopics: [
          { id: 'g10-1', title: 'Enfermedad Celíaca: Anticuerpos y Biopsia', isCompleted: false },
          { id: 'g10-2', title: 'Sobrecrecimiento Bacteriano (SIBO)', isCompleted: false },
          { id: 'g10-3', title: 'Insuficiencia Pancreática Exocrina', isCompleted: false }
        ] 
      },
      { 
        id: 'g11', title: 'Hemorragia Digestiva', isCompleted: false, 
        subTopics: [
          { id: 'g11-1', title: 'HDA Variceal vs No Variceal', isCompleted: false },
          { id: 'g11-2', title: 'Clasificación de Forrest (Endoscopia)', isCompleted: false },
          { id: 'g11-3', title: 'Escalas Glasgow-Blatchford y Rockall', isCompleted: false },
          { id: 'g11-4', title: 'Manejo Inicial: Reposición de Volumen', isCompleted: false }
        ] 
      },
      { 
        id: 'g12', title: 'Cáncer Gástrico y Patología Biliar', isCompleted: false, 
        subTopics: [
          { id: 'g12-1', title: 'Adenocarcinoma Gástrico: Clasificación de Lauren', isCompleted: false },
          { id: 'g12-2', title: 'Colelitiasis vs Colecistitis Aguda', isCompleted: false },
          { id: 'g12-3', title: 'Coledocolitiasis y Colangitis (Puntada de Charcot)', isCompleted: false }
        ] 
      },
      { 
        id: 'g13', title: 'Hepatitis y Cirrosis Hepática', isCompleted: false, 
        subTopics: [
          { id: 'g13-1', title: 'Hepatitis Virales (A, B, C): Serología', isCompleted: false },
          { id: 'g13-2', title: 'Estigmas de Cirrosis e Hipertensión Portal', isCompleted: false },
          { id: 'g13-3', title: 'Clasificación de Child-Pugh y MELD', isCompleted: false },
          { id: 'g13-4', title: 'Complicaciones: Ascitis y Encefalopatía', isCompleted: false }
        ] 
      },
      { 
        id: 'g14', title: 'Hepatopatías por Tóxicos', isCompleted: false, 
        subTopics: [
          { id: 'g14-1', title: 'Toxicidad por Paracetamol: Manejo con N-Acetilcisteína', isCompleted: false },
          { id: 'g14-2', title: 'Hepatopatía Alcohólica: Score de Maddrey', isCompleted: false }
        ] 
      },
      { 
        id: 'g15', title: 'Pancreatitis Aguda y Crónica', isCompleted: false, 
        subTopics: [
          { id: 'g15-1', title: 'Criterios de Atlanta para Gravedad', isCompleted: false },
          { id: 'g15-2', title: 'Criterios de Ranson y APACHE II', isCompleted: false },
          { id: 'g15-3', title: 'Manejo: Hidratación Agresiva y Nutrición', isCompleted: false },
          { id: 'g15-4', title: 'TAC de Páncreas: Índice de Balthazar', isCompleted: false }
        ] 
      },
      { 
        id: 'g16', title: 'Úlcera Péptica y Zollinger Ellison', isCompleted: false, 
        subTopics: [
          { id: 'g16-1', title: 'Ulcera Duodenal vs Gástrica', isCompleted: false },
          { id: 'g16-2', title: 'Complicaciones: Perforación (Neumoperitoneo)', isCompleted: false },
          { id: 'g16-3', title: 'Gastrinoma: Fisiopatología del Zollinger Ellison', isCompleted: false }
        ] 
      },
      { 
        id: 'g17', title: 'Intestino Delgado y Grueso', isCompleted: false, 
        subTopics: [
          { id: 'g17-1', title: 'Isquemia Mesentérica Aguda', isCompleted: false },
          { id: 'g17-2', title: 'Diverticulosis y Diverticulitis (Clasificación Hinchey)', isCompleted: false },
          { id: 'g17-3', title: 'Obstrucción Intestinal: Signos Rx', isCompleted: false }
        ] 
      },
      { 
        id: 'g18', title: 'Enfermedad Inflamatoria del Intestino', isCompleted: false, 
        subTopics: [
          { id: 'g18-1', title: 'Crohn vs Colitis Ulcerosa (Diferencias)', isCompleted: false },
          { id: 'g18-2', title: 'Manifestaciones Extraintestinales', isCompleted: false },
          { id: 'g18-3', title: 'Megacolon Tóxico', isCompleted: false }
        ] 
      },
      { 
        id: 'g19', title: 'Diarrea', isCompleted: false, 
        subTopics: [
          { id: 'g19-1', title: 'Aguda (Infecciosa) vs Crónica', isCompleted: false },
          { id: 'g19-2', title: 'Osmótica, Secretora, Inflamatoria', isCompleted: false },
          { id: 'g19-3', title: 'Plan de Hidratación OMS', isCompleted: false }
        ] 
      }
    ]
  },
  {
    id: 'cirugia-torax',
    name: 'Cirugía de Tórax',
    topics: [
      { 
        id: 'ct1', title: 'Preoperatorio y Postoperatorio', isCompleted: false, 
        subTopics: [
          { id: 'ct1-1', title: 'Evaluación del Riesgo Quirúrgico (ASA)', isCompleted: false },
          { id: 'ct1-2', title: 'Manejo de Complicaciones Respiratorias Post-op', isCompleted: false }
        ] 
      },
      { 
        id: 'ct2', title: 'Alteraciones de la Pared Torácica', isCompleted: false, 
        subTopics: [
          { id: 'ct2-1', title: 'Pectus Excavatum y Carinatum', isCompleted: false },
          { id: 'ct2-2', title: 'Trauma de Tórax: Volet Costal (Tórax Inestable)', isCompleted: false }
        ] 
      },
      { 
        id: 'ct3', title: 'Alteraciones de la Pleura', isCompleted: false, 
        subTopics: [
          { id: 'ct3-1', title: 'Empiema Pleural: Etapas y Manejo', isCompleted: false },
          { id: 'ct3-2', title: 'Tubo de Drenaje Pleural: Técnica y Trampa de Agua', isCompleted: false }
        ] 
      },
      { 
        id: 'ct4', title: 'Enfermedades Quirúrgicas del Pulmón', isCompleted: false, 
        subTopics: [
          { id: 'ct4-1', title: 'Lobectomía y Neumonectomía', isCompleted: false },
          { id: 'ct4-2', title: 'Absceso Pulmonar de resolución quirúrgica', isCompleted: false }
        ] 
      },
      { 
        id: 'ct5', title: 'Enfermedades Quirúrgicas del Mediastino', isCompleted: false, 
        subTopics: [
          { id: 'ct5-1', title: 'Tumores del Mediastino Anterior (Las 4 T)', isCompleted: false },
          { id: 'ct5-2', title: 'Mediastinitis Aguda', isCompleted: false }
        ] 
      },
      { 
        id: 'ct10', title: 'Patología del Esófago y Mama', isCompleted: false, 
        subTopics: [
          { id: 'ct10-1', title: 'Divertículo de Zenker', isCompleted: false },
          { id: 'ct10-2', title: 'Cáncer de Mama: BI-RADS y Cirugía Conservadora', isCompleted: false }
        ] 
      }
    ]
  },
  {
    id: 'cirugia-abdomen',
    name: 'Cirugía de Abdomen',
    topics: [
      { 
        id: 'ca1', title: 'Patología de Pared Abdominal', isCompleted: false, 
        subTopics: [
          { id: 'ca1-1', title: 'Hernias Inguinales: Anatomía y Clasificación de Nyhus', isCompleted: false },
          { id: 'ca1-2', title: 'Hernia Incarcerada vs Estrangulada', isCompleted: false },
          { id: 'ca1-3', title: 'Eventraciones y Evisceración', isCompleted: false }
        ] 
      },
      { 
        id: 'ca2', title: 'Patología Gastroduodenal', isCompleted: false, 
        subTopics: [
          { id: 'ca2-1', title: 'Ulcera Perforada: Técnica de Graham', isCompleted: false },
          { id: 'ca2-2', title: 'Gastrectomía: Billroth I, Billroth II y Y de Roux', isCompleted: false }
        ] 
      },
      { 
        id: 'ca5', title: 'Patología de Vía Biliar', isCompleted: false, 
        subTopics: [
          { id: 'ca5-1', title: 'Colecistectomía Laparoscópica: Visión Crítica de Seguridad', isCompleted: false },
          { id: 'ca5-2', title: 'Exploración de la Vía Biliar y Tubo en T (Kher)', isCompleted: false }
        ] 
      },
      { 
        id: 'ca7', title: 'Patología de Colon y Apéndice Cecal', isCompleted: false, 
        subTopics: [
          { id: 'ca7-1', title: 'Apendicitis Aguda: Fisiopatología y Score de Alvarado', isCompleted: false },
          { id: 'ca7-2', title: 'Cáncer de Colon: Estadios de Dukes/TNM', isCompleted: false },
          { id: 'ca7-3', title: 'Procedimiento de Hartmann', isCompleted: false }
        ] 
      }
    ]
  },
  {
    id: 'aps',
    name: 'Atención Primaria en Salud',
    topics: [
      { 
        id: 'aps5', title: 'Componentes y Elementos de la APS', isCompleted: false, 
        subTopics: [
          { id: 'aps5-1', title: 'Alma-Ata 1978: Principios básicos', isCompleted: false },
          { id: 'aps5-2', title: 'Promoción vs Prevención (Niveles de Leavell y Clark)', isCompleted: false }
        ] 
      },
      { 
        id: 'aps14', title: 'Salud Materna Infantil', isCompleted: false, 
        subTopics: [
          { id: 'aps14-1', title: 'Controles Prenatales Mínimos y Carnet Perinatal', isCompleted: false },
          { id: 'aps14-2', title: 'Vacunación en Embarazadas y Niños (PAI)', isCompleted: false },
          { id: 'aps14-3', title: 'Signos de Alarma en el Embarazo', isCompleted: false }
        ] 
      },
      { 
        id: 'aps17', title: 'Estrategia AIEPI', isCompleted: false, 
        subTopics: [
          { id: 'aps17-1', title: 'Evaluación del Niño de 2 meses a 5 años', isCompleted: false },
          { id: 'aps17-2', title: 'Signos de Peligro en General', isCompleted: false },
          { id: 'aps17-3', title: 'Manejo de Diarrea y Deshidratación en el Hogar', isCompleted: false },
          { id: 'aps17-4', title: 'Evaluación de Tos y Dificultad Respiratoria', isCompleted: false }
        ] 
      }
    ]
  }
];
