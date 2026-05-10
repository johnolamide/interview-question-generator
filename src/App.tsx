import { useState } from 'react'
import { generateQuestions } from './api/gemini'
import QuestionForm from './components/QuestionForm'
import Loader from './components/Loader'
import QuestionList from './components/QuestionList'

export default function App() {
  const [jobTitle, setJobTitle] = useState('')
  const [questions, setQuestions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setQuestions([])

    try {
      const result = await generateQuestions(jobTitle)
      setQuestions(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="app">
      <h1 className="app__title">Interview Question Generator</h1>
      <p className="app__subtitle">Enter a job title to generate 3 tailored interview questions.</p>
      <QuestionForm
        jobTitle={jobTitle}
        loading={loading}
        onChange={setJobTitle}
        onSubmit={handleSubmit}
      />
      {error && <p className="app__error">{error}</p>}
      {loading && <Loader />}
      {!loading && <QuestionList questions={questions} />}
    </main>
  )
}
