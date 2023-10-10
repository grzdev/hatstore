import { View, Text } from 'react-native'
import React from 'react'
import styles from './heading.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

const Headings2 = () => {
  const navigation = useNavigation()

  return (
    <View 
      style={styles.container}
    >
      <View 
        style={styles.header}
      >
        <Text
            style={styles.headerTitle}
        >
          on sale
        </Text>
        <TouchableOpacity
          onPress={()=> navigation.navigate("ArticlePage")}
        >
            <Ionicons
                name='ios-grid'
                size={24}
                color={COLORS.primary}
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings2