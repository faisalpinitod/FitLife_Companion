import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style/workoutPlan.css';

const WorkoutPlanCreation = () => {
  const [data, setData] = useState({
    planName: '',
    goal: '',
    duration: '',
    description: '',
  });

  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const openModal = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  async function fetchWorkoutPlans() {
    try {
      const authTokenTrainer = localStorage.getItem('authTokentrainer');
      const response = await fetch('http://localhost:8000/workoutPlan/workoutPlans', {
        method: 'GET',
        headers: {
          Authorization: authTokenTrainer,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setWorkoutPlans(data);
      } else {
        console.error('Failed to fetch workout plans');
      }
    } catch (error) {
      console.error('An error occurred while fetching workout plans:', error);
    }
  }

  useEffect(() => {
    // Fetch workout plans using GET request with authentication
    fetchWorkoutPlans();
  }, []);

  const handleCreatePlan = async (e) => {
    e.preventDefault();

    try {
      const authTokenTrainer = localStorage.getItem('authTokentrainer');
      const response = await fetch('http://localhost:8000/workoutPlan/createPlan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authTokenTrainer,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Workout plan created successfully');
        fetchWorkoutPlans();
        closeModal(); // Close the modal after creating the plan
      } else {
        console.error('Failed to create workout plan');
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
    <div className="plan-creation-container">
      <h2 className="plan-creation-title">Workout Plan Creation</h2>
      <div className="input-container">
        <button onClick={openModal} className="show-form-button">
          Show Form
        </button>
        {showForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>&times;</span>
              <h3>Create Workout Plan</h3>
              <form>
                <div className="plan-label">Plan Name:</div>
                <input type="text" id="planName" onChange={handleChange} className="plan-input" />

                <div className="plan-label">Goal:</div>
                <input type="text" id="goal" onChange={handleChange} className="plan-input" />

                <div className="plan-label">Duration (in days):</div>
                <input type="number" id="duration" onChange={handleChange} className="plan-input" />

                <div className="plan-label">Description:</div>
                <textarea id="description" onChange={handleChange} className="plan-textarea" />

                <div className="modal-button-container">
                  <button onClick={handleCreatePlan} className="modal-button">
                    Create Workout Plan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Display the list of workout plans in rows */}
      <div className="workout-plan-list">
        <h2 className="workout-plan-list-title">Workout Plans</h2>
        <div className="workout-plan-grid">
          {workoutPlans.map((plan) => (
            <WorkoutPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};





const WorkoutPlanCard = ({ plan }) => {
  return (
    <div className="workout-plan-card">
      <h3>{plan.planName}</h3>
      <p>Goal: {plan.goal}</p>
      <p>Duration: {plan.duration}</p>
      <p>Description: {plan.description}</p>
      <Link to={`/nutritionplancreation/${plan._id}?plan=${plan.planName}`}><button className="select-plan-button">Select Plan</button></Link>
    </div>
  );
};

export default WorkoutPlanCreation;
