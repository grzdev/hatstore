import { FlatList, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './productList2.style';
import { COLORS, SIZES } from '../../../constants';
import ArticlesCard2 from '../../articles/ArticlesCard2';
import { SafeAreaView } from 'react-native-safe-area-context';
import useFetchArticle from '../../../hooks/usefetchArticle';


const ProductList2 = () => {
    const {data, isLoading, error} = useFetchArticle(); 

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
     <View
            style={styles.container}
        >
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({item}) => (<ArticlesCard2 item={item} />)}
                contentContainerStyle={styles.container}
                ItemSeparatorComponent={()=> <View style={styles.seperator}/>}
            />
        </View>
  )
}

export default ProductList2
