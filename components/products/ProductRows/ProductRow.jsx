 import { FlatList, Text, View } from 'react-native'
 import React from 'react'
 import styles from './productRow.style'
import { SIZES } from '../../../constants'
import ProductCard from '../ProductCardView/ProductCard'
 
 const ProductRow = () => {
  const  products = [1,2,3,4]
   return (
     <View
      style={{marginTop: SIZES.medium}}
     >
      <FlatList
        data={products}
        renderItem={({item}) => (<ProductCard/>)}
        horizontal
        contentContainerStyle={{columnGap: SIZES.medium}}
      />
     </View>
   )
 }
 
 export default ProductRow
 