import Panel from "./Panel";
import Input from "./Input";
import '../styles/ResumeEditor.css'

export default function ResumeEditor({ resumeInformation, onChange, onAddMore }) {
  const { general, education, projects, workExperience } = resumeInformation;

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
        <Input label='Start Date' type='date' value={education.startDate} onChange={e => onChange('education', 'startDate', e.target.value)}></Input>
        <Input label='End Date' type='date' value={education.endDate} onChange={e => onChange('education', 'endDate', e.target.value)}></Input>
      </Panel>
      <Panel label='Projects' onAddMore={() => onAddMore('projects')}>
        {projects.map((project) => {
          return (
            <div className='project-group' key={project.id}>
              <Input label='Title' value={project.title} onChange={e => onChange('projects', 'title', e.target.value, project.id)}></Input>
              <Input label='Description' value={project.description} onChange={e => onChange('projects', 'description', e.target.value, project.id)}></Input>
              <Input label='Start Date' type='date' value={project.startDate} onChange={e => onChange('projects', 'startDate', e.target.value, project.id)}></Input>
              <Input label='End Date' type='date' value={project.endDate} onChange={e => onChange('projects', 'endDate', e.target.value, project.id)}></Input>
            </div>
          )
        })}
      </Panel>
      <Panel label='Work Experience' onAddMore={() => onAddMore('workExperience')}>
        {workExperience.map((job) => {
          return (
            <div className='job-group' key={job.id}>
              <Input label='Role' value={job.role} onChange={e => onChange('workExperience', 'role', e.target.value, job.id)}></Input>
              <Input label='Company' value={job.company} onChange={e => onChange('workExperience', 'company', e.target.value, job.id)}></Input>
              <Input label='Description' value={job.description} onChange={e => onChange('workExperience', 'description', e.target.value, job.id)}></Input>
              <Input label='Start Date' type='date' value={job.startDate} onChange={e => onChange('workExperience', 'startDate', e.target.value, job.id)}></Input>
              <Input label='End Date' type='date' value={job.endDate} onChange={e => onChange('workExperience', 'endDate', e.target.value, job.id)}></Input>
            </div>
          )
        })}
      </Panel>
    </div>
  )
}