import { useState } from 'react';
import '../styles/Panel.css';

export default function Panel({ label, children }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive(!isActive);
  }

  return (
    <div className='panel'>
      <div className={'panel-tab' + (isActive ? ' active' : '')} onClick={handleClick}>{label}</div>
      {isActive && (
        <div className='inputs'>
          {children}
        </div>
      )}
    </div>
  )
}