// // navigation/AppNavigator.js
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import DashboardScreen from '../screens/DashboardScreen';
// import UserProfileScreen from '../screens/UserProfileScreen';
// // import GoalSettingScreen from '../screens/GoalSettingScreen';
// // import PlanListingScreen from '../screens/PlanListingScreen';
// // import PlanDetailsScreen from '../screens/PlanDetailsScreen';
// // import ActivityLogScreen from '../screens/ActivityLogScreen';
// // import ProgressTrackingScreen from '../screens/ProgressTrackingScreen';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// const DashboardStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Dashboard" component={DashboardScreen} />
//     </Stack.Navigator>
//   );
// };

// const UserProfileStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="UserProfile" component={UserProfileScreen} />
//     </Stack.Navigator>
//   );
// };

// const AppNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Dashboard"
//         component={DashboardStack}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="UserProfile"
//         component={UserProfileStack}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//       {/* Add more Tab.Screen components as needed */}
//     </Tab.Navigator>
//   );
// };

// export default AppNavigator;




import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import ActivityLogScreen from '../screens/ActivityLogScreen';
import ProgressTrackingScreen from '../screens/ProgressTrackingScreen';
import GoalSettingScreen from '../screens/GoalSettingScreen';
import PlanListingScreen from '../screens/PlanListingScreen';
import PlanDetailsScreen from '../screens/PlanDetailsScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen name="Profile" component={UserProfileScreen} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Activity Log" component={ActivityLogScreen} />
        <Tab.Screen name="Progress Tracking" component={ProgressTrackingScreen} />
        <Tab.Screen name="Goal Setting" component={GoalSettingScreen} />
        <Tab.Screen name="Plan Listing" component={PlanListingScreen} />
        <Tab.Screen name="Plan Details" component={PlanDetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
