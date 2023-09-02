import React, { useState } from 'react';
import './style/userProfile.css'; // Import your CSS file

const UserProfile = () => {
  const [data, setData] = useState({});

  const handleSaveProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('User profile created successfully');
      } else {
        console.error('Failed to create user profile');
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
    <div className="user-profile-container">
      <h2 className="user-profile-title">User Profile</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            type="number"
            id="age"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Gender:
          </label>
          <select id="gender" className="form-input" onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="height" className="form-label">
            Height:
          </label>
          <input
            type="number"
            id="height"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight" className="form-label">
            Weight:
          </label>
          <input
            type="number"
            id="weight"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber" className="form-label">
            Contact Number:
          </label>
          <input
            type="text"
            id="contactNumber"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleSaveProfile}
          className="form-button"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
