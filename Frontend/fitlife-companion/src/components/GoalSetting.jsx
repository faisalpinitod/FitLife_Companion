import React, { useState, useEffect } from 'react';
import './style/goal.css';

const GoalSetting = () => {
  const [data, setData] = useState({
    goalType: '',
    target: '',
    timeline: '',
  });
  const [goals, setGoals] = useState([]);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };
  
  const handleSetGoal = async (e) => {
    e.preventDefault();
    
    try {
      const authTokenUser = localStorage.getItem('authTokenUser');
      const response = await fetch('http://localhost:8000/fitnessGoal/goal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authTokenUser,
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        fetchGoals();
        console.log('Fitness goal set successfully');
        alert('Goal created!');
      } else {
        console.error('Failed to set fitness goal');
        // Handle error cases
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error cases
    }
  };
  
  const fetchGoals = async () => {
    try {
      const authTokenUser = localStorage.getItem('authTokenUser');
      const response = await fetch('http://localhost:8000/fitnessGoal/goal', {
        method: 'GET',
        headers: {
          'Authorization': authTokenUser,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setGoals(data);
      } else {
        console.error('Failed to fetch goals:', response.status, response.statusText);
        // Handle error cases
      }
    } catch (error) {
      console.error('An error occurred while fetching goals:', error);
      // Handle error cases
    }
  };
  
  useEffect(() => {
    fetchGoals();
  }, []);
  
  return (
    <div className="goal-setting-container">
      <h2 className="goal-setting-title">Fitness Goal Setting</h2>
      <form className="goal-setting-form">
        <div className="form-group">
          <label htmlFor="goalType" className="form-label">
            Goal Type:
          </label>
          <select
            id="goalType"
            value={data.goalType}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Endurance">Endurance</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="target" className="form-label">
            Target:
          </label>
          <input
            type="text"
            id="target"
            value={data.target}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeline" className="form-label">
            Timeline:
          </label>
          <input
            type="text"
            id="timeline"
            value={data.timeline}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button onClick={handleSetGoal} className="form-button">
          Set Goal
        </button>
      </form>
  
      <div className="goal-cards-container">
        <h2 className="goal-setting-title">My Goals</h2>
        <div className="goal-cards">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      </div>
    </div>
  );
};

const GoalCard = ({ goal }) => {
  return (
    <div className="goal-card">
      <h3>Goal Type: {goal.goalType}</h3>
      <p>Target: {goal.target}</p>
      <p>Timeline: {goal.timeline}</p>
    </div>
  );
};

export default GoalSetting;
