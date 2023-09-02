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
  const [data,setData]=useState()

  const handleSaveProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/trainer/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Trainer profile created successfully');
        
      } else {
        console.error('Failed to create user profile');
  
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
    <UserProfileContainer>
      <Title>Trainer Profile</Title>
      <Form>
        <FormGroup>
          <Label>Name:</Label>
          <Input type="text" id="name"  onChange={handleChange} />
        </FormGroup>
        
        <FormGroup>
          <Label>Gender:</Label>
          <Select id="gender" onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>specialization:</Label>
          <Input type="text" id="specialization" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>experience:</Label>
          <Input type="number" id="experience"  onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input type="email" id="email"  onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Contact Number:</Label>
          <Input type="text" id="contactNumber"  onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input type="password" id="password"  onChange={handleChange} />
        </FormGroup>
        <Button onClick={handleSaveProfile}>Save Profile</Button>
      </Form>
    </UserProfileContainer>
  );
};

export default UserProfile;
