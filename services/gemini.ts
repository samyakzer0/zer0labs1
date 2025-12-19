import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
// Note: API Key must be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateMissionLog = async (): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Simulated Log: Telemetry sensors indicate a 0.4% fluctuation in the accretion disk luminosity. Gravity wells holding steady. No immediate anomalies detected. (Add API_KEY to enable AI analysis)";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        You are the AI Onboard Computer of the Perseus Space Station orbiting a supermassive black hole. 
        Generate a short, scientific, yet slightly ominous mission log entry for the current shift. 
        Mention specific astrophysical readings (hawking radiation, event horizon stability, etc.).
        Keep it under 50 words.
      `,
    });
    
    return response.text || "Error retrieving log data.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "CRITICAL ERROR: AI Core connection unstable. Using backup telemetry.";
  }
};
