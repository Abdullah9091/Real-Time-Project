// TooltipButton.js
import React from 'react';
import { Tooltip, IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

const TooltipButton = ({ tooltipText, onClick }) => {
  return (
    <Tooltip
      title={tooltipText}
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: 'white', // Set the background color to black
            padding: '10px 20px',     // Add padding
            color: 'black',            // Optional: Set the text color to white for better contrast
          },
        },
      }}
    >
      <IconButton onClick={onClick} sx={{ color: 'white' }}>
        <RefreshIcon />
      </IconButton>
    </Tooltip>
  );
};

export default TooltipButton;
