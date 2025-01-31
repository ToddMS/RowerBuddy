import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeekDataList from '../components/WeekDataList/WeekDataList';
import { COLORS } from '../utils/theme';

const WeeklyMileage: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.content}>
        <WeekDataList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: COLORS.background },
  content: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
});

export default WeeklyMileage;
