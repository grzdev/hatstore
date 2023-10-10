import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { COLORS } from '../constants';
import bgLogo from "../assets/images/hatLogo3.png"

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
        <Image
            source={bgLogo}
            style={styles.bgLogo}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
},
    bgLogo: {
        width: 180,
        height: 60,
        marginTop: -40
    }
});

export default LoadingScreen;
