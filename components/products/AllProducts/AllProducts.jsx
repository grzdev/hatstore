import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './allProducts.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductRow from '../ProductRows/ProductRow'
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

const AllProducts = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView
        style={{flex: 1}}
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
                All Products
            </Text>
        </View>
      <ScrollView
        style={{marginTop: 10}}
      >
      <View
        style={{flex: 1}}
      >

        <View
            style={styles.categoryDiv}
        >
            <View
                style={styles.firstDiv}
            >
                <Text
                    style={styles.category}
                >
                    Crushers
                </Text>
                <TouchableOpacity
                    onPress={()=> navigation.navigate("ProductList")}
                    style={styles.categoryPage}
                >
                    <Text
                        style={styles.seeAll}
                    >
                        See all
                        <Ionicons
                            name='chevron-forward-outline'
                            size={24}
                        />
                    </Text>
                </TouchableOpacity>
            </View>
            <ProductRow/>
        </View>
        <View
            style={styles.categoryDiv}
        >
            <View
                style={styles.secondDiv}
            >
                <Text
                    style={styles.category}
                >
                    Lighters
                </Text>
                <TouchableOpacity
                    onPress={()=> navigation.navigate("ProductList")}
                    style={styles.categoryPage}
                >
                    <Text
                        style={styles.seeAll}
                    >
                        See all
                        <Ionicons
                            name='chevron-forward-outline'
                            size={24}
                        />
                    </Text>
                </TouchableOpacity>
            </View>
            <ProductRow/>
        </View>
        <View
            style={styles.categoryDiv}
        >
            <View
                style={styles.secondDiv}
            >
                <Text
                    style={styles.category}
                >
                    Ash trays
                </Text>
                <TouchableOpacity
                    onPress={()=> navigation.navigate("ProductList")}
                    style={styles.categoryPage}
                >
                    <Text
                        style={styles.seeAll}
                    >
                        See all
                        <Ionicons
                            name='chevron-forward-outline'
                            size={24}
                        />
                    </Text>
                </TouchableOpacity>
            </View>
            <ProductRow/>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AllProducts
