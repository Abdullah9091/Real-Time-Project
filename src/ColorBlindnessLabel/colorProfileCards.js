import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import img1 from '../images/Contrast-Mode.svg';
import img2 from '../images/Low-Saturation.svg';
import img3 from '../images/Monochrome.svg';
import img4 from '../images/High-Saturation.svg';
import img5 from '../images/Bright-High-Contrast.svg';
import img6 from '../images/DarkHigh-Contrast.svg';

const ProfileCards = ({ label }) => {
  const [hoveredCard, setHoveredCard] = useState(null); // Track which card is hovered

  // Overlay styles to display centered text on hover
  const overlayStyle = (isHovered) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  });

  const cardStyle = {
    position: 'relative', // Ensure the card is the reference point for the overlay
    width: '40%',
    height: '120px',
    marginBottom: '15px',
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      marginTop: '8px', 
      marginBottom: '10px',
    }}>
      {/* Card 1 */}
      <Card 
        variant="outlined" 
        style={cardStyle}
        onMouseEnter={() => setHoveredCard('card1')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img6} alt="Dark High-Contrast" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '11px', margin: '0', paddingTop: '10px', marginLeft: '10px' }}>
            Dark High-Contrast
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card1')}>
          <Typography variant="h6">Dark High-Contrast Overlay</Typography>
        </Box>
      </Card>

      {/* Card 2 */}
      <Card 
        variant="outlined" 
        style={cardStyle}
        onMouseEnter={() => setHoveredCard('card2')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img5} alt="Bright High-Contrast" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '10px', margin: '0', paddingTop: '10px', marginLeft: '10px' }}>
            Bright High-Contrast
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card2')}>
          <Typography variant="h6">Bright High-Contrast Overlay</Typography>
        </Box>
      </Card>

      {/* Card 3 */}
      <Card 
        variant="outlined" 
        style={cardStyle}
        onMouseEnter={() => setHoveredCard('card3')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img1} alt="Contrast Mode" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px', marginLeft: '10px' }}>
            Contrast Mode
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card3')}>
          <Typography variant="h6">Contrast Mode Overlay</Typography>
        </Box>
      </Card>

      {/* Card 4 */}
      <Card 
        variant="outlined" 
        style={cardStyle}
        onMouseEnter={() => setHoveredCard('card4')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img2} alt="Low Saturation" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Low Saturation
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card4')}>
          <Typography variant="h6">Low Saturation Overlay</Typography>
        </Box>
      </Card>

      {/* Card 5 */}
      <Card 
        variant="outlined" 
        style={cardStyle}
        onMouseEnter={() => setHoveredCard('card5')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img3} alt="Monochrome" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Monochrome
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card5')}>
          <Typography variant="h6">Monochrome Overlay</Typography>
        </Box>
      </Card>

      {/* Card 6 */}
      <Card 
        variant="outlined" 
        style={cardStyle}
        onMouseEnter={() => setHoveredCard('card6')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img4} alt="High Saturation" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            High Saturation
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card6')}>
          <Typography variant="h6">High Saturation Overlay</Typography>
        </Box>
      </Card>
    </div>
  );
};

export default ProfileCards;
