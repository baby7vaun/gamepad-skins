
import { GoogleGenAI, Type } from "@google/genai";
import type { MasteringResult } from '../types';
import { MasteringStyle } from '../types';

if (!process.env.API_KEY) {
    // In a real app, this would be handled more gracefully, but for this context,
    // we assume the key is present. This check helps during development.
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        eq_suggestions: {
            type: Type.ARRAY,
            description: "A list of specific EQ adjustments. For example, 'Slight boost at 2kHz for clarity' or 'Cut at 200Hz to reduce mud'.",
            items: { type: Type.STRING }
        },
        compression_settings: {
            type: Type.ARRAY,
            description: "A list of suggested compression settings. For example, 'Apply light bus compression with a 2:1 ratio' or 'Use a fast attack to tame sharp transients'.",
            items: { type: Type.STRING }
        },
        stereo_imaging: {
            type: Type.ARRAY,
            description: "A list of suggestions for stereo width and imaging. For example, 'Slightly widen high frequencies' or 'Keep bass frequencies mono'.",
            items: { type: Type.STRING }
        },
        final_thoughts: {
            type: Type.STRING,
            description: "A brief, final summary of the mastering approach and its intended effect."
        }
    },
    required: ["eq_suggestions", "compression_settings", "stereo_imaging", "final_thoughts"]
};


export const masterTrack = async (description: string, style: MasteringStyle): Promise<MasteringResult> => {
    const prompt = `
        You are an expert audio mastering AI engine named "EgoLab AI".
        A user has submitted a track for mastering.
        
        Track Description: "${description}"
        Desired Mastering Style: "${style}"

        Based on the description and desired style, provide professional mastering analysis.
        Suggest specific, actionable settings for EQ, compression, and stereo imaging.
        Do not be conversational. Provide only the JSON object based on the requested schema.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.7,
            },
        });

        const jsonText = response.text.trim();
        if (!jsonText) {
            throw new Error("Received an empty response from the AI.");
        }
        
        const result = JSON.parse(jsonText) as MasteringResult;
        return result;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
           throw new Error(`Gemini API Error: ${error.message}`);
        }
        throw new Error("An unexpected error occurred while communicating with the Gemini API.");
    }
};
