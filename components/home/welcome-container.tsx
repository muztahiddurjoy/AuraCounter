import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useLayoutEffect, useState } from 'react'
import { Text, View } from 'react-native'

const WelcomeContainer = () => {
  const [name, setname] = useState("Gigachad")
  useLayoutEffect(() => {
    AsyncStorage.getItem('user_name').then((name_res)=>{
      if(name_res){
        setname(name_res)
      }
    })
  }, [])
  return (
    <View>
      <Text className='text-xl font-medium text-white'>Welcome</Text>
      <Text className='text-3xl font-bold text-yellow1'>{name}</Text>
    </View>
  )
}

export default WelcomeContainer