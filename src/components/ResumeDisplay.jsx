import '../styles/ResumeDisplay.css';

export default function ResumeDisplay({ resumeInformation }) {
  const { general, education, projects, workExperience } = resumeInformation;

  return (
    <>
      <div className='display'>
        <div className='resume'>
          <div className='header'>{general.name.toUpperCase()}</div>
          <div className='contacts'>
            <span className='email'>{general.email}</span>
            <span className='phone'>{general.phone}</span>
            <span className='website'>{general.website}</span>
          </div>
          <div className='section'>
            <div className='section-title'>EDUCATION</div>
            <div className='group-heading'>
              <span className='school'>{education.school}</span>
              <span className='date'>{education.startDate}</span>
              <span className='date'>{education.endDate}</span>
            </div>
            <span className='major'>{education.major}</span>
          </div>
          <div className='section'>
            <div className='section-title'>PROJECTS</div>
            {projects.map((project) => {
              return (
                <div className='project' key={project.id}>
                  <div className='group-heading'>
                    <span className='group-title'>{project.title}</span>
                    <span className='date'>{project.startDate}</span>
                    <span className='date'>{project.endDate}</span>
                  </div>
                  <div className='description'>{project.description}</div>
                </div>
              )
            })}
          </div>
          <div className='section'>
            <div className='section-title'>WORK EXPERIENCE</div>
            {workExperience.map((job) => {
              return (
                <div className='job' key={job.id}>
                  <div className='group-heading'>
                    <span className='group-title'>{job.role}</span>
                    <span>{job.company}</span>
                    <span className='date'>{job.startDate}</span>
                    <span className='date'>{job.endDate}</span>
                  </div>
                  <div className='description'>{job.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}