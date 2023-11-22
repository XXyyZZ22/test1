// Dropdown.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Dropdown.css';

const Dropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>Test</span>
        <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <a href="#" className="active">Link 1</a>
          <a href="#" className="active">Link 2</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
