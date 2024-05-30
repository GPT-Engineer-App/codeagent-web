/*
Use like this:
import { create } from 'lib/openai';

const res = await create({messages: [{role: 'system', content: 'What is the capital of France?'}], model: 'gpt-3.5-turbo'}})
console.log(res.choices[0].message.content);
*/


import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Use the OpenAI API key from environment variables
  baseURL: process.env.OPENAI_BASE_URL || 'https://api.openai.com', // Default to OpenAI's base URL
  dangerouslyAllowBrowser: true,
});

export const create = async ({ messages, model, stream }) => {
  return await openai.chat.completions.create({
    messages,
    model,
    stream,
  });
};


