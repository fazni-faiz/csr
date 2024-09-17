// src/Footer.js
import React, { useState } from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  const [userFeedback, setUserFeedback] = useState('');

  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Facial Expression Recognition</p>
      <div className="feedback">
        <input
          type="text"
          placeholder="Enter your feedback"
          value={userFeedback}
          onChange={(e) => setUserFeedback(e.target.value)}
        />
        <button onClick={() => {}}>Submit Feedback</button>
      </div>
    </footer>
  );
};

export default Footer;
