import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { fetchAccessToken, fetchActivities } from '../../services/StravaService';
import WeekSummary from './WeekSummary/WeekSummary';
import { WeeklyData } from '../../types/strava';
import { groupActivitiesByWeek } from '../utils';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const WeekDataList: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [weeklyData, setWeeklyData] = useState<WeeklyData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const initialize = async () => {
      setLoading(true);
      try {
        const token = await fetchAccessToken();
        setAccessToken(token);
      } catch (error) {
        console.error('Error fetching access token', error);
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, []);

  useEffect(() => {
    if (accessToken) {
      loadWeeklyData();
    }
  }, [accessToken]);

  const loadWeeklyData = async () => {
    if (!accessToken) return;

    setLoading(true);
    try {
      const activities = await fetchActivities(accessToken);
      const newWeeks = groupActivitiesByWeek(activities);
      setWeeklyData(newWeeks);
    } catch (error) {
      console.error('Error fetching activities', error);
    } finally {
      setLoading(false);
    }
  };

  const goToPreviousWeek = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNextWeek = () => {
    if (currentIndex < weeklyData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {loading && <ActivityIndicator style={styles.loading} size="large" color="#888" />}

      {!loading && weeklyData.length > 0 && (
        <>
          <View style={styles.navContainer}>
            <TouchableOpacity onPress={goToPreviousWeek} disabled={currentIndex === 0} style={styles.navButton}>
              <Text style={[styles.navText, currentIndex === 0 && styles.disabled]}>←</Text>
            </TouchableOpacity>

            <Text style={styles.navTitle}>
              {weeklyData[currentIndex].weekStart} - {weeklyData[currentIndex].weekEnd}
            </Text>

            <TouchableOpacity onPress={goToNextWeek} disabled={currentIndex === weeklyData.length - 1} style={styles.navButton}>
              <Text style={[styles.navText, currentIndex === weeklyData.length - 1 && styles.disabled]}>→</Text>
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.weekContainer}>
              <WeekSummary {...weeklyData[currentIndex]} />
            </View>
          </ScrollView>
        </>
      )}

      {!loading && weeklyData.length === 0 && <Text style={styles.placeholder}>No data available</Text>}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  weekContainer: { width: '100%', alignItems: 'center', paddingVertical: 20 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  placeholder: { textAlign: 'center', marginTop: 20, color: '#666' },

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

  scrollViewContainer: {
    paddingBottom: 100, // Ensures that the last week's content isn't cut off
  },

  summaryBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#222',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  summaryText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  rowingText: { color: '#00bfff', fontSize: 16 },
  cyclingText: { color: '#ffcc00', fontSize: 16 },
});

export default WeekDataList;
