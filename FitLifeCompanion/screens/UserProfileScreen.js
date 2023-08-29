// screens/UserProfileScreen.js
// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const UserProfileScreen = ({ navigation }) => {
//   return (
//     <View>
//       <Text>User Profile Screen</Text>
//       <Button
//         title="Go back to Dashboard"
//         onPress={() => navigation.navigate('Dashboard')}
//       />
//     </View>
//   );
// };

// export default UserProfileScreen;



import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const navigation = useNavigation();

  const handleSaveProfile = async () => {
    try {
      const response = await fetch('http://localhost:8000/user/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          age,
          gender,
          height,
          weight,
          email,
          contactNumber,
        }),
      });
  
      if (response.ok) {
        // User profile saved successfully
        navigation.navigate('GoalSettingScreen');
      } else {
        // Handle error response from the API
        console.error('Error saving user profile');
      }
    } catch (error) {
      // Handle any network or fetch related errors
      console.error('Network error:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={contactNumber}
        onChangeText={setContactNumber}
        keyboardType="phone-pad"
      />
      <Button title="Save Profile" onPress={handleSaveProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default UserProfileScreen;


