import ResumeEditor from "./ResumeEditor";
import ResumeDisplay from "./ResumeDisplay";
import "../styles/ResumeBuilder.css";
import { useState } from 'react';

export default function ResumeBuilder() {
  const [resumeInformation, setResumeInformation] = useState(
    {
      general: {
        name: '',
        phone: '',
        email: '',
        website: '',
      },
      education: {
        school: '',
        major: '',
        startDate: '',
        endDate: '',
      },
      projects: [
        {
          title: '',
          description: '',
          startDate: '',
          endDate: '',
        }
      ],
      work: [
        {
          role: '',
          company: '',
          description:  '',
          startDate: '',
          endDate: ''
        }
      ],
    }
  )

  const handleChange = (category, key, value) => {
    const newCategory = {...resumeInformation[category], [key]: value}
    const newResumeInformation = { ...resumeInformation, [category]: newCategory};
    setResumeInformation(newResumeInformation);
  }

  return (
    <>
      <ResumeEditor resumeInformation={resumeInformation} onChange={handleChange}/>
      <ResumeDisplay resumeInformation={resumeInformation}/>
    </>
  )
}