import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDumbbell, faChartLine,faIdCard, faBullseye, faClipboardList, faAppleAlt } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;

  &.active {
    font-weight: bold;
  }
`;

const NavigationBar = () => {
  return (
    <Nav>
      <StyledNavLink to="/user-profile">
        <FontAwesomeIcon icon={faUser} /> User Profile
      </StyledNavLink>
      <StyledNavLink to="/user-login">
        <FontAwesomeIcon icon={faChartLine} /> Login
      </StyledNavLink>
      <StyledNavLink to="/TrainerProfile">
        <FontAwesomeIcon icon={faIdCard} /> Trainer Profile
      </StyledNavLink>
      <StyledNavLink to="/GoalSetting">
        <FontAwesomeIcon icon={faBullseye} /> Goal Setting
      </StyledNavLink>
      <StyledNavLink to="/workout-plan">
        <FontAwesomeIcon icon={faDumbbell} /> Workout Plan
      </StyledNavLink>
      <StyledNavLink to="/WorkoutLog">
        <FontAwesomeIcon icon={faClipboardList} /> Workout Log
      </StyledNavLink>
      <StyledNavLink to="/nutritionplancreation">
        <FontAwesomeIcon icon={faAppleAlt} /> Nutrition Plan
      </StyledNavLink>
      <StyledNavLink to="/progress-tracking">
        <FontAwesomeIcon icon={faChartLine} /> Progress Tracking
      </StyledNavLink>
     
     
     
      {/* Add more NavLink components for other routes */}
    </Nav>
  );
};

export default NavigationBar;
