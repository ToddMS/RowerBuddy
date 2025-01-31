import React from 'react';
import { View, StyleSheet } from 'react-native';
import WeekDataList from '../components/WeekDataList/WeekDataList';
import DiagonalStripes from '../components/DiagonalStripes';

const WeeklyMileage: React.FC = () => {
  return (
    <View style={styles.container}>
      <DiagonalStripes />
      <View style={styles.content}>
        <WeekDataList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    position: 'relative', 
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20, 
    paddingVertical: 30,
  }
});

export default WeeklyMileage;
