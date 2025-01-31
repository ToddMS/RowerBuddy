import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { WeeklyData } from '../../../types/strava';
import CopyButton from '../../buttons/CopyButton';

interface WeekSummaryProps extends Pick<WeeklyData, 'weekStart' | 'weekEnd' | 'mileage' | 'rowingMileage' | 'cyclingMileage' | 'activities'> {}

const WeekSummary: React.FC<WeekSummaryProps> = ({ mileage, rowingMileage, cyclingMileage, activities }) => {
  const textToCopy = `Total: ${(mileage / 1000).toFixed(2)} km\nRowing: ${(rowingMileage / 1000).toFixed(2)} km\nBike: ${(cyclingMileage / 1000).toFixed(2)} km`;

  return (
    <View style={styles.container}>
      <View style={styles.summaryBar}>
        <View style={styles.summaryTextContainer}>
          <Text style={styles.summaryText}>🏁 Total: {(mileage / 1000).toFixed(2)} km</Text>
          <Text style={styles.rowingText}>🚣 Rowing: {(rowingMileage / 1000).toFixed(2)} km</Text>
          <Text style={styles.cyclingText}>🚴 Bike: {(cyclingMileage / 1000).toFixed(2)} km</Text>
        </View>
        <CopyButton textToCopy={textToCopy} />
      </View>

      <FlatList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.activityItem}>
            <Text style={styles.activityName}>{item.name}</Text>
            <Text style={styles.activityStats}>
              {item.sport_type === 'Rowing' ? '🚣' : '🚴'} {(item.distance / 1000).toFixed(2)} km | {Math.floor(item.moving_time / 60)} min
            </Text>
          </View>
        )}
        ListFooterComponent={<View style={{ height: 20 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, borderBottomWidth: 1, borderColor: '#ccc', width: '100%' },

  summaryBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  summaryTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  summaryText: { fontSize: 14, fontWeight: 'bold', color: 'white' },
  rowingText: { fontSize: 14, color: '#00bfff' },
  cyclingText: { fontSize: 14, color: '#ffcc00' },

  listContainer: {
    flexGrow: 1,
  },

  activityItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  activityName: { fontSize: 14, fontWeight: 'bold' },
  activityStats: { fontSize: 14, color: '#666' },
});

export default WeekSummary;
