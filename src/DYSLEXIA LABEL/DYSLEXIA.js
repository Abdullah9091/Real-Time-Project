// DyslexiaProfile.js
import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, Divider } from '@mui/material';
import ToggleSwitch from './DYSLEXIAToggleSwitch';
import AddButton from './DYSLEXIAAddButton';
import ProfileCards from './DYSLEXIAProfileCards';

const DyslexiaProfile = ({ isExpanded, onToggle, settings, onAddButtonClick }) => {
  return (
    <>
      <ListItem>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AddButton onClick={onAddButtonClick} />
          <ListItemText primary="Dyslexia" style={{ marginLeft: '6px' }} />
        </div>
        <ListItemSecondaryAction>
          <ToggleSwitch
            checked={settings.dyslexia}
            onChange={() => onToggle('dyslexia')}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      {isExpanded && <ProfileCards label="Dyslexia" />}
    </>
  );
};

export default DyslexiaProfile;
