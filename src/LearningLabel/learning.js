// src/LearningLabel/Learning.js
import React from 'react';
import { ListItem, ListItemSecondaryAction, Divider, ListItemText } from '@mui/material';
import AddButton from './learningAddButton';
import ToggleSwitch from './learningToggleSwitch';
import ProfileCards from './learningProfileCards';

const LearningProfile = ({ isExpanded, onToggle, settings, onAddButtonClick }) => {
  return (
    <>
      <ListItem>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AddButton onClick={onAddButtonClick} />
          <ListItemText primary="Learning" style={{ marginLeft: '6px' }} />
        </div>
        <ListItemSecondaryAction>
          <ToggleSwitch
            checked={settings.learning}
            onChange={() => onToggle('learning')}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      {isExpanded && <ProfileCards label="Learning" />}
    </>
  );
};

export default LearningProfile;
