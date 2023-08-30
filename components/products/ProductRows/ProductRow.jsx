 import { ActivityIndicator, FlatList, Text, View } from 'react-native'
 import React from 'react'
 import styles from './productRow.style'
import { COLORS, SIZES } from '../../../constants'
import ProductCard from '../ProductCardView/ProductCard'
import useFetch from '../../../hooks/useFetch'
 
 const ProductRow = () => {
  const  products = [1,2,3,4]
  const { data, isLoading, error } = useFetch()
   return (
    <View
      style={{marginTop: SIZES.xSmall -22, padding: SIZES.small}}
    >
      { isLoading ? (
        <View
          style={styles.loadingRow}
        >
          <View
            style={styles.loadingContainer}
          >
            <ActivityIndicator
              size={SIZES.xLarge}
              color={COLORS.primary}
            />
          </View>
          <View
            style={styles.loadingContainer}
          >
            <ActivityIndicator
              size={SIZES.xLarge}
              color={COLORS.primary}
            />
          </View>
        </View>
      ) : error ? (
        <Text>{JSON.stringify(error, null, 2)}</Text>
      ) : (
        <FlatList
            data={data}
            keyExtractor={(item)=> item._id}
            renderItem={({ item }) => <ProductCard item={item}/>}
            horizontal
            contentContainerStyle={styles.rowBox}
          />
      )}
    </View>
   )

 }
 
 export default ProductRow
 