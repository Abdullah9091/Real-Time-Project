import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import img1 from '../images/Enlarge-Buttons.svg';
import img2 from '../images/Smart-Navigation.svg';
import img3 from '../images/Page-Structure.svg';
import img4 from '../images/Voice-Commands.svg';
import img5 from '../images/keyboard.svg';

const ProfileCards = ({ label }) => {
  const [hoveredCard, setHoveredCard] = useState(null); // State to track hover

  // Overlay style that will appear on hover
  const overlayStyle = (isHovered) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
    color: 'white',
    opacity: isHovered ? 1 : 0, // Show overlay on hover
    transition: 'opacity 0.3s ease', // Smooth transition
  });

  // Card style to ensure proper layout
  const cardStyle = {
    position: 'relative', // Make the card the reference point for absolute positioning
    marginBottom: '15px', 
    width: '48%', 
    height: '120px',
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', // Allows wrapping to new rows
      justifyContent: 'space-evenly',
      gap: '5px', // Add space between cards
      marginTop: '8px', 
      marginBottom: '10px',
    }}>
      {/* First Row */}
      <Card 
        variant="outlined" 
        style={cardStyle} 
        onMouseEnter={() => setHoveredCard('card1')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img5} alt='' style={{ fontSize: '50px', paddingLeft:'35px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Keyboard Navigation
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card1')}>
          <Typography variant="h6">Keyboard Navigation Overlay</Typography>
        </Box>
      </Card>

      <Card 
        variant="outlined" 
        style={cardStyle} 
        onMouseEnter={() => setHoveredCard('card2')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img2} alt='' style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Smart Navigation
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card2')}>
          <Typography variant="h6">Smart Navigation Overlay</Typography>
        </Box>
      </Card>

      {/* Second Row */}
      <Card 
        variant="outlined" 
        style={cardStyle} 
        onMouseEnter={() => setHoveredCard('card3')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img4} alt='' style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Voice Commands
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card3')}>
          <Typography variant="h6">Voice Commands Overlay</Typography>
        </Box>
      </Card>

      <Card 
        variant="outlined" 
        style={cardStyle} 
        onMouseEnter={() => setHoveredCard('card4')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img1} alt='' style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Enlarge Buttons
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card4')}>
          <Typography variant="h6">Enlarge Buttons Overlay</Typography>
        </Box>
      </Card>

      {/* Third Row */}
      <Card 
        variant="outlined" 
        style={{ ...cardStyle, marginLeft: '-146px' }} 
        onMouseEnter={() => setHoveredCard('card5')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img3} alt='' style={{ fontSize: '50px'}} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Page Structure
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card5')}>
          <Typography variant="h6">Page Structure Overlay</Typography>
        </Box>
      </Card>
    </div>
  );
};

export default ProfileCards;
