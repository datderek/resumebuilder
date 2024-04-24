export default function ResumeDisplay({ resumeInformation }) {
  return (
    <>
      <div>Name: {resumeInformation.general.name}</div>
      <div>Email: {resumeInformation.general.email}</div>
      <div>School: {resumeInformation.education.school}</div>
      <div>Major: {resumeInformation.education.major}</div>
    </>
  )
}