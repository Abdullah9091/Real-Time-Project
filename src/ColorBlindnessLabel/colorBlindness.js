import React from 'react';
import { ListItem, ListItemText, Divider, ListItemSecondaryAction } from '@mui/material';
import AddButton from './ColorAddButton';
import ToggleSwitch from './colorToggleSwitch';
import ProfileCards from './colorProfileCards';

const ColorBlindnessProfile = ({ isExpanded, onToggle, settings, onAddButtonClick }) => {
  return (
    <>
      <ListItem>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AddButton onClick={onAddButtonClick} />
          <ListItemText primary="Color Blindness" style={{ marginLeft: '6px' }} />
        </div>
        <ListItemSecondaryAction>
          <ToggleSwitch
            checked={settings.colorBlindness}
            onChange={() => onToggle('colorBlindness')}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      {isExpanded && <ProfileCards label="Color Blindness" />}
    </>
  );
};

export default ColorBlindnessProfile;
