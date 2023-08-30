import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const ArticleCard = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={()=> navigation.navigate("ArticlePage")}
    >
       <View
          style={styles.productCard}
        >
          <View
            style={styles.firstDiv}
          >
            <Text
              style={styles.articleText}
            >
              The rising tide of naija music
            </Text>
            <View
              style={styles.category}
            >
              <Text
                style={styles.categoryText}
              >
                Music
              </Text>
            </View>
          </View>

          <View
            style={styles.imageUrl}
          >
          </View>
        </View>  
    </TouchableOpacity>
  )
}

export default ArticleCard

const styles = StyleSheet.create({
    productCard: {
        width: 330,
        height: 170,
        backgroundColor: "#28470c",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row"
    },
    imageUrl: {
        width: 120,
        height: 120,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        
    },
    articleText: {
        color: COLORS.lightWhite,
        width: 140,
        fontSize: SIZES.large + 3,
        fontWeight: 600,
        marginTop: 10,
        // textAlign: "center"
    },
    category: {
      width: 70,
      height: 20,
      backgroundColor: "#02b148",
      borderRadius: 20,
      marginTop: 20
    },
    firstDiv: {
      marginRight: 10
    },
    categoryText: {
      color: "white",
      alignSelf: "center",
      fontFamily: "bold",
      marginTop: 1
    }
})