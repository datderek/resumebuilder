import Panel from "./Panel";
import Input from "./Input";

export default function ResumeEditor({ resumeInformation, onChange }) {
  const general = resumeInformation.general;
  const education = resumeInformation.education;
  return (
    <div className="edit-bar">
      <Panel label='General'>
        <Input label='Full Name' value={general.name} onChange={e => onChange('general', 'name', e.target.value)}></Input>
        <Input label='Email' value={general.email} onChange={e => onChange('general', 'email', e.target.value)}></Input>
        <Input label='Phone Number' value={general.phone} type='tel' onChange={e => onChange('general', 'phone', e.target.value)}></Input>
        <Input label='Website' value={general.website} onChange={e => onChange('general', 'website', e.target.value)}></Input>
      </Panel>
      <Panel label='Education'>
        <Input label='School' value={education.school} onChange={e => onChange('education', 'school', e.target.value)}></Input>
        <Input label='Major' value={education.major} onChange={e => onChange('education', 'major', e.target.value)}></Input>
        <Input label='Start Date' value={education.startDate} type='date' onChange={e => onChange('education', 'startDate', e.target.value)}></Input>
        <Input label='End Date' value={education.endDate} type='date' onChange={e => onChange('education', 'endDate', e.target.value)}></Input>
      </Panel>
    </div>
  )
}