import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Button from '@/components/ui/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'

const UserSetupPage = () => {
  const [name, setname] = useState<string>('')
  const router = useRouter()
  const setUserName = () => {
    AsyncStorage.setItem('user_name', name).then(() => {
      setname('')
      router.push("/")
    })
  }
  return (
    <View className='h-full flex-1 flex flex-col justify-center bg-background p-3'>
      <StatusBar style='inverted'/>
      <View className="flex flex-row items-center">
        <Text className='text-blue-500 font-bold text-3xl'>Welcome</Text>
        <Text className='text-yellow1 font-bold text-3xl ml-2'>King</Text>
      </View>
      <Text className='text-white/50 mt-2'>It's time to increase your Aura</Text>
      <Text className='text-yellow1 font-medium mt-10'>What should we call you?</Text>
     
        <TextInput value={name} onChangeText={e=> setname(e)} className="border border-yellow1 rounded-md mt-2 placeholder:text-white p-3 text-yellow1 font-bold text-2xl" placeholder='Sigma Muz' placeholderTextColor={"#333"} cursorColor="#ffd60a"/>
        <View className='flex flex-row mt-3'>
          <Button disabled={name.length<3} onClick={setUserName}>Continue</Button>
        </View>
     
    </View>
  )
}

export default UserSetupPage