import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './topPicks.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from '../../constants'
import ProductList from '../../components/products/ProductList/ProductList'

const TopPicks = ({navigation}) => {
  return (
    <SafeAreaView
     style={styles.container}
    >
      {/* <ScrollView
        style={{flex: 1}}
      > */}
      <View
        style={styles.wrapper}
      >
        <View
          style={styles.upperRow}
        >
            <TouchableOpacity
            onPress={()=>navigation.goBack()}
            >
            <Ionicons
                name='chevron-back-circle'
                size={35}
                color={COLORS.lightWhite}
            />
            </TouchableOpacity>
            <Text
                style={styles.heading}
            >
                top picks
            </Text>
        </View>
          <ProductList/> 
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default TopPicks

