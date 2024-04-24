import { useState } from 'react';
import Input from './Input';

export default function Panel() {
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState({firstName: '', lastName: ''});

  const handleChange = (key, value) => {
    setName({...name, [key]: value});
  }

  return (
    <>
      <Input label='First Name' value={name.firstName} onChange={(e) => { handleChange('firstName', e.target.value) }}></Input>
      <Input label='Last Name' value={name.lastName} onChange={(e) => { handleChange('lastName', e.target.value) }}></Input>
      <div>{name.firstName} {name.lastName}</div>
    </>
  )
}