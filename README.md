# RowerBuddy 🚣‍♂️

**RowerBuddy** is a mobile app designed for rowers and cyclists to track their workouts, analyze weekly mileage, and stay on top of their training progress. Built with **React Native, Expo, and Strava API**, the app integrates personalized rowing club colors and branding.

---

## 📌 Features
- 🏅 **Track Your Workouts** – Fetches your **rowing** and **cycling** activities from Strava.
- 📊 **Weekly Mileage Summary** – Displays your total distance covered each week.
- 📆 **View Past Workouts** – Scroll through previous weeks and compare performance.
- 🔔 **Push Notifications** – Get a weekly summary of your training stats.
- 👤 **User Profile** – Customize your profile, update settings, and track progress.
- 🎨 **Rowing Club Theme** – Styled with **Auriol Kensington Rowing Club** colors.

---

## 🛠️ Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/RowerBuddy.git
cd RowerBuddy
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the App**
```sh
expo start
```

Use **Expo Go** on your phone or an emulator to test the app.

---

## ⚙️ Configuration

### **Strava API Setup**
1. Create a **Strava API App** at [Strava Developers](https://developers.strava.com/).
2. Get your **Client ID** and **Client Secret**.
3. Store them in `services/StravaService.ts`:
```ts
export const STRAVA_CLIENT_ID = 'your-client-id';
export const STRAVA_CLIENT_SECRET = 'your-client-secret';
```

### **Notification Setup**
- The app requests **push notification permissions** upon launch.
- Scheduled weekly notifications summarize your rowing and cycling stats.

---

## 🎨 Customization

### **Theme Colors** (`utils/theme.ts`)
- **Primary (Green - Active Tabs, Buttons)**: `#084E29`
- **Accent (Pink - Inactive Tabs, Highlights)**: `#F3BFD5`

You can modify these values to match a different rowing club’s theme.

---

## 🚀 Future Enhancements
- 📌 **Workout Graphs** – Visualize progress with charts.
- 🎯 **Goal Setting** – Set and track rowing & cycling goals.

---

## 🤝 Contributing
PRs are welcome! Feel free to open an issue or submit a pull request.

1. **Fork the repo**
2. **Create a feature branch** (`git checkout -b feature-name`)
3. **Commit your changes** (`git commit -m "Added new feature"`)
4. **Push to GitHub** (`git push origin feature-name`)
5. **Open a Pull Request** 🚀

---

## 🌊 Row Hard, Train Harder! 🚣‍♂️🔥
Developed with ❤️ for the rowing community.

