import React, { useState } from 'react';
import {
  Typography, List, Button, Drawer, IconButton
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import img1 from './images/header.jpg';
import BlindnessProfile from './BlindnessLabel/Blindness';
import MotorSkillsProfile from './MotorSkillsLabel/MotorSkills';
import ColorBlindnessProfile from './ColorBlindnessLabel/colorBlindness';
import VisuallyImpairedProfile from './visuallyImpairedLabel/visuallyImpaired';
import EpilepsyProfile from './EpilepsyLabel/Epilepsy';
import ADHDProfile from './ADHDLabel/ADHD';
import LearningProfile from './LearningLabel/learning';
import ElderProfile from './ELDER LABEL/ELDER';
import DyslexiaProfile from './DYSLEXIA LABEL/DYSLEXIA';
import NavigationAdjustment from './NavigationAdjustment/NavigationButton'; // Import the new componen
import TopNav from './HeaderFile/TopNav'; // Import TopNav
import Footer from './Footer'; // Import Footer

const AccessibilityPanel = () => {
  const [open, setOpen] = useState(false);
  const [showTopNav, setShowTopNav] = useState(false);
  const [settings, setSettings] = useState({
    blindness: false,
    motorSkills: false,
    colorBlindness: false,
    visuallyImpaired: false,
    epilepsy: false,
    adhd: false,
    learning: false,
    elder: false,
    dyslexia: false,
  });
  const [expandedProfile, setExpandedProfile] = useState(null);

  const handleToggle = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  const toggleDrawer = () => {
    setOpen(!open);
    setShowTopNav(!showTopNav);
  };

  const handleAddButtonClick = (label) => {
    setExpandedProfile(expandedProfile === label ? null : label);
  };

  return (
    <>
    
      <Button onClick={toggleDrawer} variant="contained">
        Accessibility Page
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        {showTopNav && <TopNav />}
        <div style={{ width: 300, padding: 16, marginTop: '10px' }}>
          <div style={{ width: '101%', position: 'relative', marginTop: '-95px', marginLeft: '-20px' }}>
            <img
              src={img1}
              alt="Header"
              style={{
                width: '110%',
                height: '100px',
              }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" gutterBottom>
              <strong>Accessibility Profiles</strong>
            </Typography>
            <IconButton
              sx={{ backgroundColor: 'black', color: 'white', padding: '1px' }}
            >
              <RemoveIcon />
            </IconButton>
          </div>

          <List>
            <BlindnessProfile
              isExpanded={expandedProfile === 'Blindness'}
              onToggle={handleToggle}
              settings={settings}
              onAddButtonClick={() => handleAddButtonClick('Blindness')}
            />
            <MotorSkillsProfile
              isExpanded={expandedProfile === 'Motor Skills Disorders'}
              onToggle={handleToggle}
              settings={settings}
              onAddButtonClick={() => handleAddButtonClick('Motor Skills Disorders')}
            />
            <ColorBlindnessProfile
              isExpanded={expandedProfile === 'Color Blindness'}
              onToggle={handleToggle}
              settings={settings}
              onAddButtonClick={() => handleAddButtonClick('Color Blindness')}
            />
            <VisuallyImpairedProfile
              isExpanded={expandedProfile === 'Visually Impaired'}
              onToggle={handleToggle}
              settings={settings}
              onAddButtonClick={() => handleAddButtonClick('Visually Impaired')}
            />
            <EpilepsyProfile
              isExpanded={expandedProfile === 'Epilepsy'}
              onToggle={handleToggle}
              settings={settings}
              onAddButtonClick={() => handleAddButtonClick('Epilepsy')}
            />
            <ADHDProfile
              isExpanded={expandedProfile === 'ADHD'}
              onToggle={handleToggle}
              settings={settings}
              onAddButtonClick={() => handleAddButtonClick('ADHD')}
            />
            <LearningProfile
              isExpanded={expandedProfile === 'Learning'}
              onToggle={handleToggle}
              settings={settings}
              onAddButtonClick={() => handleAddButtonClick('Learning')}
            />
            <ElderProfile
              isExpanded={expandedProfile === 'Elder'}
              onToggle={handleToggle}
              settings={settings}
              onAddButtonClick={() => handleAddButtonClick('Elder')}
            />
            <DyslexiaProfile
              isExpanded={expandedProfile === 'Dyslexia'}
              onToggle={handleToggle}
              settings={settings}
              onAddButtonClick={() => handleAddButtonClick('Dyslexia')}
            />
          <NavigationAdjustment
           /> {/* Use the new NavigationAdjustment component */}
            <div
              style={{
                bottom: '30px',
                width: '100%',
                
                zIndex: 1000, // Ensure it's on top
              }}
            >
              <Footer />
            </div>
          </List>

{/* Fixed Footer */}
        </div>
              
      </Drawer>

    </>
  );
};

export default AccessibilityPanel;