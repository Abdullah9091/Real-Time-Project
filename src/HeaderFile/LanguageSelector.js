import React, { useState } from 'react';
import './LanguageSelector.css'; // Import your CSS for styling

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="language-select-container">
      <select className="language-select" value={selectedLanguage} onChange={handleChange}>
        <option value="en-US">English (American)</option>
        <option value="fr-FR">French</option>
        <option value="es-ES">Spanish</option>
        <option value="he-IL">Hebrew</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
