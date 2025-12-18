
import { GoogleGenAI, Type } from "@google/genai";
import { SearchResult, CalendarEvent, EventType } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const searchMedicalUpdates = async (query: string): Promise<SearchResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Proporciona las actualizaciones médicas más recientes sobre: ${query}. Enfócate en guías clínicas, estudios recientes y avances terapéuticos en español.`,
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
      text: "Error al conectar con la IA. Por favor intenta de nuevo.", 
      sources: [] 
    };
  }
};

export const generateSmartSchedule = async (request: string, startDate: string): Promise<Omit<CalendarEvent, 'id'>[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Actúa como un organizador de estudios de medicina. El usuario solicita: "${request}". 
      La fecha de inicio es ${startDate}. 
      Genera una lista de eventos de estudio (temas específicos del 7mo semestre de medicina).
      Distribuye los temas de forma lógica y realista.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              date: { type: Type.STRING, description: "Fecha en formato YYYY-MM-DD" },
              title: { type: Type.STRING, description: "Título del tema o actividad" },
              type: { type: Type.STRING, description: "Uno de: study, exam, task, presentation" },
              description: { type: Type.STRING, description: "Breve descripción de qué estudiar" },
              reminderSet: { type: Type.BOOLEAN },
              completed: { type: Type.BOOLEAN }
            },
            required: ["date", "title", "type", "reminderSet", "completed"]
          }
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating smart schedule:", error);
    return [];
  }
};
