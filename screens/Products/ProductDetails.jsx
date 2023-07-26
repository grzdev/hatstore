import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import styles from './productDetails.style'
import { Fontisto, Ionicons, SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, SIZES } from '../../constants'
import blank from "../../assets/images/blank.png"

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
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{}}
        >
          <Ionicons
            name='heart'
            size={30}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>

      {/* Product image */}
      <Image
        source={{uri:"https://i.pinimg.com/236x/6e/ed/35/6eed354e6b76c028e6206a66c0e62014.jpg"}}
        style={styles.image}
      />

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
            Lighter
          </Text>
          <View
            style={styles.priceWrapper}
          >
            <Text
              style={styles.price}
            > 
              $400
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
            A cool ass lighter that can burn your house down. 
            A cool ass lighter that can burn your house down.
            A cool ass lighter that can burn your house down.
            A cool ass lighter that can burn your house down.
            A cool ass lighter that can burn your house down.
            A cool ass lighter that can burn your house down.
          </Text>
        </View>

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
                size={30}
              />
              <Text
                style={{alignSelf: "center"}}
              >
                Ilorin
              </Text>
            </View>

            <View
              style={{flexDirection: "row"}}
            >
              <MaterialCommunityIcons
                name='truck-delivery-outline'
                size={30}
              />
              <Text
                style={{alignSelf: "center"}}
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

