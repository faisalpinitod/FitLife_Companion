// screens/DashboardScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Dashboard Screen</Text>
      <Button
        title="Go to User Profile"
        onPress={() => navigation.navigate('UserProfile')}
      />
    </View>
  );
};

export default DashboardScreen;
