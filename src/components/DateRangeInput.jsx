import Input from "./Input";
import '../styles/DateRangeInput.css';

export default function DateRangeInput({ dateRange, onChange, category, id = null}) {
  return (
    <div class='date-range'>
      <Input label='Start Date' type='date' value={dateRange[0]} onChange={e => onChange(category, 'startDate', e.target.value, id)}></Input>
      <Input label='End Date' type='date' value={dateRange[1]} onChange={e => onChange(category, 'endDate', e.target.value, id)}></Input>
    </div>
  )
}