import { useState } from 'react';
import '../styles/Panel.css';

export default function Panel({ label, children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="panel">
      <div>{label}</div>
      {children}
    </div>
  )
}