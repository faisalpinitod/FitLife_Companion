import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TrainerCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TrainerInfo = styled.div`
  flex: 1;
  padding-right: 15px;
`;

const TrainerName = styled.h3`
  margin: 0;
`;

const TrainerSpecialization = styled.p`
  color: #777;
`;

const TrainerExperience = styled.p`
  color: #777;
`;

const TrainerContact = styled.p`
  color: #777;
`;

const EnrollButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;

const TrainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TrainerProfile = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    // Fetch trainer data from the API
    fetch('http://localhost:8000/trainer/trainers')
      .then((response) => response.json())
      .then((data) => setTrainers(data))
      .catch((error) => console.error('Error fetching trainers:', error));
  }, []);

  return (
    <div>
      <h2>Trainer Profiles</h2>
      <div>
        {trainers.map((trainer) => (
          <TrainerCardContainer key={trainer._id}>
            <TrainerInfo>
              <TrainerName>{trainer.name}</TrainerName>
              <TrainerSpecialization>Specialization: {trainer.specialization}</TrainerSpecialization>
              <TrainerExperience>Experience: {trainer.experience} years</TrainerExperience>
              <TrainerContact>Contact Number: {trainer.contactNumber}</TrainerContact>
            </TrainerInfo>
            <EnrollButton>Enroll</EnrollButton>
          </TrainerCardContainer>
        ))}
      </div>
    </div>
  );
};

export default TrainerProfile;
