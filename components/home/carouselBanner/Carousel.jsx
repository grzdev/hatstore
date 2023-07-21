import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box"
import { COLORS, SIZES } from "../../../constants/index"

const Carousel = () => {
  const slides = [
    "https://i.pinimg.com/236x/6e/ed/35/6eed354e6b76c028e6206a66c0e62014.jpg",
    "https://i.pinimg.com/236x/6e/ed/35/6eed354e6b76c028e6206a66c0e62014.jpg",
    "https://i.pinimg.com/236x/6e/ed/35/6eed354e6b76c028e6206a66c0e62014.jpg",
  ]

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{borderRadius: 15, width: "93%", marginTop: 15}}
        autoplay
        circleLoop
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center"
  }
})