import { ActivityIndicator, Text, View } from 'react-native'
import React, {useState} from 'react'
import styles from './cart.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from "@expo/vector-icons"
import { COLORS, SIZES } from '../../constants'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import fetchCart from '../../hooks/fetchCart'
import CartTitle from '../../components/carts/CartTitle'
import { Button } from '../../components'

const Cart = ({navigation}) => {
  const {data, loading, error, refetch} = fetchCart()

  const [selected, setSelected] = useState(null)
  const [select, setSelect] = useState(false)


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
          Cart
        </Text>
      </View>

      {loading ? 
        (<ActivityIndicator/>) 
        : 
        (<FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({item})=> <CartTitle item={item} onPress={()=>{setSelect(!select), setSelected(item)}} select={select}/>}
        />)
      }

      {select === false ? 
        (<View></View>) 
        : 
        (<Button
          title={"Checkout"}
          isValid={select}
          onPress={()=>{}}
        />)}
    </SafeAreaView>
  )
}

export default Cart
