// // GoalSettingScreen.js
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const GoalSettingScreen = ({ navigation }) => {
//   const [goalType, setGoalType] = useState('');
//   const [target, setTarget] = useState('');
//   const [timeline, setTimeline] = useState('');

//   const handleSaveGoal = () => {
//     // Handle saving the goal data
//     // You can use APIs or state management libraries for this.
//     // After saving, navigate to the next screen.
//     navigation.navigate('ActivityLogging'); // Change to your screen name
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Goal Setting</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Goal Type"
//         value={goalType}
//         onChangeText={setGoalType}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Target"
//         value={target}
//         onChangeText={setTarget}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Timeline"
//         value={timeline}
//         onChangeText={setTimeline}
//       />
//       <Button title="Save Goal" onPress={handleSaveGoal} />
//     </View>
//   );
// };




// export default GoalSetting;




import React from 'react';
// import GoalSetting from './GoalSetting'; // Import statement

const GoalSettingScreen = () => {
  return (
    <div>
      <h1>Goal Setting Screen</h1>
      {/* <GoalSetting /> Use the imported component */}
    </div>
  );
};

export default GoalSettingScreen;