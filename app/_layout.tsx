import { Tabs } from 'expo-router';
import { title } from 'process';
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name='index'
            options={{
                title: "Home"
            }}
        />
        <Tabs.Screen
            name='weeklyMileage'
            options={{
                title: "Weekly Mileage"
            }}
        />
        <Tabs.Screen
            name='profile'
            options={{
                title: "Profile"
            }}
        />
    </Tabs>
  )
}

export default _layout