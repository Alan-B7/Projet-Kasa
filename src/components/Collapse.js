import React, { useState } from 'react';
import '../styles/Collapse.scss';

const Collapse = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'is-open' : ''}`}>
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <span className={`collapse__icon ${isOpen ? 'rotate' : ''}`}>▼</span>
      </div>
      <div className={`collapse__content ${isOpen ? 'is-open' : ''}`}>
        {text}
      </div>
    </div>
  );
};

export default Collapse;