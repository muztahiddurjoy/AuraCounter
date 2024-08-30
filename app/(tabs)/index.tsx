import WelcomeContainer from '@/components/home/welcome-container';
import React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className='h-full bg-background p-5'>
      <WelcomeContainer/>
    </View>
  );
}
