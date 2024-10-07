import React, { useState } from 'react';
import './Header.css'; // Import your CSS for styling
import IconButton from '@mui/material/IconButton'; // Correct import for IconButton
import CloseIcon from '@mui/icons-material/Close'; // Import the CloseIcon from MUI
import VisibilityIcon from '@mui/icons-material/Visibility'; // Import VisibilityIcon
import LanguageSelector from './LanguageSelector'; // Import the LanguageSelector component
import CardComponent from './RefreshCard'; // Import the CardComponent
import TooltipButton from './TooltipButton'; // Import the TooltipButton component

const TopNav = ({ onClose }) => {
  const [isAccessibilityActive, setAccessibilityActive] = useState(false); // State for accessibility button
  const [isCardOpen, setCardOpen] = useState(false); // State to manage sidebar visibility

  const handleRefreshClick = () => {
    setCardOpen(true); // Open the refresh card sidebar
    setAccessibilityActive(false); // Close the accessibility page when refresh is clicked
  };

  const handleCloseSidebar = () => {
    setCardOpen(false); // Close the sidebar when close is clicked
  };

  const handleAccessibilityClick = () => {
    setAccessibilityActive(!isAccessibilityActive); // Toggle accessibility page visibility
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <TooltipButton 
            tooltipText="Accessibility mode"
            onClick={handleRefreshClick} // Use the refresh click handler
          />

          <IconButton color="inherit" sx={{ color: 'white' }} onClick={handleAccessibilityClick}>
            <VisibilityIcon />
          </IconButton>
        </div>

        <div className="header-center">
          <LanguageSelector />
        </div>

        <div className="header-right">
          <IconButton edge="start" sx={{ color: 'white' }} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        {/* Sidebar */}
        <div className={`sidebar ${isCardOpen ? 'open' : ''}`}>
          <div className="sidebar-header"></div>
          <div className="sidebar-content">
            <CardComponent onClose={handleCloseSidebar} />
          </div>
        </div>
      </header>
      <div className="header-bottom">
        <button 
          className={`accessibility-text ${isAccessibilityActive ? 'active' : ''}`} 
          onClick={handleAccessibilityClick}
        >
          Accessibility
        </button>
      </div>
    </>
  );
};

export default TopNav;
