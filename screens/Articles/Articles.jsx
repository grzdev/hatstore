import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './articles.style'
import artcileLogo from "../../assets/images/artcile.png"
import ArticleRow from '../../components/articles/ArticleRow'


const Articles = () => {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View
        style={styles.artcileDiv}
      >
        <Image
          source={artcileLogo}
          style={styles.artcileLogo}
        />

       <ArticleRow/>
      </View>
    </SafeAreaView>
  )
}

export default Articles
