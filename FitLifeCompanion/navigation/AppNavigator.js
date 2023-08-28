// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import UserProfileScreen from '../screens/UserProfileScreen'; // Import your screen components
// import GoalSettingScreen from '../screens/GoalSettingScreen';
// import ActivityLoggingScreen from '../screens/ActivityLoggingScreen';
// import ProgressTrackingScreen from '../screens/ProgressTrackingScreen';
// import DashboardScreen from '../screens/DashboardScreen';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const AppNavigator = () => {
//   return (
//     <Tab.Navigator>
//       {/* Define your bottom tab screens */}
      
//       <Tab.Screen name="UserProfile" component={UserProfileScreen} />
//       <Tab.Screen name="Dashboard" component={DashboardScreen} />
//       <Tab.Screen name="GoalSetting" component={GoalSettingScreen} />
//       <Tab.Screen name="ActivityLogging" component={ActivityLoggingScreen} />
//       <Tab.Screen name="ProgressTracking" component={ProgressTrackingScreen} />
      
//     </Tab.Navigator>
//   );
// };

// export default AppNavigator;





// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import UserProfileScreen from '../screens/UserProfileScreen';
// import GoalSettingScreen from '../screens/GoalSettingScreen';
// import ActivityLoggingScreen from '../screens/ActivityLoggingScreen';
// import ProgressTrackingScreen from '../screens/ProgressTrackingScreen';
// import DashboardScreen from '../screens/DashboardScreen';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator>
//       {/* Define your bottom tab screens */}
//       <Tab.Screen name="UserProfile" component={UserProfileScreen} />
//       <Tab.Screen name="GoalSetting" component={GoalSettingScreen} />
//       <Tab.Screen name="ActivityLogging" component={ActivityLoggingScreen} />
//       <Tab.Screen name="ProgressTracking" component={ProgressTrackingScreen} />
//       <Tab.Screen name="Dashboard" component={DashboardScreen} />
//     </Tab.Navigator>
//   );
// };

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Tabs">
//         {/* Stack Navigator for bottom tabs */}
//         <Stack.Screen
//           name="Tabs"
//           component={TabNavigator}
//           options={{ headerShown: false }} // Hide header for tab navigation
//         />
//         {/* Add more stack screens if needed */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;









import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TrainerListScreen from '../screens/TrainerListScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="TrainerList" component={TrainerListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
