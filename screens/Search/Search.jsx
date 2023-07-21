import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather, Ionicons } from  "@expo/vector-icons"
import { COLORS, SIZES } from '../../constants/index';
import styles from './search.style';

const Search = () => {
  return (
    <SafeAreaView>
      <View
        style={styles.searchContainer}
      >
        <TouchableOpacity>
          <Ionicons
              name='camera-outline'
            size={24}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View
          style={styles.searchWrapper}
        >
          <TextInput
            value=''
            // onPressIn={()=>{}}
            placeholder="what are you looking for"
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
          >
            <Feather
            name='search'
              size={SIZES.xLarge}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
        </View>
      </View> 
    </SafeAreaView>
  )
}

export default Search