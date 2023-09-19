import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArticleCard from './ArticleCard'
import useFetchArticle from '../../hooks/usefetchArticle'

const ArticleRow = () => {
  const { data, isLoading, error } = useFetchArticle()

  return (
    <View
      style={{marginTop: 10}}
    >
      { isLoading ? (
        <View
          // style={styles.loadingRow}
        >
         
        </View>
      ) : error ? (
        <Text>{JSON.stringify(error, null, 2)}</Text>
      ) : (
        <FlatList
        data={data}
        keyExtractor={(item)=> item._id}
        renderItem={({ item }) => <ArticleCard item={item}/>}
        contentContainerStyle={styles.rowBox}
      />
      )}
    </View>
  )
}

export default ArticleRow

const styles = StyleSheet.create({
  rowBox: {
    gap: 25
  }
})