// NavigationAdjustment.js
import React from 'react';
import { Button, Typography } from '@mui/material';
import HearingIcon from '@mui/icons-material/Hearing';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const NavigationAdjustment = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Navigation Adjustment
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" startIcon={<HearingIcon />}>
          Screen Reader
        </Button>
        <Button variant="outlined" startIcon={<VolumeUpIcon />}>
          Text Reader
        </Button>
      </div>
    </>
  );
};

export default NavigationAdjustment;
