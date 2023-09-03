import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'
function UserNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/GoalSetting">Fitness Goal</Link>
        </li>
        <li>
          <Link to="/progress-tracking">Progress Tracking</Link>
        </li>
        <li>
          <Link to="/user-login">Login</Link>
        </li>
        
        {/* Add other user-specific links */}
      </ul>
    </nav>
  );
}

export default UserNavigation;
