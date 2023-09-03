import React, { useState, useEffect } from 'react';
import './style/progress.css';

const ProgressTracking = () => {
  const [data, setData] = useState({
    date: '',
    weight: '',
    bodyMeasurements: '',
    notes: '',
  });
  const [progressData, setProgressData] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleTrackProgress = async (e) => {
    e.preventDefault();

    try {
      const authTokenUser = localStorage.getItem('authTokenUser');
      const response = await fetch('http://localhost:8000/progress/trackProgress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authTokenUser,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        fetchProgressData();
        console.log('Progress tracked successfully');
        alert('Progress tracked successfully');
      } else {
        console.error('Failed to track progress');
        // Handle error cases
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error cases
    }
  };

  const fetchProgressData = async () => {
    try {
      const authTokenUser = localStorage.getItem('authTokenUser');
      const response = await fetch('http://localhost:8000/progress/getProgressData', {
        method: 'GET',
        headers: {
          'Authorization': authTokenUser,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProgressData(data);
      } else {
        console.error('Failed to fetch progress data:', response.status, response.statusText);
        // Handle error cases
      }
    } catch (error) {
      console.error('An error occurred while fetching progress data:', error);
      // Handle error cases
    }
  };

  useEffect(() => {
    fetchProgressData();
  }, []);

  return (
    <div className="progress-tracking-container">
      <h2 className="progress-tracking-title">Fitness Progress Tracking</h2>
      <form className="progress-form">
        <div className="form-group">
          <label htmlFor="date" className="form-label">
            Date:
          </label>
          <input
            type="date"
            id="date"
            
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight" className="form-label">
            Weight (in kg):
          </label>
          <input
            type="number"
            id="weight"
            
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bodyMeasurements" className="form-label">
            Body Measurements:
          </label>
          <textarea
            rows="4"
            id="bodyMeasurements"
            
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes" className="form-label">
            Notes:
          </label>
          <textarea
            rows="4"
            id="notes"
           
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button onClick={handleTrackProgress} className="form-button">
          Track Progress
        </button>
      </form>

      <div className="progress-data-container">
        <h2 className="progress-data-title">Progress Data</h2>
        <div className="progress-data">
          <table className="progress-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Weight (kg)</th>
                <th>Body Measurements</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {progressData.map((entry) => (
                <ProgressDataRow key={entry.id} entry={entry} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const ProgressDataRow = ({ entry }) => {
  return (
    <tr>
      <td>{entry.date}</td>
      <td>{entry.weight} kg</td>
      <td>{entry.bodyMeasurements}</td>
      <td>{entry.notes}</td>
    </tr>
  );
};

export default ProgressTracking;
