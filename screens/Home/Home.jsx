import { TouchableOpacity, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import styles from './home.style'
import { Ionicons, MaterialIcons  } from "@expo/vector-icons"
import { Banner } from '../../components'
import { COLORS, SIZES } from '../../constants'
import Carousel from '../../components/home/carouselBanner/Carousel'
import Headings from '../../components/home/headings/Headings'
import ProductRow from '../../components/products/ProductRows/ProductRow'
import Carousel2 from '../../components/home/carouselBanner2/Carousel2'
import logo from "../../assets/images/hatLogo2.png"
import { useNavigation } from '@react-navigation/native'
import Headings2 from '../../components/home/headings/Headings2'
import ArticlesRow2 from '../../components/articles/ArticlesRow2'
import ArticleBanner from '../../components/home/carouselBanner/ArticleBanner'

const Home = () => {
  const navigation = useNavigation()
  
  return (
    <SafeAreaView>
      {/* Navbar */}
      <View 
        style={styles.appBarWrapper}
      >
        <View 
          style={styles.appBar}
        >
          <View 
            style={{alignItems: "flex-end"}}
          >
            <TouchableOpacity
              onPress={()=> navigation.navigate("Favorites")}
            >
              <Ionicons
                name='heart' 
                size={25}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={logo}
            style={styles.logo}
          />

          <TouchableOpacity
            onPress={()=> navigation.navigate("Search")}
          >
            <Ionicons 
              name='search' 
              size={24}
              style={{color: COLORS.primary}}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Section */}
      <ScrollView>
        <Banner/>
        <Carousel/>
        <Headings/>
        <ProductRow/>
        <ArticleBanner/>
        <Headings2/>
        <ArticlesRow2/>
        <View
          style={{marginBottom: 100}}
        >
        <Carousel2/>
        </View>
        <View
          style={{marginBottom: 90}}
        >
          {/* <Carousel/> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

