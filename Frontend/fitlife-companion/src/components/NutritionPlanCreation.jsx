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

const NutritionPlanCreation = () => {
  const [planName, setPlanName] = useState('');
  const [goal, setGoal] = useState('');
  const [duration, setDuration] = useState('');
  const [guidelines, setGuidelines] = useState('');

  const handleCreatePlan = async (e) => {
    e.preventDefault();

    const formData = {
      planName,
      goal,
      duration,
      guidelines,
    };

    try {
      const response = await fetch('http://localhost:8000/nutritionPlan/createPlan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Nutrition plan created successfully');
        // You can redirect or perform any other action upon success
      } else {
        console.error('Failed to create nutrition plan');
        // Handle error cases
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error cases
    }
  };

  return (
    <PlanCreationContainer>
      <Title>Nutrition Plan Creation</Title>
      <Form>
        <FormGroup>
          <Label>Plan Name:</Label>
          <Input type="text" value={planName} onChange={(e) => setPlanName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Goal:</Label>
          <Input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Duration:</Label>
          <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Guidelines:</Label>
          <TextArea value={guidelines} onChange={(e) => setGuidelines(e.target.value)} />
        </FormGroup>
        <Button onClick={handleCreatePlan}>Create Nutrition Plan</Button>
      </Form>
    </PlanCreationContainer>
  );
};

export default NutritionPlanCreation;
