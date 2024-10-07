import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import HearingIcon from '@mui/icons-material/Hearing'; // Screen Reader Icon
import MapIcon from '@mui/icons-material/Map'; // Page Structure Icon

const ProfileCards = ({ label }) => {
  return (
    <div style={{ 
      display: 'flex', // Use flexbox
      justifyContent: 'space-between', // Space out the cards
      marginTop: '8px', 
      marginBottom: '10px' 
    }}>
    
      <Card variant="outlined" style={{ marginBottom: '15px', width: '40%', height: '120px' }}>
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', // Stack children vertically
          justifyContent: 'center', // Center vertically
          alignItems: 'center' // Center horizontally
        }}>
          <HearingIcon style={{ fontSize: '50px' }} /> {/* Adjusted icon size */}
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px',  marginLeft:'10px'}}>
            Screen Reader Adjustment
          </Typography>
        </CardContent>
      </Card>

      <Card variant="outlined" style={{ marginBottom: '15px', width: '40%', height: '120px' }}>
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', // Stack children vertically
          justifyContent: 'center', // Center vertically
          alignItems: 'center' // Center horizontally
        }}>
          <MapIcon style={{ fontSize: '50px' }} /> {/* Adjusted icon size */}
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Page Structure
          </Typography>
        </CardContent>
      </Card>

    </div>
  );
};

export default ProfileCards;
