import React, { useState, useEffect } from 'react';
import './HistoricalData.css'; 

const HistoricalData = () => {
    const [historicalData, setHistoricalData] = useState([]);

    // Fetch historical data
    useEffect(() => {
        const fetchHistoricalData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/emotions');
                const data = await response.json();
                setHistoricalData(data.emotions);
            } catch (error) {
                console.error('Error fetching historical data:', error);
            }
        };
        fetchHistoricalData();
    }, []);

    return (
        <div className="historical-data-container">
            <h2>Historical Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Emotion</th>
                    </tr>
                </thead>
                <tbody>
                    {historicalData.map((emotion, index) => (
                        <tr key={index}>
                            <td>{emotion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HistoricalData;
