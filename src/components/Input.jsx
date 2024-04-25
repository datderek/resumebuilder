import '../styles/Input.css';

export default function Input({ label, type='text', onChange }) {
  return (
    <label>
      <div className='label-name'>{label}:</div>
      <input type={type} onChange={onChange} />
    </label>
  )
}