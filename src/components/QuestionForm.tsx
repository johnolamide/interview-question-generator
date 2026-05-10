interface Props {
  jobTitle: string
  loading: boolean
  onChange: (value: string) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function QuestionForm({ jobTitle, loading, onChange, onSubmit }: Props) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="Enter a job title"
        value={jobTitle}
        onChange={(e) => onChange(e.target.value)}
        disabled={loading}
      />
      <button className="form__button" type="submit" disabled={loading || !jobTitle.trim()}>
        {loading ? 'Generating...' : 'Generate Questions'}
      </button>
    </form>
  )
}
