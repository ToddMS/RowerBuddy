import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../utils/theme';

const Profile = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.content}>
        <Image 
          source={require('../assets/images/profile-pic.jpg')} 
          style={styles.avatar} 
        />

        <Text style={styles.name}>Todd Sandler</Text>
        <Text style={styles.email}>toddsandlerwasd@gmail.com</Text>

        <View style={styles.settingsContainer}>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.settingItem, styles.logoutButton]}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: COLORS.background },
  content: { flex: 1, paddingHorizontal: 20, paddingTop: 20, alignItems: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  name: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary },
  email: { fontSize: 16, color: COLORS.primary, marginBottom: 20 },
  settingsContainer: { width: '100%', marginTop: 10 },
  settingItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: COLORS.primary },
  settingText: { fontSize: 16, color: COLORS.primary },
  logoutButton: { backgroundColor: COLORS.primary, marginTop: 10, borderRadius: 8 },
  logoutText: { fontSize: 16, color: "#fff", textAlign: "center", padding: 10 },
});

export default Profile;
