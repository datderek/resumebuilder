import ResumeEditor from "./ResumeEditor";
import ResumeDisplay from "./ResumeDisplay";
import "../styles/ResumeBuilder.css";
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

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
          id: uuid(),
          title: '',
          description: '',
          startDate: '',
          endDate: '',
        },
      ],
      workExperience: [
        {
          id: uuid(),
          role: '',
          company: '',
          description:  '',
          startDate: '',
          endDate: ''
        }
      ],
    }
  )

  const handleChange = (category, key, value, id = null) => {
    let newCategory;

    if (category === 'projects' || category === 'workExperience') {
      newCategory = resumeInformation[category].map((item) => {
        if (item.id === id) {
          item[key] = value;
        }

        return item;
      });
    } else {
      newCategory = {...resumeInformation[category], [key]: value}
    }

    const newResumeInformation = { ...resumeInformation, [category]: newCategory};
    setResumeInformation(newResumeInformation);
  }

  const handleAddMore = (category) => {
    let newItem;

    if (category === 'projects') {
      newItem = {
        id: uuid(),
        title: '',
        description: '',
        startDate: '',
        endDate: '',
      }
    } else {
      newItem = {
        id: uuid(),
        role: '',
        company: '',
        description: '',
        startDate: '',
        endDate: '',
      }
    }

    const newCategory = [...resumeInformation[category], newItem];
    const newResumeInformation = {...resumeInformation, [category]: newCategory};
    setResumeInformation(newResumeInformation);
  }

  return (
    <>
      <ResumeEditor resumeInformation={resumeInformation} onChange={handleChange} onAddMore={handleAddMore}/>
      <ResumeDisplay resumeInformation={resumeInformation}/>
    </>
  )
}