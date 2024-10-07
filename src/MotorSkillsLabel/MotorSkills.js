import React from 'react';
import { ListItem, ListItemText, Divider, ListItemSecondaryAction } from '@mui/material';
import AddButton from './MotorAddButton';
import ToggleSwitch from './MotorToggleSwitch';
import ProfileCards from './MotorProfileCards';

const MotorSkillsProfile = ({ isExpanded, onToggle, settings, onAddButtonClick }) => {
  return (
    <>
      <ListItem>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AddButton onClick={onAddButtonClick} />
          <ListItemText primary="Motor Skills Disorders" style={{ marginLeft: '6px' }} />
        </div>
        <ListItemSecondaryAction>
          <ToggleSwitch
            checked={settings.motorSkills}
            onChange={() => onToggle('motorSkills')}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      {isExpanded && <ProfileCards label="Motor Skills Disorders" />}
    </>
  );
};

export default MotorSkillsProfile;
