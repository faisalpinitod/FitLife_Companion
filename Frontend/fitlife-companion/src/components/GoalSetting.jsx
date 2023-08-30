import React, { useState } from 'react';
import styled from 'styled-components';

const GoalSettingContainer = styled.div`
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

const Select = styled.select`
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

const GoalSetting = () => {
  const [goalType, setGoalType] = useState('');
  const [target, setTarget] = useState('');
  const [timeline, setTimeline] = useState('');

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

  return (
    <GoalSettingContainer>
      <Title>Fitness Goal Setting</Title>
      <Form>
        <FormGroup>
          <Label>Goal Type:</Label>
          <Select value={goalType} onChange={(e) => setGoalType(e.target.value)}>
            <option value="">Select</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Endurance">Endurance</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Target:</Label>
          <Input type="text" value={target} onChange={(e) => setTarget(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Timeline:</Label>
          <Input type="text" value={timeline} onChange={(e) => setTimeline(e.target.value)} />
        </FormGroup>
        <Button onClick={handleSetGoal}>Set Goal</Button>
      </Form>
    </GoalSettingContainer>
  );
};

export default GoalSetting;
