import React, { useState } from 'react';
import { Button, Slider, Box, Typography } from '@mui/material';
import { styled } from '@mui/system'; // Import styled
import img1 from '../images/ColorReset.svg';
import img2 from '../images/CustomColor.svg';
import ProfileCard from './EpilepsyCard';
import ContentAdjustment from './contentAdjustment'
const GradientSlider = styled(Slider)({
  color: "transparent", // Make default color transparent
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &:active": {
      boxShadow: "inherit",
    },
  },
  "& .MuiSlider-rail": {
    height: 15,
    opacity: 1,
    background: "linear-gradient(to right, red, yellow, green, cyan, blue, purple)",
  },
});

const ColorCustomizer = () => {
  const [value, setValue] = useState(50); // Set the default value for slider
  const [selectedOption, setSelectedOption] = useState('Backgrounds'); // State for button selection

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Reset the color selection
  const resetColors = () => {
    setValue(50); // Reset slider value or add additional logic for color
  };

  return (
    <>
    <Box
      sx={{
        border: '1px solid #ddd',
        borderRadius: 2,
        padding: 2,
        maxWidth: 300,
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <img src={img2} alt="Custom Color" />
          <Typography sx={{ marginLeft: 1, fontSize: '14px' }}>
            <b>Custom Color</b>
            <br />
            Change the site's colors
          </Typography>
        </Box>
      </Box>

      <Box my={2} display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          onClick={() => setSelectedOption('Backgrounds')}
          sx={{
            padding: '5px 10px',
            borderRadius: '20px',
            fontSize: '10px',
            marginX: 1,
            minWidth: 'auto',
            backgroundColor: selectedOption === 'Backgrounds' ? 'black' : 'white',
            color: selectedOption === 'Backgrounds' ? 'white' : 'black',
          }}
        >
          Backgrounds
        </Button>
        <Button
          variant="contained"
          onClick={() => setSelectedOption('Headings')}
          sx={{
            padding: '5px 10px',
            borderRadius: '20px',
            fontSize: '10px',
            marginX: 1,
            minWidth: 'auto',
            backgroundColor: selectedOption === 'Headings' ? 'black' : 'white',
            color: selectedOption === 'Headings' ? 'white' : 'black',
          }}
        >
          Headings
        </Button>
        <Button
          variant="contained"
          onClick={() => setSelectedOption('Contents')}
          sx={{
            padding: '5px 10px',
            borderRadius: '20px',
            fontSize: '10px',
            marginX: 1,
            minWidth: 'auto',
            marginLeft: '-0.01px',
            backgroundColor: selectedOption === 'Contents' ? 'black' : 'white',
            color: selectedOption === 'Contents' ? 'white' : 'black',
          }}
        >
          Contents
        </Button>
      </Box>

      <Box sx={{ width: 275, height: 30 }}>
        <GradientSlider
          value={value}
          onChange={handleChange}
          aria-label="gradient slider"
          max={100}
          min={0}
        />
      </Box>
      <Box mt={2} display="flex" justifyContent="center" marginLeft="130px">
  <img src={img1} alt="Reset Colors" onClick={resetColors} style={{ cursor: 'pointer' }} />
  <Typography
    sx={{
      marginLeft: 1,
      fontSize: '12px',
      fontWeight: 'bold',  // Added bold font weight
    }}
  >
    Reset colors
  </Typography>
</Box>
</Box>
<ProfileCard/>
<ContentAdjustment/>
</>
)
};

export default ColorCustomizer;
