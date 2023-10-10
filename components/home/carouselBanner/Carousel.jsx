import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box"
import { COLORS, SIZES } from "../../../constants/index"
import Banner1 from "../../../assets/images/hatBanner1.png"
import Banner2 from "../../../assets/images/hatBanner4.png"
import Banner3 from "../../../assets/images/hatBanner3.png"
import Banner4 from "../../../assets/images/banner4.png"
import Banner5 from "../../../assets/images/banner5.png"


const Carousel = () => {
  const slides = [
    Banner1,
    Banner2,
    Banner3,
    // Banner4,
    // Banner5,
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
        autoplayInterval={5000}
      />
    </View>
  )
}

export default Carousel

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