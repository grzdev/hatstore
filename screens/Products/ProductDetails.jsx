import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import styles from './productDetails.style'
import { Fontisto, Ionicons, SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, SIZES } from '../../constants'
import blank from "../../assets/images/blank.png"
import { useRoute } from '@react-navigation/native'

const ProductDetails = ({navigation}) => {
  const [count, setCount] = useState(1)
  const increment = () =>{
    setCount(count + 1)
  }
  const decrement = () =>{
    if(count > 1){
      setCount(count - 1)
    }
  }

  const route = useRoute();
  const {item} = route.params;

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.upperRow}
      >
        {/* Buttons */}
        <TouchableOpacity
          onPress={()=>navigation.goBack()}
        >
          <Ionicons
            name='chevron-back-circle'
            size={30}
            color={COLORS.lightWhite}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{}}
        >
          <Ionicons
            name='heart'
            size={30}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
      </View>

      {/* Product image */}
      <View
        style={styles.imageContainer}
      >
      <Image
        source={{uri: item.imageUrl}}
        style={styles.image}
      />
      </View>

      {/* Title Row */}
      <View
        style={styles.details}
      >
        <View
          style={styles.titleRow}
        >
          <Text
            style={styles.title}
          > 
            {item.title}
          </Text>
          <View
            style={styles.priceWrapper}
          >
            <Text
              style={styles.price}
            > 
              ₦{item.price}
            </Text>
          </View>
        </View>

        {/* Rating row */}
        <View
          style={styles.ratingRow}
        >
          <View
            style={styles.rating}
          >
            {[1,2,3,4,5].map((index)=>(
              <Ionicons
                key={index}
                name="star"
                size={21}
                color="gold"
              />
            ))}
            <Text
              style={styles.ratingText}
            >
              (4.9)
            </Text>
          </View>

          <View
            style={styles.rating}
          >
            <TouchableOpacity
              onPress={()=> increment()}
            >
              <SimpleLineIcons
                name='plus'
                size={20}
              />
            </TouchableOpacity>
            <Text
              style={styles.ratingText}
            >
              {count}
            </Text>
            <TouchableOpacity
              onPress={()=> decrement()}
            >
              <SimpleLineIcons
                name='minus'
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Description row */}
        <View
          style={styles.descriptionWrapper}
        >
          <Text
            style={styles.description}
          >
            Description
          </Text>
          <Text
            style={styles.descText}
          >
            {item.description}
          </Text>
        </View>
        
        <View style={styles.spacer} />

        {/* Location grid */}
        <View
          style={{ marginTop: SIZES.large}}
        >
          <View
            style={styles.location}
          >
            <View
              style={{flexDirection: "row"}}
            >
              <Ionicons
                name='location-outline'
                size={20}
              />
              <Text
                style={{alignSelf: "center", marginLeft: 4, marginRight: 4}}
              >
                Ilorin
              </Text>
            </View>

            <View
              style={{flexDirection: "row"}}
            >
              <MaterialCommunityIcons
                name='truck-delivery-outline'
                size={25}
              />
              <Text
                style={{alignSelf: "center", marginLeft: 10, marginRight: 10}}
              >
                Free Delivery
              </Text>
            </View>
          </View>
        </View>


        {/* Cart row */}
        <View
          style={styles.cartRow}
        >
          <TouchableOpacity
            onPress={()=>{}}
            style={styles.cartBtn}
          >
            <Text
              style={styles.cartText}
            >
             buy now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{}}
            style={styles.addCart}
          >
            <Fontisto
              name='shopping-bag'
              size={22}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductDetails

