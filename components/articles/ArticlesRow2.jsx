import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import useFetchArticle from '../../hooks/usefetchArticle'
import ArticlesCard2 from './ArticlesCard2'


const ArticlesRow2 = () => {
  const { data, isLoading, error } = useFetchArticle()

  return (
    <View
      style={{marginTop: SIZES.xSmall -22, padding: SIZES.small}}
    >
      { isLoading ? (
        <View
          style={styles.loadingRow}
        >
          <View
            style={styles.loadingContainer}
          >
            <ActivityIndicator
              size={SIZES.xLarge}
              color={COLORS.primary}
            />
          </View>
          <View
            style={styles.loadingContainer}
          >
            <ActivityIndicator
              size={SIZES.xLarge}
              color={COLORS.primary}
            />
          </View>
        </View>
      ) : error ? (
        <Text>{JSON.stringify(error, null, 2)}</Text>
      ) : (
        <FlatList
            data={data}
            keyExtractor={(item)=> item._id}
            renderItem={({ item }) => <ArticlesCard2 item={item}/>}
            horizontal
            contentContainerStyle={styles.rowBox}
          />
      )}
    </View>
  )
}

export default ArticlesRow2

const styles = StyleSheet.create({
  loadingRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  loadingContainer: {
      width: 160,
      height: 240,
      marginEnd: 22,
      borderRadius: SIZES.medium,
      backgroundColor: COLORS.secondary,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  rowBox: {
      marginTop: SIZES.xSmall -10,
      borderTopLeftRadius: 14, // 1rem equivalent in pixels
      borderTopRightRadius: 0,
      borderBottomRightRadius: 14, // 1rem equivalent in pixels
      borderBottomLeftRadius: 0,
  }
})