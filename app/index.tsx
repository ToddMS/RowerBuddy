import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Text style={styles.title}>Welcome to Rower Buddy</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  }
});

export default Home