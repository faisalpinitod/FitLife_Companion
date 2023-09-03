import React, { useState, useEffect } from 'react';
import './style/progress.css'; // Import your CSS file for styles

const ProgressTracking = () => {
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');
  const [bodyMeasurements, setBodyMeasurements] = useState('');
  const [notes, setNotes] = useState('');
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    // Fetch progress data from the API
    fetch('http://localhost:8000/progress/getProgressData')
      .then((response) => response.json())
      .then((data) => {
        setProgressData(data);
      })
      .catch((error) => console.error('Error fetching progress data:', error));
  }, []);

  const handleTrackProgress = async (e) => {
    e.preventDefault();

    const formData = {
      date,
      weight,
      bodyMeasurements,
      notes,
    };

    try {
      const response = await fetch('http://localhost:8000/progress/trackProgress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Progress tracked successfully');
        // You can handle success, such as showing a success message or redirecting
      } else {
        console.error('Failed to track progress');
        // Handle error cases
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error cases
    }
  };

  return (
    <div className="progress-tracking-container">
      <h2 className="progress-tracking-title">Fitness Progress Tracking</h2>
      <form className="progress-form">
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (in kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bodyMeasurements">Body Measurements:</label>
          <textarea
            rows="4"
            id="bodyMeasurements"
            value={bodyMeasurements}
            onChange={(e) => setBodyMeasurements(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes:</label>
          <textarea
            rows="4"
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <button onClick={handleTrackProgress}>Track Progress</button>
      </form>
      {/* Display progress data in a table */}
      <div className="progress-data">
        <h3>Progress Data</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Weight (kg)</th>
              <th>Body Measurements</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {progressData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.weight} kg</td>
                <td>{entry.bodyMeasurements}</td>
                <td>{entry.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgressTracking;
