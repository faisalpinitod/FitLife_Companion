import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProgressChart from '../components/ProgressChart'; // Import your custom chart component

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>

      {/* User Profile Summary */}
      <View style={styles.profileSummary}>
        <Text style={styles.profileSummaryText}>Welcome back, John!</Text>
        <Text style={styles.profileSummaryText}>Age: 30 | Gender: Male</Text>
      </View>

      {/* Progress Chart */}
      <View style={styles.chartContainer}>
        <ProgressChart />
      </View>

      {/* Active Plans */}
      <View style={styles.activePlans}>
        <Text style={styles.sectionHeading}>Active Plans</Text>
        {/* Render active plans here */}
      </View>

      {/* Recent Activities */}
      <View style={styles.recentActivities}>
        <Text style={styles.sectionHeading}>Recent Activities</Text>
        {/* Render recent activities here */}
      </View>
    </ScrollView>
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
  profileSummary: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  profileSummaryText: {
    fontSize: 16,
    marginBottom: 5,
  },
  chartContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  activePlans: {
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
  recentActivities: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
});

export default DashboardScreen;
