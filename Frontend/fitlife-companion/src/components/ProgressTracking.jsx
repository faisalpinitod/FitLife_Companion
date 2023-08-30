import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

const ProgressTrackingContainer = styled.div`
  max-width: 600px;
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

const ProgressTracking = () => {
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');
  const [bodyMeasurements, setBodyMeasurements] = useState('');
  const [notes, setNotes] = useState('');
  const [progressData, setProgressData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Weight Progress',
        data: [],
        fill: false,
        borderColor: '#007bff',
        backgroundColor: '#007bff',
      },
    ],
  });

  useEffect(() => {
    // Fetch progress data from the API
    fetch('http://localhost:8000/progress/getProgressData')
      .then((response) => response.json())
      .then((data) => {
        // Prepare chart data from the fetched data
        const labels = data.map((entry) => entry.date);
        const weights = data.map((entry) => entry.weight);

        setProgressData({
          labels,
          datasets: [
            {
              ...progressData.datasets[0],
              data: weights,
            },
          ],
        });
      })
      .catch((error) => console.error('Error fetching progress data:', error));
  }, []);

  const handleTrackProgress = async (e) => {
    e.preventDefault();

    const formData = {
      date,
      weight,
      bodyMeasurements,
      notes,
    };

    try {
      const response = await fetch('http://localhost:8000/progress/trackProgress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Progress tracked successfully');
        // Update progress data and labels after tracking
        setProgressData((prevData) => ({
          ...prevData,
          labels: [...prevData.labels, date],
          datasets: [
            {
              ...prevData.datasets[0],
              data: [...prevData.datasets[0].data, weight],
            },
          ],
        }));
        // You can handle success, such as showing a success message or redirecting
      } else {
        console.error('Failed to track progress');
        // Handle error cases
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error cases
    }
  };

  return (
    <ProgressTrackingContainer>
      <Title>Fitness Progress Tracking</Title>
      <Form>
        <FormGroup>
          <Label>Date:</Label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Weight (in kg):</Label>
          <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Body Measurements:</Label>
          <TextArea
            rows="4"
            value={bodyMeasurements}
            onChange={(e) => setBodyMeasurements(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Notes:</Label>
          <TextArea
            rows="4"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </FormGroup>
        <Button onClick={handleTrackProgress}>Track Progress</Button>
      </Form>
      <Line data={progressData} />
    </ProgressTrackingContainer>
  );
};

export default ProgressTracking;
