import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArticleCard from './ArticleCard'

const ArticleRow = () => {
  return (
    <View>
      <ArticleCard/>
      {/* <FlatList
        data={}
        keyExtractor
      /> */}
    </View>
  )
}

export default ArticleRow

const styles = StyleSheet.create({})