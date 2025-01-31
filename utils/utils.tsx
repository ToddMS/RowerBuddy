import { Activity, WeeklyData } from '../types/strava';

export const groupActivitiesByWeek = (activities: Activity[]): WeeklyData[] => {
  const grouped: { [weekStart: string]: Activity[] } = {};

  activities.forEach((activity) => {
    const date = new Date(activity.start_date);
    const dayOfWeek = date.getDay();
    const monday = new Date(date);
    monday.setDate(date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1));

    const weekStart = formatDate(monday);

    if (!grouped[weekStart]) {
      grouped[weekStart] = [];
    }

    const safeActivity = {
      ...activity,
      moving_time: activity.moving_time || 0,
    };

    grouped[weekStart].push(safeActivity);
  });

  return Object.entries(grouped).map(([weekStart, activities]) => {
    const monday = new Date(weekStart.split('/').reverse().join('-'));
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const weekEnd = formatDate(sunday);

    const rowingMileage = activities
      .filter((activity) => activity.sport_type === 'Rowing')
      .reduce((sum, activity) => sum + activity.distance, 0);

    const cyclingMileage = activities
      .filter((activity) => activity.sport_type === 'Ride')
      .reduce((sum, activity) => sum + activity.distance, 0);

    const mileage = rowingMileage + cyclingMileage;

    return { weekStart, weekEnd, mileage, rowingMileage, cyclingMileage, activities };
  });
};

export const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const metersToKilometers = (meters: number): number => {
  return meters / 1000;
};
