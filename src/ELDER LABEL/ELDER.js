// Elder.js
import React from 'react';
import { ListItem, ListItemText, Divider, ListItemSecondaryAction } from '@mui/material';
import ToggleSwitch from './ELDERToggleSwitch';
import AddButton from './ELDERAddButton';
import ProfileCards from './ELDERProfileCards';

const ElderProfile = ({ isExpanded, onToggle, settings, onAddButtonClick }) => {
  return (
    <>
      <ListItem>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AddButton onClick={onAddButtonClick} />
          <ListItemText primary="Elder" style={{ marginLeft: '6px' }} />
        </div>
        <ListItemSecondaryAction>
          <ToggleSwitch
            checked={settings.elder}
            onChange={() => onToggle('elder')}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      {isExpanded && <ProfileCards label="Elder" />}
    </>
  );
};

export default ElderProfile;
