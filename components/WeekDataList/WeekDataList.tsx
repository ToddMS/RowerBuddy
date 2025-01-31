import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { fetchAccessToken, fetchActivities } from '../../services/StravaService';
import { WeeklyData } from '../../types/strava';
import { groupActivitiesByWeek } from '../utils';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import WeekHeader from './WeekHeader';
import WeekSummary from './WeekSummary';
import ActivityList from './ActivityList';
import { requestNotificationPermissions, scheduleWeeklyNotification } from '../../services/NotificationService';

const WeekDataList: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [weeklyData, setWeeklyData] = useState<WeeklyData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    requestNotificationPermissions();

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

  useEffect(() => {
    if (weeklyData.length > 0) {
      const latestWeek = weeklyData[currentIndex];
      const textToCopy = `Total: ${(latestWeek.mileage / 1000).toFixed(2)} km\nRowing: ${(latestWeek.rowingMileage / 1000).toFixed(2)} km\nBike: ${(latestWeek.cyclingMileage / 1000).toFixed(2)} km`;
      scheduleWeeklyNotification(textToCopy);
    }
  }, [weeklyData, currentIndex]);

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
    if (currentIndex > 0) setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const goToNextWeek = () => {
    if (currentIndex < weeklyData.length - 1) setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {loading && <ActivityIndicator size="large" color="#888" />}
      {!loading && weeklyData.length > 0 && (
        <>
          <WeekHeader
            weekStart={weeklyData[currentIndex].weekStart}
            weekEnd={weeklyData[currentIndex].weekEnd}
            goToPreviousWeek={goToPreviousWeek}
            goToNextWeek={goToNextWeek}
            disablePrev={currentIndex === 0}
            disableNext={currentIndex === weeklyData.length - 1}
          />

          <FlatList
            data={[weeklyData[currentIndex]]}
            keyExtractor={(item) => item.weekStart.toString()}
            renderItem={({ item }) => (
              <View>
                <View style={styles.summaryContainer}>
                  <WeekSummary {...item} />
                </View>
                <ActivityList 
                  activities={item.activities.map(activity => ({
                    ...activity,
                    id: activity.id.toString()
                  }))} 
                />
              </View>
            )}
            contentContainerStyle={styles.flatListContainer}
          />
        </>
      )}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: 100,
  },
  summaryContainer: {
    marginTop: 10, 
  },
});

export default WeekDataList;
