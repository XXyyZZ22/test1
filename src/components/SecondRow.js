// SecondRow.js

import React from 'react';
import Dropdown2 from './Dropdown2'; 
import './SecondRow.css'; 

const SecondRow = () => {
  const dropdownItems = [
    { title: 'Dropdown 1', content: 'Content 1' },
    { title: 'Dropdown 2', content: 'Content 2' },
    { title: 'Dropdown 3', content: 'Content 3' },
    { title: 'Dropdown 4', content: 'Content 4' },
    { title: 'Dropdown 5', content: 'Content 5' },
  ];

  return (
    <div className="second-row">
      {dropdownItems.map((item, index) => (
        <Dropdown2 key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default SecondRow;
