import React from 'react';
import { Link } from 'react-router-dom';

function TrainerNavigation() {
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/workout-plan">Workout Plan</Link>
        </li>
        {/* <li>
          <Link to="/nutrition-plan">Nutrition Plan</Link>
        </li> */}
        <li>
          <Link to="/user-login">Login</Link>
        </li>
        {/* Add other trainer-specific links */}
      </ul>
    </nav>
  );
}

export default TrainerNavigation;
