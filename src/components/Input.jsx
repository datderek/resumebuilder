export default function Input({ label, value, onChange }) {
  return (
    <label>
      {label}:
      <input value={value} type='text' onChange={onChange} />
    </label>
  )
}