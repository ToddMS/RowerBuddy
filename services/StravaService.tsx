import { Activity } from '../types/strava';
import config from '../config';

const STRAVA_BASE_URL = 'https://www.strava.com/api/v3';

export const fetchAccessToken = async (): Promise<string | null> => {
  try {
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: config.STRAVA_CLIENT_ID,
        client_secret: config.STRAVA_CLIENT_SECRET,
        refresh_token: config.STRAVA_REFRESH_TOKEN,
        grant_type: 'refresh_token',
      }),
    });

    const data = await response.json();
    return data.access_token || null;
  } catch (error) {
    console.error('Error fetching access token:', error);
    return null;
  }
};

export const fetchActivities = async (
  accessToken: string,
): Promise<Activity[]> => {
  try {
    const response = await fetch(
      `${STRAVA_BASE_URL}/athlete/activities?access_token=${accessToken}`
    );
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching activities:', error);
    return [];
  }
};
