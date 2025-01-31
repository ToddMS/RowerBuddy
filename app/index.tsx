import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../utils/theme';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.content}>
        <Image 
          source={require('../assets/images/rowing-logo.jpg')} 
          style={styles.logo} 
        />
        <Text style={styles.title}>🏅 Welcome to Rower Buddy</Text>
        <Text style={styles.description}>
          Track your rowing and cycling workouts, analyze weekly mileage, 
          and stay on top of your training progress. 🚣‍♂️ 🚴‍♂️
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: COLORS.background },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150, 
    marginBottom: 20, 
    resizeMode: 'contain',
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: "center",
    marginBottom: 15,
    color: COLORS.primary,
  },
  description: { 
    fontSize: 16, 
    textAlign: "center",
    color: COLORS.primary,
    lineHeight: 22,
    paddingHorizontal: 10,
  },
});

export default Home;
