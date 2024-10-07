import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import img1 from '../images/Page-Structure.svg';
import img2 from '../images/Screen-Reader-Adjustment.svg';

const ProfileCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Style for card, adjusting the background color based on hover
  const cardStyle = (isHovered) => ({
    marginBottom: '15px',
    width: '40%',
    height: '120px',
    backgroundColor: isHovered ? 'black' : 'inherit',
    position: 'relative', // Make the card a reference point for overlay
    transition: 'background-color 0.1s ease',
    cursor: 'pointer',
    overflow: 'hidden', // Hide content that overflows the card
  });

  // Style for the overlay text that will appear on hover
  const overlayStyle = (isHovered) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex', // Flexbox to center the content
    justifyContent: 'center', // Horizontally center
    alignItems: 'center', // Vertically center
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background with transparency
    color: 'white',
    opacity: isHovered ? 1 : 0, // Show overlay on hover
    transition: 'opacity 0.3s ease', // Smooth transition effect
  });

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-evenly',
      marginTop: '8px', 
      marginBottom: '10px', 
    }}>
      {/* First Card */}
      <Card 
        variant="outlined" 
        style={cardStyle(hoveredCard === 'card1')} 
        onMouseEnter={() => setHoveredCard('card1')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'relative' 
        }}>
          <img src={img2} alt="Screen Reader Adjustment" style={{ width: '50px', height: '50px' }} />
          <Typography 
            style={{ 
              fontSize: '12px', 
              margin: '0', 
              paddingTop: '10px', 
              marginLeft: '10px',
              transition: 'color 0.3s ease', // Smooth transition effect for text color
            }}
          >
            Screen Reader Adjustment
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card1')}>
          <Typography variant="h6" style={{marginLeft:'15px'}}>Screen Reader Overlay</Typography>
        </Box>
      </Card>

      {/* Second Card */}
      <Card 
        variant="outlined" 
        style={cardStyle(hoveredCard === 'card2')} 
        onMouseEnter={() => setHoveredCard('card2')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'relative' 
        }}>
          <img src={img1} alt="Page Structure" style={{ width: '50px', height: '50px' }} />
          <Typography 
            style={{ 
              fontSize: '12px', 
              margin: '0', 
              paddingTop: '10px',
              transition: 'color 0.3s ease', // Smooth transition effect for text color
            }}
          >
            Page Structure
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card2')}>
          <Typography variant="h6" style={{marginLeft:'15px'}}>Page Structure Overlay</Typography>
        </Box>
      </Card>
    </div>
  );
};

export default ProfileCards;
