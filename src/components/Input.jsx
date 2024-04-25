import '../styles/Input.css';

export default function Input({ label, type='text', value, onChange }) {
  return (
    <label>
      <div className='label-name'>{label}:</div>
      <input type={type} value={value} onChange={onChange} />
    </label>
  )
}