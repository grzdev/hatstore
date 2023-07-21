import { TouchableOpacity, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import styles from './home.style'
import { Ionicons, MaterialIcons  } from "@expo/vector-icons"
import { Banner } from '../../components'
import { COLORS } from '../../constants'
import Carousel from '../../components/home/carouselBanner/Carousel'
import Headings from '../../components/home/headings/Headings'
import ProductRow from '../../components/products/ProductRows/ProductRow'

const Home = () => {
  return (
    <SafeAreaView>
      {/* Navbar */}
      <View 
        style={styles.appBarWrapper}
      >
        <View 
          style={styles.appBar}
        >
          <Ionicons 
            name='leaf' 
            size={24}
            style={{color: COLORS.primary}}
          />

          <View 
            style={{alignItems: "flex-end"}}
          >
            <View 
              style={styles.cartCount}
            >
              <Text 
                style={styles.cartNumber}
              >
                3
              </Text>
            </View>
            <TouchableOpacity>
              <MaterialIcons 
                name='shopping-bag' 
                size={24}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Main Section */}
      <ScrollView>
        <Banner/>
        <Carousel/>
        <Headings/>
        <ProductRow/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

