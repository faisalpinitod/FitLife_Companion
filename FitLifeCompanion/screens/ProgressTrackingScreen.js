import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressChart from '../components/ProgressChart'; // Replace with your actual chart component

const ProgressTrackingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Progress Tracking</Text>

      <View style={styles.chartContainer}>
        {/* Replace ProgressChart with your actual chart component */}
        <ProgressChart />
      </View>

      <View style={styles.notesContainer}>
        <Text style={styles.sectionHeading}>Progress Notes</Text>
        {/* Render progress notes or details here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chartContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  notesContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProgressTrackingScreen;
