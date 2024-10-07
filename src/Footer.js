import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black', // Black background for the footer
        padding: '25px 10px',
        textAlign: 'center',
        width: '95%',
        borderTop: '1px solid #ccc', // Optional: add a border to the top
      }}
    >
      <Typography sx={{ color: 'white' ,fontSize:'12px',justifyContent:'space-between' }}>
        Turn Off  Accessibility Statement  Send Feedback
      </Typography>
      <Typography sx={{color:'white',fontSize:'13px'}}>
        Powered by EqualWeb
      </Typography>
    </Box>
  );
};

export default Footer;
