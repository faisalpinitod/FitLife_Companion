import React, { useState } from 'react';
import styled from 'styled-components';

const UserProfileContainer = styled.div`
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

const UserProfile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSaveProfile = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      age,
      gender,
      height,
      weight,
      email,
      contactNumber,
    };

    try {
      const response = await fetch('http://localhost:8000/user/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User profile created successfully');
        // You can redirect or perform any other action upon success
      } else {
        console.error('Failed to create user profile');
        // Handle error cases
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error cases
    }
  };

  return (
    <UserProfileContainer>
      <Title>User Profile</Title>
      <Form>
        <FormGroup>
          <Label>Name:</Label>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Age:</Label>
          <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Gender:</Label>
          <Select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Height:</Label>
          <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Weight:</Label>
          <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Contact Number:</Label>
          <Input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
        </FormGroup>
        <Button onClick={handleSaveProfile}>Save Profile</Button>
      </Form>
    </UserProfileContainer>
  );
};

export default UserProfile;
