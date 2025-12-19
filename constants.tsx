
import { Module } from './types';

export const SEMESTER_DATA: Module[] = [
  {
    id: 'cardio',
    name: 'Cardiología',
    topics: [
      { 
        id: 'c1', title: 'Semiología Cardiaca', isCompleted: false, 
        subTopics: [
          { id: 'c1-1', title: 'Inspección y palpación del choque de la punta', isCompleted: false },
          { id: 'c1-2', title: 'Auscultación: ruidos cardiacos, desdoblamientos y ruidos agregados (R3, R4)', isCompleted: false },
          { id: 'c1-3', title: 'Soplos: cronología, foco, intensidad e irradiación', isCompleted: false },
          { id: 'c1-4', title: 'Pulso venoso yugular: ondas y presión venosa central', isCompleted: false },
          { id: 'c1-5', title: 'Semiología de los pulsos periféricos y edemas', isCompleted: false }
        ] 
      },
      { 
        id: 'c2', title: 'Exámenes Complementarios', isCompleted: false, 
        subTopics: [
          { id: 'c2-1', title: 'Radiología de tórax: silueta cardiaca y campos pulmonares', isCompleted: false },
          { id: 'c2-2', title: 'Ecocardiografía transtorácica y transesofágica', isCompleted: false },
          { id: 'c2-3', title: 'Biomarcadores: Troponinas, CPK-MB y BNP/NT-proBNP', isCompleted: false },
          { id: 'c2-4', title: 'Pruebas de esfuerzo y Ergometría', isCompleted: false }
        ] 
      },
      { 
        id: 'c3', title: 'Electrocardiograma Normal y Patológico', isCompleted: false, 
        subTopics: [
          { id: 'c3-1', title: 'Eje eléctrico, ritmo, frecuencia y ondas (P, QRS, T)', isCompleted: false },
          { id: 'c3-2', title: 'Bloqueos de rama (Derecha e Izquierda)', isCompleted: false },
          { id: 'c3-3', title: 'Arritmias supraventriculares y ventriculares comunes', isCompleted: false },
          { id: 'c3-4', title: 'Signos de hipertrofia auricular y ventricular', isCompleted: false }
        ] 
      },
      { 
        id: 'c4', title: 'Fiebre Reumática', isCompleted: false, 
        subTopics: [
          { id: 'c4-1', title: 'Etiopatogenia y criterios de Jones actualizados', isCompleted: false },
          { id: 'c4-2', title: 'Manifestaciones clínicas: Carditis, Artritis y Corea', isCompleted: false },
          { id: 'c4-3', title: 'Tratamiento de la fase aguda y profilaxis secundaria', isCompleted: false }
        ] 
      },
      { 
        id: 'c5', title: 'Insuficiencia Cardiaca (Función Sistólica Normal)', isCompleted: false, 
        subTopics: [
          { id: 'c5-1', title: 'Fisiopatología de la disfunción diastólica', isCompleted: false },
          { id: 'c5-2', title: 'Criterios diagnósticos ecocardiográficos', isCompleted: false },
          { id: 'c5-3', title: 'Manejo de comorbilidades y control de volemia', isCompleted: false }
        ] 
      },
      { 
        id: 'c6', title: 'Insuficiencia Cardiaca (Función Sistólica Alterada)', isCompleted: false, 
        subTopics: [
          { id: 'c6-1', title: 'Fisiopatología de la remodelación ventricular', isCompleted: false },
          { id: 'c6-2', title: 'Clasificación NYHA y estadios evolutivos', isCompleted: false },
          { id: 'c6-3', title: 'Tratamiento farmacológico: IECA/ARAII, Beta-bloqueantes, ARM e iSGLT2', isCompleted: false },
          { id: 'c6-4', title: 'Manejo de la IC descompensada: diuréticos e inotrópicos', isCompleted: false }
        ] 
      },
      { 
        id: 'c7', title: 'Endocarditis Bacteriana', isCompleted: false, 
        subTopics: [
          { id: 'c7-1', title: 'Microbiología y grupos de riesgo (HACEK)', isCompleted: false },
          { id: 'c7-2', title: 'Criterios de Duke modificados', isCompleted: false },
          { id: 'c7-3', title: 'Esquemas antibióticos empíricos y dirigidos', isCompleted: false },
          { id: 'c7-4', title: 'Indicaciones de tratamiento quirúrgico precoz', isCompleted: false }
        ] 
      },
      { 
        id: 'c8', title: 'Miocardiopatía Chagásica', isCompleted: false, 
        subTopics: [
          { id: 'c8-1', title: 'Ciclo del Trypanosoma cruzi y transmisión', isCompleted: false },
          { id: 'c8-2', title: 'Fase crónica: trastornos de conducción y aneurismas apicales', isCompleted: false },
          { id: 'c8-3', title: 'Tratamiento antiparasitario y manejo de la falla cardiaca', isCompleted: false }
        ] 
      },
      { 
        id: 'c9', title: 'Patología Valvular', isCompleted: false, 
        subTopics: [
          { id: 'c9-1', title: 'Estenosis e Insuficiencia Mitral: clínica y soplo', isCompleted: false },
          { id: 'c9-2', title: 'Estenosis e Insuficiencia Aórtica: tríada clásica y pulsos', isCompleted: false },
          { id: 'c9-3', title: 'Indicaciones de reemplazo valvular o reparación', isCompleted: false }
        ] 
      },
      { 
        id: 'c10', title: 'Hipertensión Arterial', isCompleted: false, 
        subTopics: [
          { id: 'c10-1', title: 'Técnica correcta de toma de presión arterial', isCompleted: false },
          { id: 'c10-2', title: 'HTA esencial vs Secundaria: cuándo sospechar', isCompleted: false },
          { id: 'c10-3', title: 'Lesión de órgano blanco: fondo de ojo y microalbuminuria', isCompleted: false },
          { id: 'c10-4', title: 'Estratificación del riesgo cardiovascular y metas terapéuticas', isCompleted: false }
        ] 
      },
      { 
        id: 'c11', title: 'Infarto Agudo de Miocardio', isCompleted: false, 
        subTopics: [
          { id: 'c11-1', title: 'Fisiopatología de la placa ateromatosa', isCompleted: false },
          { id: 'c11-2', title: 'IAM con elevación del ST (IAMCEST): protocolo de reperfusión', isCompleted: false },
          { id: 'c11-3', title: 'Fibrinolíticos vs Angioplastia primaria: tiempos puerta-balón', isCompleted: false },
          { id: 'c11-4', title: 'Complicaciones mecánicas y eléctricas post-infarto', isCompleted: false }
        ] 
      },
      { 
        id: 'c12', title: 'Angina de Pecho', isCompleted: false, 
        subTopics: [
          { id: 'c12-1', title: 'Angina estable: clasificación CCS y manejo médico', isCompleted: false },
          { id: 'c12-2', title: 'Angina inestable y SCASEST: estratificación de riesgo (TIMI/GRACE)', isCompleted: false },
          { id: 'c12-3', title: 'Diagnóstico diferencial del dolor torácico', isCompleted: false }
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
          { id: 'n1-1', title: 'Anatomía segmentaria bronquial y lobar', isCompleted: false },
          { id: 'n1-2', title: 'Mecánica respiratoria y músculos accesorios', isCompleted: false },
          { id: 'n1-3', title: 'Patrones ventilatorios normales y patológicos', isCompleted: false }
        ] 
      },
      { 
        id: 'n2', title: 'Semiología Respiratoria', isCompleted: false, 
        subTopics: [
          { id: 'n2-1', title: 'Inspección: tipos de tórax y cianosis', isCompleted: false },
          { id: 'n2-2', title: 'Palpación: vibraciones vocales y expansión', isCompleted: false },
          { id: 'n2-3', title: 'Percusión: matidez, sonoridad e hipersonoridad', isCompleted: false },
          { id: 'n2-4', title: 'Auscultación: murmullo vesicular, estertores, sibilancias y frote', isCompleted: false }
        ] 
      },
      { 
        id: 'n3', title: 'Métodos de Exploración de Tórax', isCompleted: false, 
        subTopics: [
          { id: 'n3-1', title: 'Radiografía: interpretación de densidades y silueta mediastínica', isCompleted: false },
          { id: 'n3-2', title: 'Espirometría: patrones obstructivo, restrictivo y mixto', isCompleted: false },
          { id: 'n3-3', title: 'Gasometría arterial: trastornos ácido-base e hipoxemia', isCompleted: false },
          { id: 'n3-4', title: 'Fibrobroncoscopía: indicaciones diagnósticas y terapéuticas', isCompleted: false },
          { id: 'n3-5', title: 'Toracocentesis: análisis del líquido pleural (Criterios de Light)', isCompleted: false }
        ] 
      },
      { 
        id: 'n4', title: 'Neumonías', isCompleted: false, 
        subTopics: [
          { id: 'n4-1', title: 'Neumonía adquirida en la comunidad (NAC): escalas CURB-65 y PSI', isCompleted: false },
          { id: 'n4-2', title: 'Neumonía intrahospitalaria: patógenos multirresistentes', isCompleted: false },
          { id: 'n4-3', title: 'Tratamiento antibiótico empírico y prevención', isCompleted: false }
        ] 
      },
      { 
        id: 'n5', title: 'Patologías Bronquiales', isCompleted: false, 
        subTopics: [
          { id: 'n5-1', title: 'Bronquitis aguda: etiología y manejo sintomático', isCompleted: false },
          { id: 'n5-2', title: 'Bronquiectasias: fisiopatología y drenaje postural', isCompleted: false }
        ] 
      },
      { 
        id: 'n6', title: 'EPOC', isCompleted: false, 
        subTopics: [
          { id: 'n6-1', title: 'Definición, factores de riesgo y fisiopatología', isCompleted: false },
          { id: 'n6-2', title: 'Clasificación GOLD: grados de obstrucción y grupos A-E', isCompleted: false },
          { id: 'n6-3', title: 'Manejo de exacerbaciones y oxigenoterapia domiciliaria', isCompleted: false }
        ] 
      },
      { 
        id: 'n7', title: 'Insuficiencia Respiratoria Aguda', isCompleted: false, 
        subTopics: [
          { id: 'n7-1', title: 'Fisiopatología de la hipoxemia: Shunt, V/Q y difusión', isCompleted: false },
          { id: 'n7-2', title: 'SDR del adulto: criterios de Berlín', isCompleted: false },
          { id: 'n7-3', title: 'Ventilación mecánica no invasiva vs invasiva', isCompleted: false }
        ] 
      },
      { 
        id: 'n8', title: 'Asma', isCompleted: false, 
        subTopics: [
          { id: 'n8-1', title: 'Fenotipos y endotipos del asma', isCompleted: false },
          { id: 'n8-2', title: 'Diagnóstico: clínica y variabilidad de la función pulmonar', isCompleted: false },
          { id: 'n8-3', title: 'Manejo escalonado según GINA', isCompleted: false },
          { id: 'n8-4', title: 'Crisis asmática: evaluación de gravedad y tratamiento de rescate', isCompleted: false }
        ] 
      },
      { 
        id: 'n9', title: 'Enfermedades Pleurales', isCompleted: false, 
        subTopics: [
          { id: 'n9-1', title: 'Derrame pleural: trasudados vs exudados', isCompleted: false },
          { id: 'n9-2', title: 'Neumotórax espontáneo, traumático e hipertensivo', isCompleted: false },
          { id: 'n9-3', title: 'Empiema pleural: fases y decorticación', isCompleted: false }
        ] 
      },
      { 
        id: 'n10', title: 'Tromboembolismo Pulmonar', isCompleted: false, 
        subTopics: [
          { id: 'n10-1', title: 'Factores de riesgo (Tríada de Virchow) y escalas de Wells/Geneva', isCompleted: false },
          { id: 'n10-2', title: 'Dímero D, AngioTAC y Gammagrafía V/Q', isCompleted: false },
          { id: 'n10-3', title: 'Tratamiento: Anticoagulación y Trombólisis en TEP de alto riesgo', isCompleted: false }
        ] 
      },
      { 
        id: 'n11', title: 'Urgencias Respiratorias', isCompleted: false, 
        subTopics: [
          { id: 'n11-1', title: 'Hemoptisis masiva: abordaje inicial y control de vía aérea', isCompleted: false },
          { id: 'n11-2', title: 'Aspiración de cuerpo extraño: clínica y broncoscopía', isCompleted: false }
        ] 
      },
      { 
        id: 'n12', title: 'Tuberculosis Pulmonar', isCompleted: false, 
        subTopics: [
          { id: 'n12-1', title: 'Inmunopatogenia del complejo primario', isCompleted: false },
          { id: 'n12-2', title: 'Diagnóstico: Baciloscopía, Cultivo y GeneXpert', isCompleted: false },
          { id: 'n12-3', title: 'Esquemas de tratamiento (DOTS) y manejo de reacciones adversas', isCompleted: false }
        ] 
      },
      { 
        id: 'n13', title: 'Cáncer de Pulmón', isCompleted: false, 
        subTopics: [
          { id: 'n13-1', title: 'Clasificación histológica: Células pequeñas vs No pequeñas', isCompleted: false },
          { id: 'n13-2', title: 'Síndromes paraneoplásicos y síndrome de vena cava superior', isCompleted: false },
          { id: 'n13-3', title: 'Estadificación TNM y principios del tratamiento', isCompleted: false }
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
          { id: 'g1-1', title: 'Candidiasis oral y leucoplasia', isCompleted: false },
          { id: 'g1-2', title: 'Gingivoestomatitis y aftas recurrentes', isCompleted: false }
        ] 
      },
      { 
        id: 'g2', title: 'Enfermedad de Reflujo Gastroesofágico', isCompleted: false, 
        subTopics: [
          { id: 'g2-1', title: 'Fisiopatología: relajación del EEI y hernia hiatal', isCompleted: false },
          { id: 'g2-2', title: 'Síntomas típicos (pirosis, regurgitación) y atípicos', isCompleted: false },
          { id: 'g2-3', title: 'Diagnóstico: pH-metría y esofagomanometría', isCompleted: false }
        ] 
      },
      { 
        id: 'g3', title: 'Esofagitis', isCompleted: false, 
        subTopics: [
          { id: 'g3-1', title: 'Esofagitis péptica: clasificación de Los Ángeles', isCompleted: false },
          { id: 'g3-2', title: 'Esofagitis eosinofílica y medicamentosa', isCompleted: false }
        ] 
      },
      { 
        id: 'g4', title: 'Acalasia Esofágica', isCompleted: false, 
        subTopics: [
          { id: 'g4-1', title: 'Etiología y anatomía patológica (plexo de Auerbach)', isCompleted: false },
          { id: 'g4-2', title: 'Imagen en "pico de pájaro" en el esofagograma', isCompleted: false },
          { id: 'g4-3', title: 'Tratamiento: Dilatación, Toxina botulínica y Miotomía de Heller', isCompleted: false }
        ] 
      },
      { 
        id: 'g5', title: 'Esófago de Barret', isCompleted: false, 
        subTopics: [
          { id: 'g5-1', title: 'Histología: Metaplasia intestinal especializada', isCompleted: false },
          { id: 'g5-2', title: 'Seguimiento endoscópico y manejo de la displasia', isCompleted: false }
        ] 
      },
      { 
        id: 'g6', title: 'Trastornos Motores del Esófago', isCompleted: false, 
        subTopics: [
          { id: 'g6-1', title: 'Espasmo esofágico difuso y esófago en "martillo neumático"', isCompleted: false }
        ] 
      },
      { 
        id: 'g7', title: 'Fisiología de la Secreción Gástrica y Gastritis', isCompleted: false, 
        subTopics: [
          { id: 'g7-1', title: 'Barrera mucosa y células parietales (HCl)', isCompleted: false },
          { id: 'g7-2', title: 'Gastritis aguda (erosiva) vs Crónica (atrófica)', isCompleted: false },
          { id: 'g7-3', title: 'Infección por Helicobacter pylori: diagnóstico y erradicación', isCompleted: false }
        ] 
      },
      { 
        id: 'g8', title: 'Semiología Gastrointestinal', isCompleted: false, 
        subTopics: [
          { id: 'g8-1', title: 'Abdomen agudo médico vs quirúrgico', isCompleted: false },
          { id: 'g8-2', title: 'Semiología de la ictericia, ascitis y esplenomegalia', isCompleted: false }
        ] 
      },
      { id: 'g9', title: 'Síndrome de Mallory Weiss', isCompleted: false, subTopics: [{ id: 'g9-1', title: 'Relación con el vómito y manejo endoscópico', isCompleted: false }] },
      { 
        id: 'g10', title: 'Síndrome de Mala Absorción', isCompleted: false, 
        subTopics: [
          { id: 'g10-1', title: 'Enfermedad Celíaca: serología y biopsia', isCompleted: false },
          { id: 'g10-2', title: 'Sobrecrecimiento bacteriano e insuficiencia pancreática', isCompleted: false }
        ] 
      },
      { 
        id: 'g11', title: 'Hemorragia Digestiva', isCompleted: false, 
        subTopics: [
          { id: 'g11-1', title: 'HDA no varicosa: clasificación de Forrest', isCompleted: false },
          { id: 'g11-2', title: 'HDA varicosa: profilaxis y manejo agudo', isCompleted: false },
          { id: 'g11-3', title: 'Hemorragia digestiva baja: divertículos y angiodisplasia', isCompleted: false }
        ] 
      },
      { 
        id: 'g12', title: 'Cáncer Gástrico', isCompleted: false, 
        subTopics: [
          { id: 'g12-1', title: 'Factores de riesgo y clasificación de Lauren', isCompleted: false },
          { id: 'g12-2', title: 'Clínica: saciedad precoz, anemia y pérdida de peso', isCompleted: false }
        ] 
      },
      { 
        id: 'g13', title: 'Patología de Vía Biliar (Colecistitis, Colangitis)', isCompleted: false, 
        subTopics: [
          { id: 'g13-1', title: 'Colelitiasis y Colecistitis aguda: criterios de Tokio', isCompleted: false },
          { id: 'g13-2', title: 'Coledocolitiasis y Colangitis: Tríada de Charcot y Pentada de Reynolds', isCompleted: false }
        ] 
      },
      { 
        id: 'g14', title: 'Hepatitis Infecciosa', isCompleted: false, 
        subTopics: [
          { id: 'g14-1', title: 'Marcadores serológicos de Hepatitis B y C', isCompleted: false },
          { id: 'g14-2', title: 'Hepatitis A: epidemiología y profilaxis', isCompleted: false }
        ] 
      },
      { 
        id: 'g15', title: 'Sídrome de Hipertensión Portal', isCompleted: false, 
        subTopics: [
          { id: 'g15-1', title: 'Fisiopatología de la circulación colateral', isCompleted: false },
          { id: 'g15-2', title: 'Complicaciones: Ascitis, Encefalopatía y Peritonitis Bacteriana Espontánea', isCompleted: false }
        ] 
      },
      { 
        id: 'g16', title: 'Cirrosis Hepática', isCompleted: false, 
        subTopics: [
          { id: 'g16-1', title: 'Escalas pronósticas: Child-Pugh y MELD', isCompleted: false },
          { id: 'g16-2', title: 'Seguimiento para hepatocarcinoma', isCompleted: false }
        ] 
      },
      { id: 'g17', title: 'Hepatopatías por Tóxicos', isCompleted: false, subTopics: [{ id: 'g17-1', title: 'Hepatitis alcohólica y esteatohepatitis no alcohólica', isCompleted: false }] },
      { 
        id: 'g18', title: 'Pancreatitis Aguda y Crónica', isCompleted: false, 
        subTopics: [
          { id: 'g18-1', title: 'Etiología (Biliar vs Alcohol) y criterios de Atlanta', isCompleted: false },
          { id: 'g18-2', title: 'Manejo inicial: hidratación agresiva y nutrición', isCompleted: false },
          { id: 'g18-3', title: 'Pancreatitis crónica: esteatorrea y calcificaciones', isCompleted: false }
        ] 
      },
      { id: 'g19', title: 'Úlcera Péptica y S. de Solinger Ellison', isCompleted: false, subTopics: [{ id: 'g19-1', title: 'Gastrinoma y úlceras refractarias', isCompleted: false }] },
      { id: 'g20', title: 'Anatomía y Fisiología de Intestino Delgado y Grueso', isCompleted: false, subTopics: [{ id: 'g20-1', title: 'Absorción de nutrientes y motilidad colónica', isCompleted: false }] },
      { 
        id: 'g21', title: 'Enfermedad Inflamatoria del Intestino', isCompleted: false, 
        subTopics: [
          { id: 'g21-1', title: 'Colitis Ulcerosa vs Enfermedad de Crohn: diagnóstico diferencial', isCompleted: false },
          { id: 'g21-2', title: 'Tratamiento con 5-ASA, corticoides y biológicos', isCompleted: false }
        ] 
      },
      { id: 'g22', title: 'Diarrea', isCompleted: false, subTopics: [{ id: 'g22-1', title: 'Diarrea osmótica, secretora, inflamatoria y motora', isCompleted: false }] }
    ]
  },
  {
    id: 'cirugia-torax',
    name: 'Cirugía de Tórax',
    topics: [
      { 
        id: 'ct1', title: 'Preoperatorio', isCompleted: false, 
        subTopics: [
          { id: 'ct1-1', title: 'Evaluación de la reserva funcional respiratoria', isCompleted: false },
          { id: 'ct1-2', title: 'Riesgo quirúrgico cardiovascular y escalas', isCompleted: false }
        ] 
      },
      { 
        id: 'ct2', title: 'Post Operatorio', isCompleted: false, 
        subTopics: [
          { id: 'ct2-1', title: 'Manejo de la trampa de agua y tubos de drenaje', isCompleted: false },
          { id: 'ct2-2', title: 'Prevención de atelectasias y fisioterapia respiratoria', isCompleted: false }
        ] 
      },
      { 
        id: 'ct3', title: 'Alteraciones de la Pared Torácica', isCompleted: false, 
        subTopics: [
          { id: 'ct3-1', title: 'Pectus Excavatum y Carinatum: cirugía de Nuss', isCompleted: false },
          { id: 'ct3-2', title: 'Tórax inestable (Volet costal): fijación y manejo', isCompleted: false }
        ] 
      },
      { 
        id: 'ct4', title: 'Alteraciones de la Pleura', isCompleted: false, 
        subTopics: [
          { id: 'ct4-1', title: 'Tratamiento quirúrgico del empiema: fase organizada', isCompleted: false },
          { id: 'ct4-2', title: 'Pleurodesis química e indicaciones', isCompleted: false }
        ] 
      },
      { 
        id: 'ct5', title: 'Enfermedades Quirúrgicas del Pulmón', isCompleted: false, 
        subTopics: [
          { id: 'ct5-1', title: 'Nódulo pulmonar solitario: abordaje y VATS', isCompleted: false },
          { id: 'ct5-2', title: 'Lobectomía y Neumonectomía: técnicas y complicaciones', isCompleted: false }
        ] 
      },
      { 
        id: 'ct6', title: 'Enfermedades Quirúrgicas del Mediastino', isCompleted: false, 
        subTopics: [
          { id: 'ct6-1', title: 'Tumores del compartimento anterior (4 T)', isCompleted: false },
          { id: 'ct6-2', title: 'Mediastinitis aguda posquirúrgica', isCompleted: false }
        ] 
      },
      { id: 'ct7', title: 'Enfermedades Quirúrgicas del Corazón', isCompleted: false, subTopics: [{ id: 'ct7-1', title: 'Cirugía de Bypass coronario (CABG) y recambio valvular', isCompleted: false }] },
      { id: 'ct8', title: 'Marcapaso Cardiaco', isCompleted: false, subTopics: [{ id: 'ct8-1', title: 'Accesos venosos y ubicación del electrodo', isCompleted: false }] },
      { id: 'ct9', title: 'Enfermedades Arteriales Quirúrgicas', isCompleted: false, subTopics: [{ id: 'ct9-1', title: 'Aneurismas de aorta torácica y disección aórtica', isCompleted: false }] },
      { id: 'ct10', title: 'Trastornos de las Venas y Linfáticos', isCompleted: false, subTopics: [{ id: 'ct10-1', title: 'Quilotórax: manejo dietético y quirúrgico', isCompleted: false }] },
      { id: 'ct11', title: 'Patología del Esófago', isCompleted: false, subTopics: [{ id: 'ct11-1', title: 'Esofagectomía y sustitutos esofágicos', isCompleted: false }] },
      { id: 'ct12', title: 'Patología de Mama', isCompleted: false, subTopics: [{ id: 'ct12-1', title: 'Cirugía conservadora vs Mastectomía radical', isCompleted: false }, { id: 'ct12-2', title: 'Biopsia del ganglio centinela', isCompleted: false }] }
    ]
  },
  {
    id: 'cirugia-abdomen',
    name: 'Cirugía de Abdomen',
    topics: [
      { 
        id: 'ca1', title: 'Patología de Pared Abdominal', isCompleted: false, 
        subTopics: [
          { id: 'ca1-1', title: 'Anatomía del conducto inguinal', isCompleted: false },
          { id: 'ca1-2', title: 'Hernias inguinales, crurales y umbilicales: técnica de Lichtenstein', isCompleted: false },
          { id: 'ca1-3', title: 'Hernias complicadas: encarcelada vs estrangulada', isCompleted: false }
        ] 
      },
      { 
        id: 'ca2', title: 'Patología Gastroduodenal', isCompleted: false, 
        subTopics: [
          { id: 'ca2-1', title: 'Cirugía de la úlcera péptica complicada (Perforación/Obstrucción)', isCompleted: false },
          { id: 'ca2-2', title: 'Gastrectomía subtotal y total: reconstrucciones Billroth y Y de Roux', isCompleted: false }
        ] 
      },
      { 
        id: 'ca3', title: 'Patología de Intestino Delgado/Yeyuno e Íleon', isCompleted: false, 
        subTopics: [
          { id: 'ca3-1', title: 'Íleo mecánico vs adinámico', isCompleted: false },
          { id: 'ca3-2', title: 'Divertículo de Meckel: regla de los 2', isCompleted: false }
        ] 
      },
      { 
        id: 'ca4', title: 'Patología y Trauma Hepático', isCompleted: false, 
        subTopics: [
          { id: 'ca4-1', title: 'Trauma hepático: maniobra de Pringle y empaquetamiento', isCompleted: false },
          { id: 'ca4-2', title: 'Abscesos hepáticos piógenos y amebianos', isCompleted: false }
        ] 
      },
      { id: 'ca5', title: 'Patología de Vía Biliar', isCompleted: false, subTopics: [{ id: 'ca5-1', title: 'Colelap: técnica y triángulo de Calot', isCompleted: false }, { id: 'ca5-2', title: 'Lesiones iatrogénicas de la vía biliar', isCompleted: false }] },
      { id: 'ca6', title: 'Páncreas y Pancreatitis', isCompleted: false, subTopics: [{ id: 'ca6-1', title: 'Cirugía de Whipple y necrosectomía pancreática', isCompleted: false }] },
      { 
        id: 'ca7', title: 'Patología de Colon y Apéndice Cecal', isCompleted: false, 
        subTopics: [
          { id: 'ca7-1', title: 'Apendicitis aguda: fases histopatológicas y puntos dolorosos', isCompleted: false },
          { id: 'ca7-2', title: 'Enfermedad diverticular: clasificación de Hinchey', isCompleted: false },
          { id: 'ca7-3', title: 'Megacolon chagásico: técnica de Duhamel-Haddad', isCompleted: false }
        ] 
      },
      { id: 'ca8', title: 'Peritoneo y Peritonitis', isCompleted: false, subTopics: [{ id: 'ca8-1', title: 'Peritonitis primaria, secundaria y terciaria', isCompleted: false }, { id: 'ca8-2', title: 'Lavado peritoneal y abdomen abierto', isCompleted: false }] },
      { id: 'ca9', title: 'Patología Ano Orificial', isCompleted: false, subTopics: [{ id: 'ca9-1', title: 'Tratamiento de hemorroides internas y externas', isCompleted: false }, { id: 'ca9-2', title: 'Abscesos perianales y fístulas', isCompleted: false }] }
    ]
  },
  {
    id: 'aps',
    name: 'Atención Primaria en Salud',
    topics: [
      { id: 'a1', title: 'Origen de la A.P.S.', isCompleted: false, subTopics: [{ id: 'a1-1', title: 'Declaración de Alma-Ata (1978)', isCompleted: false }, { id: 'a1-2', title: 'Salud para todos en el año 2000', isCompleted: false }] },
      { id: 'a2', title: 'Definición de Proyecto Social', isCompleted: false, subTopics: [{ id: 'a2-1', title: 'Diagnóstico situacional y árbol de problemas', isCompleted: false }] },
      { id: 'a3', title: 'Marco Conceptual de la APS', isCompleted: false, subTopics: [{ id: 'a3-1', title: 'APS Integral vs Selectiva', isCompleted: false }] },
      { id: 'a4', title: 'Nociones Generales de Proyecto Social', isCompleted: false, subTopics: [{ id: 'a4-1', title: 'Ciclo de vida del proyecto: preinversión, ejecución y evaluación', isCompleted: false }] },
      { id: 'a5', title: 'Componentes y Elementos de la APS', isCompleted: false, subTopics: [{ id: 'a5-1', title: 'Saneamiento básico y agua potable', isCompleted: false }, { id: 'a5-2', title: 'Asistencia materno-infantil y planificación familiar', isCompleted: false }] },
      { id: 'a6', title: 'Participación Comunitaria', isCompleted: false, subTopics: [{ id: 'a6-1', title: 'Organización comunitaria y salud colectiva', isCompleted: false }] },
      { id: 'a7', title: '¿Qué es un Proyecto Social?', isCompleted: false, subTopics: [{ id: 'a7-1', title: 'Intervenciones orientadas al bienestar social', isCompleted: false }] },
      { id: 'a8', title: 'Elaboración de Proyectos Sociales', isCompleted: false, subTopics: [{ id: 'a8-1', title: 'Matriz de marco lógico', isCompleted: false }] },
      { id: 'a9', title: 'Organización de Brigadas Sociales', isCompleted: false, subTopics: [{ id: 'a9-1', title: 'Logística en zonas rurales y grupos vulnerables', isCompleted: false }] },
      { id: 'a10', title: 'Programas y Estrategias en A.P.S.', isCompleted: false, subTopics: [{ id: 'a10-1', title: 'SAFCI (Salud Familiar Comunitaria Intercultural)', isCompleted: false }] },
      { id: 'a11', title: 'Contexto Socio Cultural', isCompleted: false, subTopics: [{ id: 'a11-1', title: 'Impacto de la cultura en el proceso salud-enfermedad', isCompleted: false }] },
      { id: 'a12', title: 'Educación para la Salud', isCompleted: false, subTopics: [{ id: 'a12-1', title: 'Metodologías didácticas y comunicación asertiva', isCompleted: false }] },
      { id: 'a13', title: 'Investigación en APS', isCompleted: false, subTopics: [{ id: 'a13-1', title: 'ASIS (Análisis de la Situación Integral de Salud)', isCompleted: false }] },
      { id: 'a14', title: 'Atención Primaria Específica', isCompleted: false, subTopics: [{ id: 'a14-1', title: 'Programas de TBC, Chagas y Malaria en comunidad', isCompleted: false }] },
      { id: 'a15', title: 'Salud Mental', isCompleted: false, subTopics: [{ id: 'a15-1', title: 'Prevención de violencia familiar y adicciones', isCompleted: false }] },
      { id: 'a16', title: 'Salud Materna Infantil', isCompleted: false, subTopics: [{ id: 'a16-1', title: 'Control prenatal reenfocado y señales de peligro', isCompleted: false }, { id: 'a16-2', title: 'Cadena de frío y PAI (Programa Ampliado de Inmunización)', isCompleted: false }] },
      { id: 'a17', title: 'Salud Oral', isCompleted: false, subTopics: [{ id: 'a17-1', title: 'Técnicas de cepillado y fluorización masiva', isCompleted: false }] },
      { id: 'a18', title: 'Medicina Moderna, Tradicional y Alternativa', isCompleted: false, subTopics: [{ id: 'a18-1', title: 'Articulación entre medicina académica y tradicional', isCompleted: false }] },
      { id: 'a19', title: 'AIEPI', isCompleted: false, subTopics: [{ id: 'a19-1', title: 'Cuadros de procedimientos: Evaluar, Clasificar y Tratar', isCompleted: false }, { id: 'a19-2', title: 'Manejo de IRAS y EDAS en el menor de 5 años', isCompleted: false }] }
    ]
  }
];
