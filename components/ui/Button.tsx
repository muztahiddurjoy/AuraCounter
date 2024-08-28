import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonProps{
    disabled?: boolean,
    children: React.ReactNode
    onClick?: ()=>void
}

const Button = (props:ButtonProps) => {
  return (
    <TouchableOpacity className={`${props.disabled&&"opacity-50"} bg-yellow1 p-3 rounded-md`} activeOpacity={0.7} disabled={props.disabled} onPress={props.onClick}>
        <Text className="text-blue2 font-bold">{props.children}</Text>
    </TouchableOpacity>
  )
}

export default Button