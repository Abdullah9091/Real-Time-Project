import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; // Import AddIcon
import RemoveIcon from '@mui/icons-material/Remove'; // Import RemoveIcon

const AddButton = ({ onClick }) => {
  const [isAdded, setIsAdded] = useState(false); // State to manage icon

  const handleClick = () => {
    setIsAdded(!isAdded); // Toggle the state
    onClick(); // Handle the click event passed as a prop
  };

  return (
    <IconButton
      size="1px" // Small size
      sx={{ 
        backgroundColor: 'black', 
        color: 'white', 
        padding: '1px', 
        '&:hover': {
          backgroundColor: 'black', // Maintain background color on hover
          opacity: 1 // Ensure opacity is maintained on hover
        }
      }} // Smaller padding and styling
      onClick={handleClick} // Handle click event
    >
      {isAdded ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />} {/* Toggle between icons */}
    </IconButton>
  );
};

export default AddButton;
