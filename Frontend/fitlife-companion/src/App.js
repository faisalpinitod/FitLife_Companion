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
import Userlogin1 from './components/Userlogin1';
import Home from './components/Home';

function App() {
  return (
    
      
      <div>
        
        <NavigationBar />
        <Routes>
        
          <Route path="/" element={<Home/>} />
          <Route path="/workout-plan" element={<WorkoutPlanCreation />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/user-login" element={<Userlogin1 />} />
          <Route path="/GoalSetting" element={<GoalSetting />} />
          <Route path="/progress-tracking" element={<ProgressTracking />} />
          <Route path="/nutritionplancreation/:id" element={<NutritionPlanCreation />} />
          <Route path="/WorkoutLog/:id" element={<WorkoutLog />} />
          <Route path="/TrainerProfile" element={<TrainerProfile />} />

        </Routes>
      </div>
    
  );
}

export default App;
