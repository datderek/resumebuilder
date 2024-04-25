export default function Input({ label, type='text', onChange }) {
  return (
    <label>
      {label}:
      <input type={type} onChange={onChange} />
    </label>
  )
}