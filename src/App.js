import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmotionDisplay from './EmotionDisplay';
import HistoricalDataPage from './HistoricalDataPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showVideoFeed, setShowVideoFeed] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);

  const toggleVideoFeed = () => setShowVideoFeed(prevState => !prevState);

  const toggleCamera = async () => {
    try {
      const response = await fetch('http://localhost:5000/toggle_camera', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setIsCameraOn(data.camera_on);
    } catch (error) {
      console.error('Error toggling camera:', error);
    }
  };

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  

  return (
    <Router>
      <div className="App">
        
        <Navbar />

        <main className="main-content">
          <div className="content-container">
            {showVideoFeed && (
              <div className="video-feed">
                {/* liive video feed */}
                {isCameraOn ? (
                  <img src="http://localhost:5000/video_feed" alt="Live Video Feed" />
                ) : (
                  <div className="camera-off">Camera is off</div>
                )}
              </div>
            )}
            <div className="interaction-panel">
              {/* notification Panel */}
              {showNotification && (
                <div className="notification">
                  <p>Notification: Detected Angry Expression!</p>
                </div>
              )}
              {/* Emotion Display */}
              <div className="emotion-display">
                <EmotionDisplay />
              </div>
              {/* button to cloSe the videofeed*/}
              <button onClick={toggleVideoFeed}>
                {showVideoFeed ? 'Hide Video Feed' : 'Show Video Feed'}
              </button>
              {/*camera on off button*/}
              <button onClick={toggleCamera}>
                {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
              </button>
            </div>
          </div>
        </main>

        <Footer />

        
        {showLogin && <LoginPage onClose={closeLogin} />}

        <Routes>
          <Route path="/login" element={<LoginPage onClose={closeLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/historical-data" element={<HistoricalDataPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
