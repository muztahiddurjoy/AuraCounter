import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import AsyncStorage from '@react-native-async-storage/async-storage';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      AsyncStorage.getItem('user_name').then((name) => {
        if(!name){
          router.push("/setup")
        }
      })
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="setup" options={{headerShown:false}}/>
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
