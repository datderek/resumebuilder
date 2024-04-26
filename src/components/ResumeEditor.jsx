import Panel from "./Panel";
import Input from "./Input";
import DateRangeInput from "./DateRangeInput";
import '../styles/ResumeEditor.css'

export default function ResumeEditor({ resumeInformation, onChange, onAddMore }) {
  const { general, education, projects, workExperience } = resumeInformation;

  return (
    <div className="edit-bar">
      <Panel label='General'>
        <Input label='Full Name' value={general.name} onChange={e => onChange('general', 'name', e.target.value)}/>
        <Input label='Email' value={general.email} onChange={e => onChange('general', 'email', e.target.value)}/>
        <Input label='Phone Number' value={general.phone} type='tel' onChange={e => onChange('general', 'phone', e.target.value)}/>
        <Input label='Website' value={general.website} onChange={e => onChange('general', 'website', e.target.value)}/>
      </Panel>
      <Panel label='Education'>
        <Input label='School' value={education.school} onChange={e => onChange('education', 'school', e.target.value)}/>
        <Input label='Major' value={education.major} onChange={e => onChange('education', 'major', e.target.value)}/>
        <DateRangeInput dateRange={[education.startDate, education.endDate]} onChange={onChange} category={'education'}/>
      </Panel>
      <Panel label='Projects' onAddMore={() => onAddMore('projects')}>
        {projects.map((project) => {
          return (
            <div className='project-group' key={project.id}>
              <Input label='Title' value={project.title} onChange={e => onChange('projects', 'title', e.target.value, project.id)}/>
              <Input label='Description' value={project.description} onChange={e => onChange('projects', 'description', e.target.value, project.id)}/>
              <DateRangeInput dateRange={[project.startDate, project.endDate]} onChange={onChange} category={'projects'} id={project.id}/>
            </div>
          )
        })}
      </Panel>
      <Panel label='Work Experience' onAddMore={() => onAddMore('workExperience')}>
        {workExperience.map((job) => {
          return (
            <div className='job-group' key={job.id}>
              <Input label='Role' value={job.role} onChange={e => onChange('workExperience', 'role', e.target.value, job.id)}/>
              <Input label='Company' value={job.company} onChange={e => onChange('workExperience', 'company', e.target.value, job.id)}/>
              <Input label='Description' value={job.description} onChange={e => onChange('workExperience', 'description', e.target.value, job.id)}/>
              <DateRangeInput dateRange={[job.startDate, job.endDate]} onChange={onChange} category={'workExperience'} id={job.id}/>
            </div>
          )
        })}
      </Panel>
    </div>
  )
}