import { StyleSheet, TouchableOpacity, View, TextInput, FlatList, Image, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather, Ionicons } from  "@expo/vector-icons"
import { COLORS, SIZES } from '../../constants/index';
import styles from './search.style';
import { useState } from 'react';
import axios from 'axios';
import SearchTile from '../../components/products/SearchPage/SearchTile';

const Search = () => {
  const [ searchKey, setSearchKey ] = useState("")
  const [ searchResults, setsearchResults ] = useState([]);

  // https://drab-ruby-adder-vest.cyclic.app/api/products/search/${searchKey}
  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://drab-ruby-adder-vest.cyclic.app/api/products/search/${searchKey}`)
      setsearchResults(response.data)
    } catch (error) {
      console.log("Failed to grt products", error);
    }
  }
  
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
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="what are you looking for"
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={()=> handleSearch()}
          >
            <Feather
            name='search'
              size={SIZES.xLarge}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
        </View>
      </View> 

      {searchResults.length == 0 ? (
        <View
          style={{flex: 1}}
        >
          <Image
            source={require('../../assets/images/Pose23.png')}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({item})=> (<SearchTile item={item}/>)}
          style={{marginHorizontal: 12}}
        />
      )}
    </SafeAreaView>
  )
}

export default Search