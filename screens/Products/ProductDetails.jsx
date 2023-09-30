import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './productDetails.style'
import { Fontisto, Ionicons, SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, SIZES } from '../../constants'
import blank from "../../assets/images/blank.png"
import { useRoute } from '@react-navigation/native'
import AddToCart from '../../hooks/addToCart'
import AsyncStorage from '@react-native-async-storage/async-storage'


const ProductDetails = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params;

  const [count, setCount] = useState(1)
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ favorites, setFavorites ] = useState(false)

  const increment = () =>{
    setCount(count + 1)
  }
  const decrement = () =>{
    if(count > 1){
      setCount(count - 1)
    }
  }
  
  useEffect(()=> {
    checkUser();
    checkFavorites();
  }, [])
  
  const checkUser = async () => {
    try {
      const id = await AsyncStorage.getItem("id");
      if(id !== null){
        setIsLoggedIn(true)
        console.log(true)
      }else{
        console.log(false)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handleBuy  = () => {
    if(!isLoggedIn){
      navigation.navigate('Login')
    }else{
      console.log("pressed")
    }
  }

  const handleCart  = () => {
    if(!isLoggedIn){
      navigation.navigate('Login')
    }else{
      AddToCart(item._id, count)
    }
  }

  const addToFavorites = async () => {
    const id = await AsyncStorage.getItem('id');
    const favoritesId = `favorites${JSON.parse(id)}`
    
    let productId = item._id;
    let productObj = {
      title: item.title,
      id: item._id,
      description: item.description,
      price: item.price,
      imageUrl: item.imageUrl,
    }

    try {
      const existingItem = await AsyncStorage.getItem(favoritesId);
      let favoritesObj = existingItem ? JSON.parse(existingItem) : {};

      if(favoritesObj[productId]){
        delete favoritesObj[productId];

        console.log("deleted");
        setFavorites(false)
      }else{
        favoritesObj[productId] = productObj
        console.log('added to fav')
        setFavorites(true)
      }

      await AsyncStorage.setItem(favoritesId, JSON.stringify(favoritesObj));
    } catch (error) {
      console.log(error)
    }
  }

  const handlePress  = () => {
    if(!isLoggedIn){
      navigation.navigate('Login')
    }else{
      addToFavorites()
    }
  }


const checkFavorites = async () => {
  const id = await AsyncStorage.getItem('id')
  const favoritesId = `favorites${JSON.parse(id)}`

  console.log(favoritesId);

  try {
    const favoritesObj = await AsyncStorage.getItem(favoritesId);
    if(favoritesObj !== null){
      const favorites = JSON.parse(favoritesObj);

      if(favorites[item._id]){
        console.log(item._id);
        setFavorites(true)
      }
    }
  } catch (error) {
    console.log(error);
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
            color={COLORS.lightWhite}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> handlePress()}
        >
          <Ionicons
            name={favorites ? 'heart' : 'heart-outline'}
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
            onPress={()=> handleBuy()}
            style={styles.cartBtn}
          >
            <Text
              style={styles.cartText}
            >
             buy now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=> handleCart()}
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

