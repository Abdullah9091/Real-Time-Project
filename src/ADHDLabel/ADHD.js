// src/ADHDLabel/ADHD.js
import React from 'react';
import { ListItem, ListItemSecondaryAction, Divider, ListItemText } from '@mui/material';
import AddButton from './ADHDAddButton';
import ToggleSwitch from './ADHDToggleSwitch';
import ProfileCards from './ADHDProfileCards';

const ADHDProfile = ({ isExpanded, onToggle, settings, onAddButtonClick }) => {
  return (
    <>
      <ListItem>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AddButton onClick={onAddButtonClick} />
          <ListItemText primary="ADHD" style={{ marginLeft: '6px' }} />
        </div>
        <ListItemSecondaryAction>
          <ToggleSwitch
            checked={settings.adhd}
            onChange={() => onToggle('adhd')}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      {isExpanded && <ProfileCards label="ADHD" />}
    </>
  );
};

export default ADHDProfile;
