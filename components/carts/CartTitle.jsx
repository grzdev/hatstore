import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './cartTile.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { COLORS } from '../../constants'

const CartTitle = ({item, onPress, select}) => {
  return (
    <TouchableOpacity
        style={styles.cartContainer(!select ? "#fff" : COLORS.secondary)}
        onPress={onPress}
    >
        <View
            style={styles.imageContainer}
        >
            <Image
                source={{uri: item.cartItem.imageUrl}}
                style={styles.image}
            />
        </View>

        <View
            style={styles.textContainer}
        >
            <Text
                numberOfLines={1}
                style={styles.cartTitle}
            >
                {item.cartItem.title}
            </Text>
            <Text
                style={styles.price}
                numberOfLines={1}
            >
                ₦{item.cartItem.price} * {item.quantity} 
            </Text>
        </View>

        <TouchableOpacity
            style={{paddingBottom: 10, paddingLeft: 75}}
            onPress={()=> {}}
        >
            <AntDesign
                name='delete'
                size={18}
                color={COLORS.red}
            />
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default CartTitle
