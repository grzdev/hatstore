import { FlatList, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../../../hooks/useFetch'
import { COLORS, SIZES } from '../../../constants';
import styles from './productList.style';
import ProductCard from '../ProductCardView/ProductCard';

const ProductList = () => {
    const {data, isLoading, error} = useFetch(); 

    if(isLoading){
        return (
            <View
                style={styles.loadingContainer}
            >
              <ActivityIndicator
                size={SIZES.xxLarge}
                color={COLORS.primary}
              />
            </View>
        )
    }

    return (
        <View
            style={styles.container}
        >
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({item}) => (<ProductCard item={item} />)}
                contentContainerStyle={styles.container}
                ItemSeparatorComponent={()=> <View style={styles.seperator}/>}
            />
        </View>
    )
  
}

export default ProductList

