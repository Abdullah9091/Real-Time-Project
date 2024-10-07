import React from 'react';
import CardComponent from './RefreshCard'; // Import your card component

const RefreshCardSidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header"></div>
      <div className="sidebar-content">
        <CardComponent onClose={onClose} />
      </div>
    </div>
  );
};

export default RefreshCardSidebar;
