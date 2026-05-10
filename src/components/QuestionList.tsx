interface Props {
  questions: string[]
}

export default function QuestionList({ questions }: Props) {
  if (!questions.length) return null

  return (
    <ol className="results">
      {questions.map((q, i) => (
        <li key={i} className="results__item">{q}</li>
      ))}
    </ol>
  )
}
