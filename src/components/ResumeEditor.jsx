import Panel from "./Panel";
import Input from "./Input";

export default function ResumeEditor({ onChange }) {
  return (
    <div className="edit-bar">
      <Panel label='General'>
        <Input label='Full Name' onChange={e => onChange('general', 'name', e.target.value)}></Input>
        <Input label='Email' onChange={e => onChange('general', 'email', e.target.value)}></Input>
        <Input label='Phone Number' type='tel' onChange={e => onChange('general', 'phone', e.target.value)}></Input>
        <Input label='Website' onChange={e => onChange('general', 'website', e.target.value)}></Input>
      </Panel>
      <Panel label='Education'>
        <Input label='School' onChange={e => onChange('education', 'school', e.target.value)}></Input>
        <Input label='Major' onChange={e => onChange('education', 'major', e.target.value)}></Input>
        <Input label='Start Date' type='date' onChange={e => onChange('education', 'startDate', e.target.value)}></Input>
        <Input label='End Date' type='date' onChange={e => onChange('education', 'endDate', e.target.value)}></Input>
      </Panel>
    </div>
  )
}