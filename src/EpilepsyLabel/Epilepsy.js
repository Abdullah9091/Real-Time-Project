// EpilepsyProfile.js
import React from 'react';
import { ListItem, ListItemSecondaryAction, Divider ,ListItemText} from '@mui/material';
import AddButton from './EpilepsyAddButton';
import ToggleSwitch from './EpilepsyToggleSwitch';
import ColorCustomizer from './EpilepsyProfileCards';

const EpilepsyProfile = ({ isExpanded, onToggle, settings, onAddButtonClick }) => {
  return (
    <>
      <ListItem>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AddButton onClick={onAddButtonClick} />
          <ListItemText primary="Epilepsy" style={{ marginLeft: '6px' }} />
        </div>
        <ListItemSecondaryAction>
          <ToggleSwitch
            checked={settings.epilepsy}
            onChange={() => onToggle('epilepsy')}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      {isExpanded && <ColorCustomizer label="Epilepsy" />}

    </>
  );
};

export default EpilepsyProfile;
