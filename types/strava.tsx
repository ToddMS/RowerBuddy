export interface Activity {
  id: number;
  name: string;
  start_date: string;
  distance: number;
  sport_type: string;
  moving_time: number;
}

  
  export interface WeeklyData {
    weekStart: string;
    weekEnd: string;
    mileage: number; // Total mileage
    rowingMileage: number; // Rowing-specific mileage
    cyclingMileage: number; // Cycling-specific mileage
    activities: Activity[];
  }
  
