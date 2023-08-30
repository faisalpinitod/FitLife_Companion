import React, { useState } from 'react';
import styled from 'styled-components';

const LogsContainer = styled.div`
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

const WorkoutLogs = () => {
  const [date, setDate] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [exercisesMeals, setExercisesMeals] = useState('');
  const [durationCaloricIntake, setDurationCaloricIntake] = useState('');

  const handleLogEntry = async (e) => {
    e.preventDefault();

    const formData = {
      date,
      selectedPlan,
      exercisesMeals,
      durationCaloricIntake,
    };

    try {
      const response = await fetch('http://localhost:8000/log/createLog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Log entry created successfully');
        // You can redirect or perform any other action upon success
      } else {
        console.error('Failed to create log entry');
        // Handle error cases
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error cases
    }
  };

  return (
    <LogsContainer>
      <Title>Workout and Nutrition Logs</Title>
      <Form>
        <FormGroup>
          <Label>Date:</Label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Selected Plan:</Label>
          <Input type="text" value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Exercises/Meals:</Label>
          <TextArea value={exercisesMeals} onChange={(e) => setExercisesMeals(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Duration/Caloric Intake:</Label>
          <Input type="text" value={durationCaloricIntake} onChange={(e) => setDurationCaloricIntake(e.target.value)} />
        </FormGroup>
        <Button onClick={handleLogEntry}>Log Entry</Button>
      </Form>
    </LogsContainer>
  );
};

export default WorkoutLogs;
