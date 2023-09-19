import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './articlePage.style'
import { Fontisto, Ionicons, SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import { COLORS, SIZES } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'

const ArticlePage = ({navigation}) => {
  // const navigation = useNavigation()

  const route = useRoute();
  const {item} = route.params;
  return (
    <SafeAreaView
      style={styles.container}
    >
      <ScrollView>

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
      </View>

      <View
        style={styles.content}
      >
        <Text
          style={styles.title}
        >
          {item.title}
        </Text>
        <View
          style={styles.secondRow}
        >
          <Text
            style={styles.date}
          >
             {item.dateMade}
          </Text>
          <View
            style={styles.minRead}
          >
            <Ionicons 
              name="book-outline"
              style={{color: COLORS.lightWhite, marginRight: 5, marginTop: 1, fontSize: 15}}  
            />
            <Text
              style={styles.minReadText}
            >
              {item.minRead}
            </Text>
          </View>
        </View>
        <View
          style={styles.imageUrl}
        >
        </View>
        <View
          style={styles.text}
        >
          <Text
            style={styles.subHeading}
          >
            {item.subheading1}
          </Text>
          <Text
            style={styles.p1}  
          >
            {item.body1}
          </Text>

          <Text
            style={styles.subHeading2}
          >
            {item.subheading2}
          </Text>
          <Text
            style={styles.p2}  
          >
            {item.body2}
          </Text>

          <Text
            style={styles.subHeading3}
          >
            {item.subheading3}
          </Text>
          <Text
            style={styles.p3}  
          > 
            {item.body3}
          </Text>

          <Text
            style={styles.subHeading4}
          >
            {item.subheading4}
          </Text>
          <Text
            style={styles.p4}  
          >
           {item.body4}
          </Text>

          <Text
            style={styles.subHeading5}
          >
            {item.subheading5}
          </Text>
          <Text
            style={styles.p5}  
          >
           {item.body5}
          </Text>
        </View>
      </View>
      
      <Text
        style={styles.credits}
      >
        written by {item.writtenBy}
      </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ArticlePage
