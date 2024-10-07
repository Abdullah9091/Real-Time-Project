import React from 'react';
import { ListItem, ListItemText, Divider, ListItemSecondaryAction } from '@mui/material';
import AddButton from './visuallyAddButton';
import ToggleSwitch from './visuallyToggleSwitch';
import ProfileCards from './visuallyProfileCards';

const VisuallyImpairedProfile = ({ isExpanded, onToggle, settings, onAddButtonClick }) => {
  return (
    <>
      <ListItem>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AddButton onClick={onAddButtonClick} />
          <ListItemText primary="Visually Impaired" style={{ marginLeft: '6px' }} />
        </div>
        <ListItemSecondaryAction>
          <ToggleSwitch
            checked={settings.visuallyImpaired}
            onChange={() => onToggle('visuallyImpaired')}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      {isExpanded && <ProfileCards label="Visually Impaired" />}
    </>
  );
};

export default VisuallyImpairedProfile;
