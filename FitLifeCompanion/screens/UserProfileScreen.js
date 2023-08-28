import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button, StyleSheet } from 'react-native';

const UserProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male'); // Default value

  const handleSaveProfile = () => {
    // Handle saving the profile data to the backend or local storage
    // You can use APIs or state management libraries for this.
    // After saving, navigate to the next screen.
    navigation.navigate('GoalSetting'); // Change to your screen name
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
        style={styles.input}
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default UserProfileScreen;
