import { View, Text } from 'react-native'
import React from 'react'

const TodayHeader = () => {
  return (
    <View className="mt-10">
        <Text className='text-white text-lg'>Today Gained</Text>
        <Text className='text-yellow1 font-bold text-5xl mt-1'>100</Text>
    </View>
  )
}

export default TodayHeader