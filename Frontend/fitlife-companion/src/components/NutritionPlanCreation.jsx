
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style/trainerNutrition.css';

const NutritionPlanCreation = () => {
  const {id}=useParams()
  const params=new URLSearchParams(window.location.search)
  const plan=params.get("plan")
  const [data, setData] = useState({
    planName: plan,
    goal: '',
    duration: '',
    guidelines: '',
    workoutPlanId:id // Updated entity name to match your requirements
  });

  const [nutritionPlans, setNutritionPlans] = useState([]); // Updated entity name
  const [showForm, setShowForm] = useState(false);

  const openModal = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  async function fetchNutritionPlans() {
    try {
      const authTokenTrainer = localStorage.getItem('authTokentrainer');
      const response = await fetch('http://localhost:8000/nutritionPlan/plan', {
        method: 'GET',
        headers: {
          Authorization: authTokenTrainer,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setNutritionPlans(data); // Updated entity name
      } else {
        console.error('Failed to fetch nutrition plans');
      }
    } catch (error) {
      console.error('An error occurred while fetching nutrition plans:', error);
    }
  }

  useEffect(() => {
    // Fetch nutrition plans using GET request with authentication
    fetchNutritionPlans();
  }, []);

  const handleCreatePlan = async (e) => {
    e.preventDefault();

    try {
      const authTokenTrainer = localStorage.getItem('authTokentrainer');
      const response = await fetch('http://localhost:8000/nutritionPlan/createPlan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authTokenTrainer,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Nutrition plan created successfully');
        fetchNutritionPlans();
        closeModal(); // Close the modal after creating the plan
      } else {
        console.error('Failed to create nutrition plan');
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
      <h2 className="plan-creation-title">Nutrition Plan Creation</h2>
      <div className="input-container">
        <button onClick={openModal} className="show-form-button">
          Show Form
        </button>
        {showForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>&times;</span>
              <h3>Create Nutrition Plan</h3>
              <form>
                <div className="plan-label">Plan Name:</div>
                <input type="text" value={plan} id="planName" onChange={handleChange} className="plan-input" />

                <div className="plan-label">Goal:</div>
                <input type="text" id="goal" onChange={handleChange} className="plan-input" />

                <div className="plan-label">Duration (in days):</div>
                <input type="number" id="duration" onChange={handleChange} className="plan-input" />

                <div className="plan-label">Guidelines:</div>
                <textarea id="guidelines" onChange={handleChange} className="plan-textarea" /> {/* Updated entity name */}

                <div className="modal-button-container">
                  <button onClick={handleCreatePlan} className="modal-button">
                    Create Nutrition Plan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Display the list of nutrition plans in rows */}
      <div className="workout-plan-list">
        <h2 className="workout-plan-list-title">Nutrition Plans</h2>
        <div className="workout-plan-grid">
          {nutritionPlans.map((plan) => (
            <NutritionPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

const NutritionPlanCard = ({ plan }) => {
  return (
    <div className="workout-plan-card">
      <h3>{plan.planName}</h3>
      <p>Goal: {plan.goal}</p>
      <p>Duration: {plan.duration}</p>
      <p>Guidelines: {plan.guidelines}</p> {/* Updated entity name */}
      <button className="select-plan-button">Select Plan</button>
    </div>
  );
};

export default NutritionPlanCreation;
