import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './articlePage.style'
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from '../../constants'
import { ProductList2 } from '../../components'

const ArticlePage = ({navigation}) => {
  return (
    <SafeAreaView
     style={styles.container}
    >
      <ScrollView
        style={{flex: 1}}
      >
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
               on sale
            </Text>
        </View>
        <ProductList2/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ArticlePage
