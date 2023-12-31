import { FlatList, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../../../hooks/useFetch'
import { COLORS, SIZES } from '../../../constants';
import styles from './productList.style';
import ProductCard from '../ProductCardView/ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductList = () => {
    const {data, isLoading, error} = useFetch(); 

    if(isLoading){
        return (
            <View
            style={styles.loadingRow}
            >
                <View
                    style={styles.loadingContainer}
                >
                <ActivityIndicator
                    size={SIZES.xxLarge}
                    color={COLORS.primary}
                />
                </View>

                <View
                    style={styles.loadingContainer}
                >
                <ActivityIndicator
                    size={SIZES.xxLarge}
                    color={COLORS.primary}
                />
                </View>
                
                <View
                    style={styles.loadingContainer}
                >
                <ActivityIndicator
                    size={SIZES.xxLarge}
                    color={COLORS.primary}
                />
                </View>
                
                <View
                    style={styles.loadingContainer}
                >
                <ActivityIndicator
                    size={SIZES.xxLarge}
                    color={COLORS.primary}
                />
                </View>

                <View
                    style={styles.loadingContainer}
                >
                <ActivityIndicator
                    size={SIZES.xxLarge}
                    color={COLORS.primary}
                />
                </View>

                <View
                    style={styles.loadingContainer}
                >
                <ActivityIndicator
                    size={SIZES.xxLarge}
                    color={COLORS.primary}
                />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({item}) => (<ProductCard item={item} />)}
                contentContainerStyle={styles.container}
                ItemSeparatorComponent={()=> <View style={styles.seperator}/>}
            />
        </SafeAreaView>
    )
  
}

export default ProductList

