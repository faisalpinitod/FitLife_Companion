import React, { useState, useEffect } from 'react';
import './style/userWorkout.css';
import { useParams } from 'react-router-dom';

function WorkoutLogs() {
  const { id } = useParams();
  const params = new URLSearchParams(window.location.search);
  const plan = params.get("plan");

  const [data, setData] = useState({
    date: '',
    selectedPlan: plan,
    exercises: '',
    duration: '',
    workoutPlanId: id
  });

  const [logs, setLogs] = useState([]);
  const authTokenUser = localStorage.getItem('authTokenUser');

  const fetchLogs = () => {
    fetch('https://fitlife-companion11.onrender.com/userWorkoutLog/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authTokenUser,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLogs(data);
      })
      .catch((error) => console.error('Error fetching logs data:', error));
  }

  useEffect(() => {
    // Fetch logs data from the API
    fetchLogs();
  }, []);

  const handleLogEntry = async (e) => {
    e.preventDefault();

    try {
      const authTokenUser = localStorage.getItem('authTokenUser');
      const response = await fetch('https://fitlife-companion11.onrender.com/userWorkoutLog/createlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authTokenUser,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Log entry created successfully');
        // Fetch updated logs after creating a new entry
        fetchLogs();
      } else {
        alert("You are not authorized! Please login first!")
        console.error('Failed to create log entry');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  return (
    <div className="logs-container">
      <h2 className="logs-title">Workout and Nutrition Logs</h2>
      <form className="logs-form">
        <div className="form-group">
          <label htmlFor="date" className="form-label">
            Date:
          </label>
          <input
            type="date"
            id="date"
            onChange={handleChange}
            className="input-box"
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedPlan" className="form-label">
            Selected Plan:
          </label>
          <input
            type="text"
            id="selectedPlan"
            value={plan}
            onChange={handleChange}
            className="input-box"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exercisesMeals" className="form-label">
            Exercises/Meals:
          </label>
          <textarea
            id="exercises"
            onChange={handleChange}
            className="input-box"
          />
        </div>
        <div className="form-group">
          <label htmlFor="durationCaloricIntake" className="form-label">
            Duration/Caloric Intake:
          </label>
          <input
            type="text"
            id="duration"
            onChange={handleChange}
            className="input-box"
          />
        </div>
        <button onClick={handleLogEntry} className="log-button">
          Log Entry
        </button>
      </form>
      <div className="logs-card-container">
        {logs.map((log, index) => (
          <div key={index} className="log-card">
            <h3>Date: {log.date}</h3>
            <p>Selected Plan: {log.selectedPlan}</p>
            <p>Exercises/Meals: {log.exercises}</p>
            <p>Duration/Caloric Intake: {log.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutLogs;
