import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const TrainerListScreen = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/trainers');
      setTrainers(response.data);
    } catch (error) {
      console.error('Error fetching trainers:', error);
    }
  };

  return (
    <View>
      <Text>Trainer List</Text>
      <FlatList
        data={trainers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Specialization: {item.specialization}</Text>
            {/* Display other trainer details as needed */}
          </View>
        )}
      />
    </View>
  );
};

export default TrainerListScreen;
