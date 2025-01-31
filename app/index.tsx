import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import DiagonalStripes from '../components/DiagonalStripes';

const Home = () => {
  return (
    <View style={styles.container}>
      <DiagonalStripes />
      <Text style={styles.title}>Welcome to Rower Buddy</Text>
      <Text style={styles.description}>
        Rower Buddy helps you track your rowing and cycling workouts, analyze weekly mileage, 
        and stay on top of your training progress.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    position: 'relative', 
    backgroundColor: '#fff', 
    padding: 20, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: "center",
    marginBottom: 15,
    color: "#333"
  },
  description: { 
    fontSize: 16, 
    textAlign: "center",
    color: "#666",
    lineHeight: 22,
    paddingHorizontal: 10
  }
});

export default Home;
