import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './fercss.png';

import './App.css';


const EmotionDisplay = () => {
    const [mostFrequentEmotion, setMostFrequentEmotion] = useState('');
    const [lastUpdateTime, setLastUpdateTime] = useState('');

    useEffect(() => {
        const fetchEmotions = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/emotions');
                const { emotions } = response.data;

                if (emotions.length > 0) {
                    const mostFrequent = findMostFrequent(emotions);
                    setMostFrequentEmotion(mostFrequent.emotion);
                    setLastUpdateTime(new Date().toLocaleTimeString());
                }
            } catch (error) {
                console.error('Error fetching emotions:', error);
            }
        };

       
        fetchEmotions();
        const intervalId = setInterval(fetchEmotions, 50000);
        return () => clearInterval(intervalId);
    }, []);

    const findMostFrequent = (emotions) => {
        const frequencyMap = {};
        emotions.forEach(emotion => {
            frequencyMap[emotion] = (frequencyMap[emotion] || 0) + 1;
        });
        const mostFrequent = Object.keys(frequencyMap).reduce((a, b) => frequencyMap[a] > frequencyMap[b] ? a : b);
        return { emotion: mostFrequent, frequency: frequencyMap[mostFrequent] };
    };

    return (
        <div className='most-freq'>
<img src={logo} alt="Logo" className="fer-logo" />
            <h2>Most Frequent Emotion</h2>
            <p>Emotion: {mostFrequentEmotion}</p>
            <p>Last Updated: {lastUpdateTime}</p>
        </div>
    );
};

export default EmotionDisplay;
