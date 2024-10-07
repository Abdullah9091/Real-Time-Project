import React, { useState } from 'react';
import { Slider, IconButton, Box } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const VolumeControl = () => {
  const [volume, setVolume] = useState(50); // initial volume level

  const handleSliderChange = (event, newValue) => {
    setVolume(newValue);
  };

  const increaseVolume = () => {
    setVolume(prev => (prev < 100 ? prev + 10 : prev));
  };

  const decreaseVolume = () => {
    setVolume(prev => (prev > 0 ? prev - 10 : prev));
  };

  return (
    <>
      {/* The slider and buttons layout */}
      <Box sx={{ position: 'relative', width: '100%', height: 40, mt: 2, mb: 4 }}>
        
        {/* Decrease Volume Button (Positioned inside the slider) */}
        <IconButton
          onClick={decreaseVolume}
          sx={{
            position: 'absolute',
            left: '-1px',
            top: '48%',
            transform: 'translateY(-50%)',
            border: '1px solid #ddd',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            zIndex: 1, // Ensure button is above the slider
            color: 'white',
            backgroundColor: 'black',
            // Prevent color change on hover, active, and focus
            '&:hover': {
              backgroundColor: 'black', // Prevent hover background change
              color: 'white',           // Prevent hover text color change
            },
            '&:active': {
              backgroundColor: 'black', // Prevent active background change
              color: 'white',           // Prevent active text color change
            },
            '&:focus': {
              backgroundColor: 'black', // Prevent focus background change
              color: 'white',           // Prevent focus text color change
            },
          }}
        >
          <RemoveIcon />
        </IconButton>

        {/* Slider */}
        <Slider
  value={volume}
  onChange={handleSliderChange}
  aria-labelledby="continuous-slider"
  min={0}
  max={100}
  sx={{
    color: '#555',
    height: 15, // height of the slider track
    '& .MuiSlider-thumb': {
      display: 'none', // This hides the thumb completely
    },
    '& .MuiSlider-track': {
      backgroundColor: '#555', // Track color
    },
    '& .MuiSlider-rail': {
      backgroundColor: '#ddd', // Rail color (the part that shows before the thumb)
    },
  }}
/>


        {/* Increase Volume Button (Positioned inside the slider) */}
        <IconButton
          onClick={increaseVolume}
          sx={{
            position: 'absolute',
            right: '-10px',
            top: '50%',
            transform: 'translateY(-50%)',
            border: '1px solid #ddd',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            zIndex: 1, // Ensure button is above the slider
            backgroundColor: 'black',
            color: 'white',
            // Prevent color change on hover, active, and focus
            '&:hover': {
              backgroundColor: 'black', // Prevent hover background change
              color: 'white',           // Prevent hover text color change
            },
            '&:active': {
              backgroundColor: 'black', // Prevent active background change
              color: 'white',           // Prevent active text color change
            },
            '&:focus': {
              backgroundColor: 'black', // Prevent focus background change
              color: 'black',           // Prevent focus text color change
            },
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default VolumeControl;
