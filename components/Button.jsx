import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

const Button = ({title, onPress, isValid, loader}) => {
  return (
    <TouchableOpacity
        onPress={onPress}
        style={styles.btnStyle(isValid === false ? "#9e4b2d" : "#ff9975")}
    >
        {
            loader === false ? (
                <Text
                    style={styles.btnText}
                >
                    {title}
                </Text>
            ) : (
                <ActivityIndicator/>
            )
        }
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btnText: {
        fontFamily: "bold",
        color: COLORS.lightWhite,
        fontSize: 18
    },
    btnStyle: (backgroundColor) => ({
        height: 50,
        width: "100%",
        marginVertical: 20,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
    })
})