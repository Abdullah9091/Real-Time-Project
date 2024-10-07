import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import img1 from '../images/Page-Structure.svg';
import img2 from '../images/Low-Saturation.svg';
import img3 from '../images/Enlarge-Buttons.svg';
import img4 from '../images/High-Saturation.svg';
import img5 from '../images/Bright-High-Contrast.svg';
import img6 from '../images/DarkHigh-Contrast.svg';
import img7 from '../images/Screen-Reader-Adjustment.svg';
import img9 from '../images/Image-Description.svg';
import img10 from '../images/Magnifier.svg';
import img11 from '../images/Readable-Font.svg';
import img12 from '../images/Highlight-Links.svg';
import img13 from '../images/Highlight-Headers.svg';

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
          <img src={img7} alt="Screen Reader Adjustment" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px', marginLeft: '10px' }}>
            Screen Reader Adjustment
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card1')}>
          <Typography variant="h6">Screen Reader Adjustment Overlay</Typography>
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
          <img src={img6} alt="Dark High-Contrast" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '11px', margin: '0', paddingTop: '10px', marginLeft: '10px' }}>
            Dark High-Contrast
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card2')}>
          <Typography variant="h6">Dark High-Contrast Overlay</Typography>
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
          <img src={img5} alt="Bright High-Contrast" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '10px', margin: '0', paddingTop: '10px', marginLeft: '10px' }}>
            Bright High-Contrast
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card3')}>
          <Typography variant="h6">Bright High-Contrast Overlay</Typography>
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
          <img src={img3} alt="Enlarge Buttons" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Enlarge Buttons
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card4')}>
          <Typography variant="h6">Enlarge Buttons Overlay</Typography>
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
          <img src={img1} alt="Page Structure" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Page Structure
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card5')}>
          <Typography variant="h6">Page Structure Overlay</Typography>
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

      {/* Card 7 */}
      <Card 
        variant="outlined" 
        style={cardStyle}
        onMouseEnter={() => setHoveredCard('card7')} 
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
        <Box style={overlayStyle(hoveredCard === 'card7')}>
          <Typography variant="h6">Low Saturation Overlay</Typography>
        </Box>
      </Card>

      {/* Card 8 */}
      <Card 
        variant="outlined" 
        style={cardStyle}
        onMouseEnter={() => setHoveredCard('card8')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img9} alt="Description" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Description
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card8')}>
          <Typography variant="h6">Description Overlay</Typography>
        </Box>
      </Card>

      {/* Card 9 */}
      <Card 
        variant="outlined" 
        style={cardStyle}
        onMouseEnter={() => setHoveredCard('card9')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img10} alt="Magnifier" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Magnifier
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card9')}>
          <Typography variant="h6">Magnifier Overlay</Typography>
        </Box>
      </Card>

      {/* Card 10 */}
      <Card 
        variant="outlined" 
        style={cardStyle}
        onMouseEnter={() => setHoveredCard('card10')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img11} alt="Readable Font" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Readable Font
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card10')}>
          <Typography variant="h6">Readable Font Overlay</Typography>
        </Box>
      </Card>

      {/* Card 11 */}
      <Card 
        variant="outlined" 
        style={cardStyle}
        onMouseEnter={() => setHoveredCard('card11')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img12} alt="Highlight Links" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Highlight Links
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card11')}>
          <Typography variant="h6">Highlight Links Overlay</Typography>
        </Box>
      </Card>

      {/* Card 12 */}
      <Card 
        variant="outlined" 
        style={cardStyle}
        onMouseEnter={() => setHoveredCard('card12')} 
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CardContent style={{ 
          padding: '8px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <img src={img13} alt="Highlight Headers" style={{ fontSize: '50px' }} />
          <Typography style={{ fontSize: '12px', margin: '0', paddingTop: '10px' }}>
            Highlight Headers
          </Typography>
        </CardContent>
        <Box style={overlayStyle(hoveredCard === 'card12')}>
          <Typography variant="h6">Highlight Headers Overlay</Typography>
        </Box>
      </Card>
    </div>
  );
};

export default ProfileCards;
