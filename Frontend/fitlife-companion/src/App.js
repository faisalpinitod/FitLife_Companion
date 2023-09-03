// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Navigation from './NavigationBar';
// // import UserProfile from './components/UserProfile';
// // import WorkoutPlanCreation from './components/WorkoutPlanCreation';
// // import ProgressTracking from './components/ProgressTracking';
// // import GoalSetting from './components/GoalSetting';
// // import NutritionPlanCreation from './components/NutritionPlanCreation';
// // import WorkoutLog from './components/WorkoutLog';
// // import TrainerProfile from './components/TrainerProfile';
// // import Userlogin1 from './components/Userlogin1';
// // import Home from './components/Home';

// // function App() {
// //   return (
    
      
// //       <div>
        
// //         <Navigation />
// //         <Routes>
        
// //           <Route path="/" element={<Home/>} />
// //           <Route path="/workout-plan" element={<WorkoutPlanCreation />} />
// //           <Route path="/user-profile" element={<UserProfile />} />
// //           <Route path="/user-login" element={<Userlogin1 />} />
// //           <Route path="/GoalSetting" element={<GoalSetting />} />
// //           <Route path="/progress-tracking" element={<ProgressTracking />} />
// //           <Route path="/nutritionplancreation/:id" element={<NutritionPlanCreation />} />
// //           <Route path="/WorkoutLog/:id" element={<WorkoutLog />} />
// //           <Route path="/TrainerProfile" element={<TrainerProfile />} />

// //         </Routes>
// //       </div>
    
// //   );
// // }

// // export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import UserNavigation from './NavigationBar';
// import TrainerNavigation from './trainernavigation';
// import UserProfile from './components/UserProfile';
// import WorkoutPlanCreation from './components/WorkoutPlanCreation';
// import NutritionPlanCreation from './components/NutritionPlanCreation';
// import Userlogin1 from './components/Userlogin1';
// import Home from './components/Home';
// import GoalSetting from './components/GoalSetting'
// import WorkoutLog from './components/WorkoutLog';
// import ProgressTracking from './components/ProgressTracking';


// function App() {
//   // Replace this with your authentication logic to determine the user's role
//   const userRole = 'trainer'; // 'user' or 'trainer'
  
//   return (
  
//       <div>
//         {userRole === 'user' ? (
//           <UserNavigation />
//         ) : (
//           <TrainerNavigation />
//         )}

//         <Routes>
//           <Route path="/" element={<Home />} />
//           {userRole === 'user' && (
//             // Routes for authenticated user
//             <>
//               <Route path="/GoalSetting" element={< GoalSetting/>} />
//               <Route path="/WorkoutLog/:id" element={<WorkoutLog />} />
//               <Route path="/user-profile" element={<UserProfile />} />
//               <Route path="/user-login" element={<Userlogin1 />} />
//               <Route path="/progress-tracking" element={<ProgressTracking />} />
//             </>
//           )}
//           {userRole === 'trainer' && (
//             // Routes for authenticated trainer
//             <>
//              <Route path="/workout-plan" element={<WorkoutPlanCreation />} />
//               <Route path="/nutritionplancreation/:id" element={<NutritionPlanCreation />} />
//               <Route path="/user-login" element={<Userlogin1 />} />
//               <Route path="/TrainerProfile" element={<UserProfile />} />
//               {/* Add other trainer-specific routes */}
//             </>
//           )}
//         </Routes>
//       </div>
   
//   );
// }

// export default App;




import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserNavigation from './NavigationBar';
import TrainerNavigation from './trainernavigation';
import UserProfile from './components/UserProfile';
import WorkoutPlanCreation from './components/WorkoutPlanCreation';
import NutritionPlanCreation from './components/NutritionPlanCreation';
import Userlogin1 from './components/Userlogin1';
import Home from './components/Home';
import GoalSetting from './components/GoalSetting';
import WorkoutLog from './components/WorkoutLog';
import ProgressTracking from './components/ProgressTracking';

function App() {
  // Initialize userRole state with a default value of 'user'
  const [userRole, setUserRole] = useState('user');

  // Function to toggle between user and trainer roles
  const toggleUserRole = () => {
    setUserRole((prevRole) => (prevRole === 'user' ? 'trainer' : 'user'));
  };

  return (
   
      <div>
        {/* Toggle button to switch between user and trainer */}
        <button onClick={toggleUserRole}>
          Switch to {userRole === 'user' ? 'Trainer' : 'User'} Role
        </button>

        {/* Conditional rendering of navigation based on userRole */}
        {userRole === 'user' ? (
          <UserNavigation />
        ) : (
          <TrainerNavigation />
        )}

        {/* Routes based on userRole */}
        <Routes>
          <Route path="/" element={<Home />} />
          {userRole === 'user' && (
            // Routes for authenticated user
            <>
              <Route path="/GoalSetting" element={<GoalSetting />} />
              <Route path="/WorkoutLog/:id" element={<WorkoutLog />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/user-login" element={<Userlogin1 />} />
              <Route path="/progress-tracking" element={<ProgressTracking />} />
            </>
          )}
          {userRole === 'trainer' && (
            // Routes for authenticated trainer
            <>
              <Route path="/workout-plan" element={<WorkoutPlanCreation />} />
              <Route path="/nutritionplancreation/:id" element={<NutritionPlanCreation />} />
              <Route path="/user-login" element={<Userlogin1 />} />
              {/* Add other trainer-specific routes */}
            </>
          )}
        </Routes>
      </div>
    
  );
}

export default App;
