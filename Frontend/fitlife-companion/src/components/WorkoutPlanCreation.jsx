import React, { useState } from 'react';
import styled from 'styled-components';

const PlanCreationContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const WorkoutPlanCreation = () => {
  const [data, setData] = useState('');


  const handleCreatePlan = async (e) => {
    e.preventDefault();



    try {
      const authTokenTrainer = localStorage.getItem('authTokentrainer');
      const response = await fetch('http://localhost:8000/workoutPlan/createPlan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':  authTokenTrainer,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Workout plan created successfully');
       
      } else {
        console.error('Failed to create workout plan');
   
      }
    } catch (error) {
      console.error('An error occurred:', error);
    
    }
  };



  const handleChange = (e)=>{
    const {id,value}=e.target
    setData({...data,[id]:value})
  }

  return (
    <PlanCreationContainer>
      <Title>Workout Plan Creation</Title>
      <Form>
        <FormGroup>
          <Label>Plan Name:</Label>
          <Input type="text" id="planName"  onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Goal:</Label>
          <Input type="text" id="goal" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Duration:</Label>
          <Input type="number" id="duration" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Description:</Label>
          <TextArea id="description" onChange={handleChange} />
        </FormGroup>
        <Button onClick={handleCreatePlan}>Create Workout Plan</Button>
      </Form>
    </PlanCreationContainer>
  );
};

export default WorkoutPlanCreation;
