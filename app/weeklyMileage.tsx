import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WeekDataList from '../components/WeekDataList/WeekDataList';


const WeeklyMileage: React.FC = () => {
  return (
    <View style={styles.container}>
      <WeekDataList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 16, marginBottom: 12, textAlign: 'center', color: '#333' },
});

export default WeeklyMileage;
