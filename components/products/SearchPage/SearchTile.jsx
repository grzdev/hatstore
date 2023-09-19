import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './searchTile.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const SearchTile = ({item}) => {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={()=> navigation.navigate("ProductDetails", {item})}
      >
        <View
            style={styles.image}
        >
            <Image
             source={{uri: item.imageUrl}}
             style={styles.productImage}
            />
        </View>
        <View
            style={styles.textContainer}
        >
            <Text
                style={styles.productTitle}
            >
                {item.title}
            </Text>
            <Text
                style={styles.productPrice}
            >
                ₦{item.price}
            </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTile

