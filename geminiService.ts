
import { GoogleGenAI, Type } from "@google/genai";
import { SearchResult, CalendarEvent, ClinicalCase } from "./types";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY}); as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const searchMedicalUpdates = async (query: string): Promise<SearchResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Proporciona las actualizaciones médicas más recientes sobre: ${query}. Enfócate en guías clínicas (AHA, ESC, GINA, GOLD), estudios recientes de NEJM/Lancet y avances terapéuticos. Responde en español de forma técnica pero concisa.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "No se pudo generar una respuesta.";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    const sources = chunks
      .filter(chunk => chunk.web)
      .map(chunk => ({
        title: chunk.web?.title || "Fuente externa",
        uri: chunk.web?.uri || "#"
      }));

    return { text, sources };
  } catch (error) {
    console.error("Error searching medical updates:", error);
    return { 
      text: "Error al conectar con la IA de Google. Verifica tu conexión.", 
      sources: [] 
    };
  }
};

export const generateSmartSchedule = async (request: string, startDate: string): Promise<Omit<CalendarEvent, 'id'>[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Actúa como un decano de facultad de medicina organizando el 7mo semestre (Cardiología, Neumología, Gastroenterología, Cirugía). El usuario solicita: "${request}". 
      La fecha de inicio es ${startDate}. 
      Genera una lista de eventos de estudio técnica.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              date: { type: Type.STRING },
              title: { type: Type.STRING },
              type: { type: Type.STRING },
              description: { type: Type.STRING },
              reminderSet: { type: Type.BOOLEAN },
              completed: { type: Type.BOOLEAN }
            },
            required: ["date", "title", "type", "reminderSet", "completed"]
          }
        }
      }
    });

    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Error generating smart schedule:", error);
    return [];
  }
};

export const generateClinicalCase = async (topic: string): Promise<ClinicalCase | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Genera un caso clínico complejo para un estudiante de medicina de 7mo semestre sobre el tema: "${topic}". 
      El caso debe incluir perfil del paciente, síntomas, constantes vitales, hallazgos al examen físico, diagnóstico correcto (basado en evidencia), explicación fisiopatológica y manejo sugerido.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            patientProfile: { type: Type.STRING },
            symptoms: { type: Type.ARRAY, items: { type: Type.STRING } },
            vitals: { 
              type: Type.OBJECT, 
              properties: {
                TA: { type: Type.STRING },
                FC: { type: Type.STRING },
                FR: { type: Type.STRING },
                Temp: { type: Type.STRING },
                SatO2: { type: Type.STRING }
              },
              required: ["TA", "FC", "FR", "Temp", "SatO2"]
            },
            physicalExam: { type: Type.STRING },
            correctDiagnosis: { type: Type.STRING },
            explanation: { type: Type.STRING },
            suggestedManagement: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["patientProfile", "symptoms", "vitals", "physicalExam", "correctDiagnosis", "explanation", "suggestedManagement"]
        }
      }
    });

    return JSON.parse(response.text || "null");
  } catch (error) {
    console.error("Error generating clinical case:", error);
    return null;
  }
};
