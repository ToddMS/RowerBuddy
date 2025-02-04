import * as Notifications from 'expo-notifications';
import { SchedulableTriggerInputTypes } from 'expo-notifications';

export const requestNotificationPermissions = async () => {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') {
    await Notifications.requestPermissionsAsync();
  }
};

export const cancelAllNotifications = async () => { 
  await Notifications.cancelAllScheduledNotificationsAsync();
};

export const scheduleWeeklyNotification = async (textToCopy: string) => {
  await cancelAllNotifications(); 

  const now = new Date();
  let nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7) + 1);
  nextSunday.setHours(20, 0, 0, 0);

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Weekly Summary 📊",
      body: textToCopy,
    },
    trigger: {
      type: SchedulableTriggerInputTypes.DATE,
      date: nextSunday,
    },
  });
};
