import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/100' }}
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
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    padding: 20 
  },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 15 
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  email: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 20 
  },
  settingsContainer: { 
    width: '100%', 
    marginTop: 10 
  },
  settingItem: { 
    padding: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd' 
  },
  settingText: { 
    fontSize: 16, 
    color: '#007BFF' 
  }
});

export default Profile;
