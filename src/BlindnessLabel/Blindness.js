import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, Divider } from '@mui/material';
import ToggleSwitch from './ToggleBlind'; // Assuming you have ToggleSwitch as a reusable component
import AddButton from './BlindAdd'; // Assuming you have AddButton as a reusable component
import ProfileCards from './BlindnessProfileCards';
const BlindnessProfile = ({ isExpanded, onToggle, settings, onAddButtonClick }) => {
  return (
    <>
      <ListItem>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AddButton onClick={onAddButtonClick} />
          <ListItemText primary="Blindness" style={{ marginLeft: '6px' }} />
        </div>
        <ListItemSecondaryAction>
          <ToggleSwitch
            checked={settings.blindness}
            onChange={() => onToggle('blindness')}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      {isExpanded && <ProfileCards label="Blindness" />}
    </>
  );
};

export default BlindnessProfile;
