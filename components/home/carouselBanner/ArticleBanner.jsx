import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box"
import { COLORS, SIZES } from "../../../constants/index"
import ArticleBannner from "../../../assets/images/hatBanner5.png"

const ArticleBanner = () => {
    const slides = [
        ArticleBannner,
    ]

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={styles.image}
        autoplay
        circleLoop
        autoplayInterval={4000}
      />
    </View>
  )
}

export default ArticleBanner

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center"
      },
      image: {
        width: "93%",
        marginTop: 15,
        aspectRatio: 16 / 9,
        borderTopLeftRadius: 14, // 1rem equivalent in pixels
        borderTopRightRadius: 0,
        borderBottomRightRadius: 14, // 1rem equivalent in pixels
        borderBottomLeftRadius: 0,
      },
})