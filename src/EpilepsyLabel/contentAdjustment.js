import React, { useState } from 'react';
import { Box, Grid, Button, Slider, Typography } from '@mui/material';
import img1 from '../images/FontSizing.svg';
import VolumeControl from './IncreaseVolumeButton';
const ContentAdjustment = () => {
  const [fontSize, setFontSize] = useState(16);
  const [buttonClicked, setButtonClicked] = useState({
    fontSize: false,
    lineSpacing: false,
    wordSpacing: false,
    letterSpacing: false,
  }); // State to track which button is clicked

  const handleSliderChange = (setter) => (event, newValue) => {
    setter(newValue);
  };

  const handleButtonClick = (buttonName) => {
    setButtonClicked({
      fontSize: buttonName === 'fontSize',
      lineSpacing: buttonName === 'lineSpacing',
      wordSpacing: buttonName === 'wordSpacing',
      letterSpacing: buttonName === 'letterSpacing',
    }); // Set the clicked button to true and others to false
  };

  // Button styles
  const buttonStyles = {
    borderRadius: '12px', // Small border radius
    padding: '4px 8px', // Smaller padding for a smaller button
    fontSize: '0.75rem', // Smaller font size
    width: '120px', // Set your desired width here
    color: 'black', // Set the button font color to black
    border: '1px solid black', // Set the button border color to black
    '&:hover': {
      backgroundColor: 'black', // Keep black on hover if clicked
      color: 'white', // Change text color to white on hover
    },
  };

  return (
    <Box sx={{ padding:2  }}>
      <Typography variant="h6">Content Adjustment</Typography>

      {/* Font Sizing Section */}
      <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 2, marginBottom: 3 }}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <img src={img1} alt='Font Sizing' style={{ width: '30px', height: '30px', marginRight: '8px'}} />
          </Grid>
  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Font Sizing</Typography>
          <Grid item>
</Grid>
</Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <Button
              variant="outlined"
              onClick={() => handleButtonClick('fontSize')}
              sx={{
                ...buttonStyles,
                backgroundColor: buttonClicked.fontSize ? 'black' : 'transparent', // Change background color based on click
                color: buttonClicked.fontSize ? 'white' : 'black', // Change text color based on click
              }}
            >
              Font Size
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              onClick={() => handleButtonClick('lineSpacing')}
              sx={{
                ...buttonStyles,
                backgroundColor: buttonClicked.lineSpacing ? 'black' : 'transparent', // Change background color based on click
                color: buttonClicked.lineSpacing ? 'white' : 'black', // Change text color based on click
              }}
            >
              Line Spacing
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              onClick={() => handleButtonClick('wordSpacing')}
              sx={{
                ...buttonStyles,
                backgroundColor: buttonClicked.wordSpacing ? 'black' : 'transparent', // Change background color based on click
                color: buttonClicked.wordSpacing ? 'white' : 'black', // Change text color based on click
              }}
            >
              Word Spacing
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              onClick={() => handleButtonClick('letterSpacing')}
              sx={{
                ...buttonStyles,
                backgroundColor: buttonClicked.letterSpacing ? 'black' : 'transparent', // Change background color based on click
                color: buttonClicked.letterSpacing ? 'white' : 'black', // Change text color based on click
              }}
            >
              Letter Spacing
            </Button>
          </Grid>
          <Grid item xs={12}>
            <VolumeControl/>
          </Grid>

        </Grid>
      </Box>

      {/* Other Settings Section */}
      
    </Box>
  );
};

export default ContentAdjustment;
