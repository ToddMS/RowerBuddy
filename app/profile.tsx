import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import DiagonalStripes from '../components/DiagonalStripes';

const Profile = () => {
  return (
    <View style={styles.container}>
      <DiagonalStripes />
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, position: 'relative', backgroundColor: '#fff' },
});

export default Profile;
