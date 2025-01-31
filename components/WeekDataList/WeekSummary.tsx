import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CopyButton from '../buttons/CopyButton';

interface WeekSummaryProps {
  mileage: number;
  rowingMileage: number;
  cyclingMileage: number;
}

const WeekSummary: React.FC<WeekSummaryProps> = ({ mileage, rowingMileage, cyclingMileage }) => {
  const textToCopy = `Total: ${(mileage / 1000).toFixed(2)} km\nRowing: ${(rowingMileage / 1000).toFixed(2)} km\nBike: ${(cyclingMileage / 1000).toFixed(2)} km`;

  return (
    <View style={styles.summaryBar}>
      <View>
        <Text style={styles.summaryText}>🏁 Total: {(mileage / 1000).toFixed(2)} km</Text>
        <Text style={styles.rowingText}>🚣 Rowing: {(rowingMileage / 1000).toFixed(2)} km</Text>
        <Text style={styles.cyclingText}>🚴 Bike: {(cyclingMileage / 1000).toFixed(2)} km</Text>
      </View>
      <CopyButton textToCopy={textToCopy} />
    </View>
  );
};

const styles = StyleSheet.create({
  summaryBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#222',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  summaryText: { fontSize: 14, fontWeight: 'bold', color: 'white' },
  rowingText: { fontSize: 14, color: '#00bfff' },
  cyclingText: { fontSize: 14, color: '#ffcc00' },
});

export default WeekSummary;
