import Panel from "./Panel";
import Input from "./Input";

export default function ResumeEditor({ onChange }) {
  return (
    <div className="edit-bar">
      <Panel label='General'>
        <Input label='Full Name' onChange={e => onChange('general', 'name', e.target.value)}></Input>
        <Input label='Email' onChange={e => onChange('general', 'email', e.target.value)}></Input>
      </Panel>
      <Panel label='Education'>
        <Input label='School' onChange={e => onChange('education', 'school', e.target.value)}></Input>
        <Input label='Major' onChange={e => onChange('education', 'major', e.target.value)}></Input>
      </Panel>
    </div>
  )
}