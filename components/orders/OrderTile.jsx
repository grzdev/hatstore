import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../carts/cartTile.style'
import { COLORS, SIZES } from '../../constants'

const OrderTile = ({item}) => {
  return (
    <TouchableOpacity
        style={styles.cartContainer(COLORS.secondary)}
    >
        <View
            style={styles.imageContainer}
        >
            <Image
                source={{uri: item.productId.imageUrl}}
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
                {item.productId.title}
            </Text>
            <Text
                style={styles.price}
                numberOfLines={1}
            >
                ₦{item.productId.price}
            </Text>
        </View>

        <View
            style={styles.orders}
        >
          <Text>
            {item.payment_status}
          </Text>
        </View>
    </TouchableOpacity>
  )
}

export default OrderTile
