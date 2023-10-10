import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './cartTile.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { COLORS } from '../../constants'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CartTitle = ({item, onPress, select}) => {

    // const deleteCart = async (product) => {
    //     const id = await AsyncStorage.getItem('id');
    //     const cartId = `cart${JSON.parse(id)}`
        
    //     let productId = product;
  
    //     try {
    //       const existingItem = await AsyncStorage.getItem(cartId);
    //       let cartObj = existingItem ? JSON.parse(existingItem) : {};
  
    //       if(cartObj[productId]){
    //         delete cartObj[productId];
            
    //         checkFavorites()
    //       }
  
    //       await AsyncStorage.setItem(cartId, JSON.stringify(cartObj));
    //     } catch (error) {
    //       console.log(error)
    //     }
    // }

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
            // onPress={()=> deleteCart()}
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
