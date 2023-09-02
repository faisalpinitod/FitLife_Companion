// import React, { useState } from 'react';
// import styled from 'styled-components';

// const PlanCreationContainer = styled.div`
//   max-width: 400px;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   margin-bottom: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 20px;
// `;

// const Label = styled.label`
//   font-size: 16px;
//   margin-bottom: 8px;
// `;

// const Input = styled.input`
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const TextArea = styled.textarea`
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   font-size: 16px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const NutritionPlanCreation = () => {
//   const [planName, setPlanName] = useState('');
//   const [goal, setGoal] = useState('');
//   const [duration, setDuration] = useState('');
//   const [guidelines, setGuidelines] = useState('');

//   const handleCreatePlan = async (e) => {
//     e.preventDefault();

//     const formData = {
//       planName,
//       goal,
//       duration,
//       guidelines,
//     };

//     try {
//       const response = await fetch('http://localhost:8000/nutritionPlan/createPlan', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log('Nutrition plan created successfully');
//         // You can redirect or perform any other action upon success
//       } else {
//         console.error('Failed to create nutrition plan');
//         // Handle error cases
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//       // Handle error cases
//     }
//   };

//   return (
//     <PlanCreationContainer>
//       <Title>Nutrition Plan Creation</Title>
//       <Form>
//         <FormGroup>
//           <Label>Plan Name:</Label>
//           <Input type="text" value={planName} onChange={(e) => setPlanName(e.target.value)} />
//         </FormGroup>
//         <FormGroup>
//           <Label>Goal:</Label>
//           <Input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} />
//         </FormGroup>
//         <FormGroup>
//           <Label>Duration:</Label>
//           <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
//         </FormGroup>
//         <FormGroup>
//           <Label>Guidelines:</Label>
//           <TextArea value={guidelines} onChange={(e) => setGuidelines(e.target.value)} />
//         </FormGroup>
//         <Button onClick={handleCreatePlan}>Create Nutrition Plan</Button>
//       </Form>
//     </PlanCreationContainer>
//   );
// };

// export default NutritionPlanCreation;




import React, { useState, useEffect } from 'react';
import './style/trainerNutrition.css';

const NutritionPlanCreation = () => {
  const [data, setData] = useState({
    planName: '',
    goal: '',
    duration: '',
    guidelines: '', // Updated entity name to match your requirements
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
      const response = await fetch('http://localhost:8000/nutritionPlan/nutritionPlans', {
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
          Authorization: authTokenTrainer,
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
                <input type="text" id="planName" onChange={handleChange} className="plan-input" />

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
