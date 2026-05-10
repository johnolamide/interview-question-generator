import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string

if (!apiKey) {
  throw new Error('VITE_GEMINI_API_KEY is not set in your .env file')
}

const genAI = new GoogleGenerativeAI(apiKey)
const model = genAI.getGenerativeModel({ model: 'gemini-3.1-flash-lite' })

export async function generateQuestions(jobTitle: string): Promise<string[]> {
  if (!jobTitle.trim()) {
    throw new Error('Job title cannot be empty')
  }

  const prompt = `Generate exactly 3 specific, thoughtful interview questions for a ${jobTitle} role.
Return only a numbered list with no additional text, explanations, or formatting — just the 3 questions.
Example format:
1. Question one?
2. Question two?
3. Question three?`

  const result = await model.generateContent(prompt)
  const text = result.response.text().trim()

  const questions = text
    .split('\n')
    .map((line) => line.replace(/^\d+\.\s*/, '').trim())
    .filter((line) => line.length > 0)
    .slice(0, 3)

  if (questions.length !== 3) {
    throw new Error('Unexpected response format from Gemini')
  }

  return questions
}
