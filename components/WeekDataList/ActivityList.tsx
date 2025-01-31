import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface ActivityListProps {
  activities: { id: string; name: string; sport_type: string; distance: number; moving_time: number }[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <FlatList
      data={activities}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.activityItem}>
          <Text style={styles.activityName}>{item.name}</Text>
          <Text style={styles.activityStats}>{item.sport_type === 'Rowing' ? '🚣' : '🚴'} {(item.distance / 1000).toFixed(2)} km | {Math.floor(item.moving_time / 60)} min</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  activityItem: { padding: 10, marginVertical: 5, backgroundColor: '#f9f9f9', borderRadius: 8 },
  activityName: { fontSize: 14, fontWeight: 'bold' },
  activityStats: { fontSize: 14, color: '#666' },
});

export default ActivityList;
