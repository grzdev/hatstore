import { TouchableOpacity, Image, Text, View } from 'react-native'
import React from 'react'
import styles from './productCard.style'
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

const ProductCard = () => {
    const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={()=> navigation.navigate("ProductDetails")}
    >
      <View
        style={styles.container}
      >
        <View
            style={styles.imageContainer}
        >
         <Image
            source={{uri: "https://i.pinimg.com/236x/6e/ed/35/6eed354e6b76c028e6206a66c0e62014.jpg"}}
            style={styles.image}
         />
        </View>
        <View
            style={styles.details}
        >
            <Text
                style={styles.title}
                numberOfLines={1}
            >
                Crusher
            </Text>
            <Text
                style={styles.price}
                numberOfLines={1}
            >
                $40
            </Text>
        </View>
        <TouchableOpacity
            style={styles.addBtn}
        >
            <Ionicons
                name='add-circle'
                size={35}
                color={COLORS.primary}
            />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCard