import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box"
import { COLORS, SIZES } from "../../../constants/index"
import Banner6 from "../../../assets/images/banner6.png"
import Banner7 from "../../../assets/images/banner7.png"
import Banner8 from "../../../assets/images/banner8.png"


const Carousel2 = () => {
  const slides = [
    Banner6,
    Banner7,
    Banner8,
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

export default Carousel2

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    width: "93%",
    marginTop: 5,
    aspectRatio: 16 / 9,
    borderTopLeftRadius: 14, // 1rem equivalent in pixels
    borderTopRightRadius: 0,
    borderBottomRightRadius: 14, // 1rem equivalent in pixels
    borderBottomLeftRadius: 0,
  },
})