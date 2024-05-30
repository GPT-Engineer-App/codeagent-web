/*
Use like this:
import { create } from 'lib/openai';

const res = await create({messages: [{role: 'system', content: 'What is the capital of France?'}], model: 'gpt-3.5-turbo'}})
console.log(res.choices[0].message.content);
*/


import OpenAI from 'openai';

export const create = async ({ messages, model, stream, apiKey, apiEndpoint, apiType }) => {
  const openai = new OpenAI({
    baseURL: apiType === 'azure' ? apiEndpoint : 'https://api.openai.com/v1',
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  });
  return await openai.chat.completions.create({
    messages,
    model,
    stream
  });
};