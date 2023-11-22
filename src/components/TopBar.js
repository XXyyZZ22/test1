// TopBar.js

import React from 'react';
import Dropdown from './Dropdown'; 
import HorizontalNav from './HorizontalNav'; 
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="left-section">
        <Dropdown />
      </div>
      <div className="right-section">
        <HorizontalNav />
      </div>
    </div>
  );
};

export default TopBar;
