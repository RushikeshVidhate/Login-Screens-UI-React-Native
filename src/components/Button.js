import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../constants'

const Button = ({label, isPrimary, style, handleOnPress}) => {
    return (
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleOnPress}
        style={{
            paddingVertical: SIZES.base*1.5,
            backgroundColor: isPrimary ? COLORS.primary : COLORS.white,
            borderWidth: 1.5,
            borderColor: isPrimary ? COLORS.primary : COLORS.black,
            borderRadius: 5,
            width: '100%',
            alignItems: 'center',
            marginVertical: SIZES.base,
            ...style

        }}
        >
        <Text style={{
            color: isPrimary ? COLORS.white : COLORS.black,
            fontSize: 20,
            fontWeight: 'bold'
        }}>
            {label}
        </Text>   
        </TouchableOpacity>

    )
}

export default Button
