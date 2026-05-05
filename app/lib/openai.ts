import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;
const baseURL = process.env.OPENAI_BASE_URL; // e.g. "https://openrouter.ai/api/v1"

export const openai = apiKey ? new OpenAI({ 
  apiKey,
  ...(baseURL ? { baseURL } : {}) 
}) : null;

if (!apiKey) {
  console.warn("OPENAI_API_KEY is not defined. AI generation will be disabled.");
}
