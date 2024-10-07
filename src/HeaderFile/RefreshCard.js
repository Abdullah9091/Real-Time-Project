import React, { useState } from 'react';
import './RefreshCard.css'; // Assuming you want custom styling

const CardComponent = ({onClose}) => {
  const [selectedOption, setSelectedOption] = useState('current-session');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleConfirm = () => {
    alert(`You have selected: ${selectedOption}`);
    // Implement your logic for removing the widget here
  };

  return (
    <>
    <div className='Maindiv'>
      <p>This website offers an accessibility widget. You have asked to remove it:</p>

      <div className="widget-container">
        <div className='Border'>
        <form className="options-form">
          <div className="option">
            <input
              type="radio"
              id="current-session"
              name="duration"
              value="current-session"
              checked={selectedOption === 'current-session'}
              onChange={handleOptionChange}
            />
            <label htmlFor="current-session">For the current session at this tab only</label>
          </div>

          <div className="option">
            <input
              type="radio"
              id="24-hours"
              name="duration"
              value="24-hours"
              checked={selectedOption === '24-hours'}
              onChange={handleOptionChange}
            />
            <label htmlFor="24-hours">For the next 24 hours</label>
          </div>

          <div className="option">
            <input
              type="radio"
              id="week"
              name="duration"
              value="week"
              checked={selectedOption === 'week'}
              onChange={handleOptionChange}
            />
            <label htmlFor="week">For a week</label>
          </div>

          <div className="option">
            <input
              type="radio"
              id="month"
              name="duration"
              value="month"
              checked={selectedOption === 'month'}
              onChange={handleOptionChange}
            />
            <label htmlFor="month">For a month</label>
          </div>
        </form>
        </div>

        <button className="confirm-button" onClick={handleConfirm}>
          Confirm and remove the accessibility widget
        </button>
      </div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      </div>
    </>
  );
};

export default CardComponent;
