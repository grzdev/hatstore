import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './orders.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from "@expo/vector-icons"
import { COLORS, SIZES } from '../../constants'
import { OrderTile } from '../../components'
import fetchOrder from '../../hooks/fetchOrder'
 

const Orders = ({navigation}) => {
  const {data, loading, error, refetch} = fetchOrder()

  return (
    <SafeAreaView
     style={styles.container}
    >
      <View
        style={styles.titleRow}
      >
        <TouchableOpacity
          onPress={()=> navigation.goBack()}
        >
          <Ionicons
            name='chevron-back-circle'
            size={30}
            color={COLORS.primary}
          />
        </TouchableOpacity>

        <Text
          style={styles.title}
        >
          Orders
        </Text>
      </View>

      
      {loading ? 
        (<ActivityIndicator/>) 
        : 
        (<FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({item})=> <OrderTile item={item} />}
        />)
      }

    </SafeAreaView>
  )
}

export default Orders

