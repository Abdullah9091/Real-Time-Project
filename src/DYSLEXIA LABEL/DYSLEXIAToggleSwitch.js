// ToggleSwitch.js
import React from 'react';
import { Switch } from 'antd';

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      checkedChildren="On"
      unCheckedChildren="Off"
      style={{ backgroundColor: checked ? 'green' : undefined }} // Active color
    />
  );
};

export default ToggleSwitch;
