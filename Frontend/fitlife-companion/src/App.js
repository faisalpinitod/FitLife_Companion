import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import UserProfile from './components/UserProfile';
import WorkoutPlanCreation from './components/WorkoutPlanCreation';
import ProgressTracking from './components/ProgressTracking';
import GoalSetting from './components/GoalSetting';
import NutritionPlanCreation from './components/NutritionPlanCreation';
import WorkoutLog from './components/WorkoutLog';
import TrainerProfile from './components/TrainerProfile';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div>
        <Routes>
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/workout-plan" element={<WorkoutPlanCreation />} />
          <Route path="/GoalSetting" element={<GoalSetting />} />
          <Route path="/progress-tracking" element={<ProgressTracking />} />
          <Route path="/nutritionplancreation" element={<NutritionPlanCreation />} />
          <Route path="/WorkoutLog" element={<WorkoutLog />} />
          <Route path="/TrainerProfile" element={<TrainerProfile />} />
          {/* Add more Route components for other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
