import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffc300",
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="API" color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="today-update"
        options={{
          title: 'Today',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="calendar" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
