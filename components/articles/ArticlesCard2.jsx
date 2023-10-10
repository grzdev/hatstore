import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import { COLORS, SIZES } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const ArticlesCard2 = ({item}) => {
    const navigation = useNavigation()

  return (
    <TouchableOpacity
    onPress={()=> navigation.navigate("ProductDetails", {item})}
  >
    <View
      style={styles.container}
    >
      <View
          style={styles.imageContainer}
      >
       <Image
          source={{
            uri: item.imageUrl,
          }}
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
            {item.title}
          </Text>
          <Text
              style={styles.price}
              numberOfLines={1}
          >
            ₦{item.price}
          </Text>
      </View>
    </View>
  </TouchableOpacity>
  )
}

export default ArticlesCard2

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 240,
        marginEnd: 22,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary
    },
    imageContainer: {
        flex: 1,
        width: 145,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow: "hidden",
        backgroundColor: "#d0aea2",
        justifyContent: "center",
        alignItems: "center"
    },
    image:{
        aspectRatio: 1,
        // resizeMode: "cover"
        width: 90,
    },
    details:{
        padding: SIZES.small
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.large,
        marginBottom: 2
    },
    price: {
        fontFamily: "bold",
        fontSize: SIZES.medium,
    },
    addBtn:{
        position: "absolute",
        bottom: SIZES.xSmall,
        right: SIZES.xSmall
    }
})