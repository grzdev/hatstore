import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './banner.style';
import { COLORS, SIZES } from '../../../constants';
import { Feather, Ionicons } from  "@expo/vector-icons"
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Banner = () => {
  const navigation = useNavigation()

  return (
    <View>
      {/* Welcome Text */}
      <View 
        style={styles.container}
      >
        {/* <Text 
          style={styles.welcomeText}
        >
          stzhub
        </Text> */}
        {/* <Text 
          style={styles.welcomeText2}
        >
         home to everything stz related
        </Text> */}
      </View>

      {/* Search Box */}
      {/* <View
        style={styles.searchContainer}
      >
        <TouchableOpacity>
          <Feather
            name='search'
            size={24}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View
          style={styles.searchWrapper}
        >
          <TextInput
            value=''
            onPressIn={()=>navigation.navigate("Search")}
            placeholder="what are you looking for"
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
          >
            <Ionicons
              name='camera-outline'
              size={SIZES.xLarge}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
        </View>
      </View> */}

     
    </View>
  )
}

export default Banner