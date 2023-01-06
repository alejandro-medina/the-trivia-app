export default function ProgressBar({ value = 0, max = 0 }) {
  return (
    <progress
      style={{
        width: '100%'
      }}
      value={value}
      max={max} />
  )
}