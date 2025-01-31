import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface WeekHeaderProps {
  weekStart: string;
  weekEnd: string;
  goToPreviousWeek: () => void;
  goToNextWeek: () => void;
  disablePrev: boolean;
  disableNext: boolean;
}

const WeekHeader: React.FC<WeekHeaderProps> = ({ weekStart, weekEnd, goToPreviousWeek, goToNextWeek, disablePrev, disableNext }) => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={goToPreviousWeek} disabled={disablePrev} style={styles.navButton}>
        <Text style={[styles.navText, disablePrev && styles.disabled]}>←</Text>
      </TouchableOpacity>

      <Text style={styles.navTitle}>{weekStart} - {weekEnd}</Text>

      <TouchableOpacity onPress={goToNextWeek} disabled={disableNext} style={styles.navButton}>
        <Text style={[styles.navText, disableNext && styles.disabled]}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#222',
  },
  navButton: {
    paddingHorizontal: 20,
  },
  navText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  disabled: {
    color: '#555',
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WeekHeader;
