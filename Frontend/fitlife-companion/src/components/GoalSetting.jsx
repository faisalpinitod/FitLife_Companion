import React, { useState, useEffect } from 'react';
import "./style/goal.css"

const GoalSetting = () => {
  const [goalType, setGoalType] = useState('');
  const [target, setTarget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [goals, setGoals] = useState([]);

  const handleSetGoal = async (e) => {
    e.preventDefault();

    const formData = {
      goalType,
      target,
      timeline,
    };

    try {
      const response = await fetch('http://localhost:8000/goal/setGoal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Fitness goal set successfully');
        // You can redirect or perform any other action upon success
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
      const response = await fetch('http://localhost:8000/goal/getGoals');
      if (response.ok) {
        const data = await response.json();
        setGoals(data);
      } else {
        console.error('Failed to fetch goals');
      }
    } catch (error) {
      console.error('An error occurred while fetching goals:', error);
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
            value={goalType}
            onChange={(e) => setGoalType(e.target.value)}
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
            value={target}
            onChange={(e) => setTarget(e.target.value)}
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
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="form-input"
          />
        </div>
        <button onClick={handleSetGoal} className="form-button">
          Set Goal
        </button>
      </form>

      <div className="goal-cards-container">
      <h2 className="goal-setting-title">My Goals</h2>

        {goals.map((goal, index) => (
          <div className="goal-card" key={index}>
            <h3>Goal Type: {goal.goalType}</h3>
            <p>Target: {goal.target}</p>
            <p>Timeline: {goal.timeline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalSetting;
