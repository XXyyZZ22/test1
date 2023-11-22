// Dropdown2.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.png'; // Import the image
import './Dropdown2.css';

const Dropdown2 = ({ title }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`dropdown2 ${isDropdownOpen ? 'open' : ''}`}>
      <div className="dropdown2-header" onClick={toggleDropdown}>
        <span>{title}</span>
        <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
      </div>
      {isDropdownOpen && (
        <div className="dropdown2-content">
          <div className="content-section">
            {/* Add the text and image */}
            <div className="dropdown-text">{title}</div>
            <img className="dropdown-logo" src={logo} alt="Logo" />
            {/* Add the vertical line */}
            <div className="vertical-line"></div>
          </div>
          <div className="close-btn" onClick={toggleDropdown}>X</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown2;
