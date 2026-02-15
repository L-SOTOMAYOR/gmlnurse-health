
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHealthAdvice = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userQuery,
      config: {
        systemInstruction: `Eres un asistente virtual experto de GML Nurse Infusion. 
        Tu objetivo es orientar a los pacientes sobre nuestros servicios en Puerto Rico y Estados Unidos.
        Nuestros servicios incluyen: Sueroterapias, Control de Peso, Nano Mesoterapia, Masajes Linfáticos, Escleroterapia y Cuidado de Heridas.
        Responde siempre en español de forma profesional, amable y clara. 
        IMPORTANTE: No sustituyas el consejo médico profesional, recomienda siempre agendar una cita con nuestras enfermeras profesionales.
        Incluye los teléfonos 939-254-2268 o 214-244-4685 cuando sea relevante.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, hubo un problema al procesar tu consulta. Por favor, comunícate directamente con nosotros al 939-254-2268.";
  }
};

export const getSymptomServiceSuggestion = async (symptoms: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analiza estos síntomas y sugiere cuál de nuestros servicios de GML Nurse Infusion podría ser más útil: ${symptoms}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestion: { type: Type.STRING, description: "Nombre del servicio recomendado" },
            reason: { type: Type.STRING, description: "Razón por la cual se recomienda" },
            urgency: { type: Type.STRING, enum: ["baja", "media", "alta"], description: "Nivel de urgencia sugerido" }
          },
          required: ["suggestion", "reason", "urgency"]
        }
      }
    });
    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return null;
  }
};
