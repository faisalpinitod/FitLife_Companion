
import React, { useState, useEffect } from 'react';
import './style/workoutPlan.css';
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState({
        planName: '',
        goal: '',
        duration: '',
        description: '',
      });
    
      const [workoutPlans, setWorkoutPlans] = useState([]);
    //   const [showForm, setShowForm] = useState(false);
    
     
    
      async function fetchWorkoutPlans() {
        try {
       
          const response = await fetch('http://localhost:8000/workoutPlan/workoutPlans', {
            method: 'GET',
            headers: {
            //   Authorization: authTokenTrainer,
            },
          });
    
          if (response.ok) {
            const data = await response.json();
            setWorkoutPlans(data);
            console.log(data)
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
    
     
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setData({ ...data, [id]: value });
      };
    
      return (
        <div className="plan-creation-container">
          
    
          {/* Display the list of workout plans in rows */}
          <div className="workout-plan-list">
            <h2 className="workout-plan-list-title">Workout Plans</h2>
            <div className="workout-plan-grid">
              {workoutPlans.map((plan) => (
                <WorkoutPlanCard key={plan._id} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      );
}


const WorkoutPlanCard = ({ plan }) => {
    return (
      <div className="workout-plan-card">
        <h3>{plan.planName}</h3>
        <p>Goal: {plan.goal}</p>
        <p>Duration: {plan.duration}</p>
        <p>Description: {plan.description}</p>
        <Link to={`/WorkoutLog/${plan._id}?plan=${plan.planName}`}><button className="select-plan-button">Select Plan</button></Link>
      </div>
    );
  };

export default Home










