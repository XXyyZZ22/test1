// HorizontalNav.js

import React from 'react';
import './HorizontalNav.css';

const HorizontalNav = () => {
  const navItems = [
    { text: 'Link 1', color: 'blue' },
    { text: 'Link 2', color: 'black' },
    { text: 'Link 3', color: 'black' },
    { text: 'Link 4', color: 'black' },
    { text: 'Link 5', color: 'blue' },
  ];

  return (
    <div className="horizontal-nav">
      {navItems.map((item, index) => (
        <a key={index} className={`nav-item ${item.color}`} href="#">
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default HorizontalNav;
