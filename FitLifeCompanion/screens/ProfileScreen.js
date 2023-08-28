import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button, StyleSheet } from 'react-native';
import axios from 'axios'; // Import the Axios library

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male'); // Default value
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userContactNumber, setUserContactNumber] = useState('');

  const handleSaveProfile = async () => {
    try {
      // Create a data object with the user's profile data
      const profileData = {
        name: name,
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        email: userEmail,
        contactNumber: userContactNumber,
      };

      // Make a POST request to your backend API
      const response = await axios.post('/api/users/', profileData);


      // Handle the response from the server (e.g., show success message)
      console.log('Profile data saved:', response.data);

      // Navigate to the next screen (if needed)
      // navigation.navigate('NextScreen');
    } catch (error) {
      console.error('Error saving profile data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <Picker
        selectedValue={gender}
        style={styles.picker}
        onValueChange={(itemValue) => setGender(itemValue)}>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={userEmail}
        onChangeText={setUserEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={userContactNumber}
        onChangeText={setUserContactNumber}
      />
      <Button title="Save Profile" onPress={handleSaveProfile} />
    </View>
  );
};







const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  picker: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
  },
});

export default ProfileScreen;
