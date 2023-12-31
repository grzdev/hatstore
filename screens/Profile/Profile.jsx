import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import styles from './profile.style'
import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { COLORS } from '../../constants'
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons, Ionicons } from "@expo/vector-icons"
import bgLogo from "../../assets/images/hatLogo3.png"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ScrollView } from 'react-native-gesture-handler'
import fetchUser from '../../hooks/fetchUser'

const Profile = ({navigation}) => {
  const [ userData, setUserData ] = useState(null)
  const [ userLogin, setUserLogin ] = useState(false)

  useEffect(()=>{
    checkExistingUser();
  }, [])

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem('id')
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if(currentUser != null){
        const parsedData = JSON.parse(currentUser)
        setUserData(parsedData)
        setUserLogin(true)
      }else{
        navigation.navigate("Profile")
      }
    } catch (error) {
      console.log("Error retrieving the data:", error)
    }
  }
 
  const userLogout = async () => {
    const id = await AsyncStorage.getItem('id')
    const useId = `user${JSON.parse(id)}`;

    try {
      await AsyncStorage.multiRemove([useId, "id"])
      navigation.replace("Bottom Navigation")
    } catch (error) {
      console.log("Error logging out:", error)
    }
  }

  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: ()=> console.log("cancel pressed")
        },
        {
          text: "Continue",
          onPress: ()=> userLogout()
        },
        {
          defaultIndex: 1
        }
      ]
    )
  }

  const cacheClear = async () => {
    const id = await AsyncStorage.getItem('id')
    const userId = `favorites${JSON.parse(id)}`;

    try {
      await AsyncStorage.removeItem(userId)
    } catch (error) {
      console.log("Error logging out:", error)
    }
  }

  const clearCache = () => {
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to delete saved data?",
      [
        {
          text: "Cancel",
          onPress: ()=> console.log("cancel clear cache")
        },
        {
          text: "Continue",
          onPress: ()=> cacheClear()
        },
        {
          defaultIndex: 1
        }
      ]
    )
  }

  
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.container}
      >
        <StatusBar
          backgroundColor= { COLORS.gray }
        />

        
        <View
          style={styles.profileContainer}
        >
          
          
          {/* <Text
            style={styles.name}
          >
            {userLogin === true ? "Dami" : "Please login into your account"}
          </Text> */}
          {
            userLogin === false ? (
              <View
                style={styles.profileContainer}
              >
                <Image
                  source={bgLogo}
                  style={styles.bgLogo}
                />
                <Text
                  style={styles.profileText}
                >
                  Caps and hats for everyone.
                </Text>
                <View
                  style={styles.btnBox}
                >

                  <TouchableOpacity
                    onPress={()=>navigation.navigate("Login")}
                  >
                    <View
                      style={styles.loginBtn}
                    >
                      <Text
                        style={styles.menuTex}
                      >
                        LOGIN
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                  onPress={()=>navigation.navigate("Register")}
                >
                  <View
                    style={styles.loginBtn2}
                  >
                    <Text
                      style={styles.menuText2}
                    >
                      SIGN UP
                    </Text>
                  </View>
                </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View
                // style={styles.loginBtn}
              >
                {/* <Text
                  style={styles.menuText}
                >
                  damilolaoyeniyi13@gmail.com
                </Text> */}
              </View>
            )
          }

          {
            userLogin === false ? (
              <View>

              </View>
            ) : (
              // <ScrollView>
                <View
                  style={styles.profileWrapper}
                >
                  <View
                    style={styles.upperRow}
                  >
                    <View
                      style={styles.upperRowTexts}
                    >
                      <Text
                        style={styles.title}
                      >
                        My Account
                      </Text>
                      
                    </View>
                    <Ionicons 
                      name='person'
                      style={styles.profileIcon}
                      size={23}
                    />
                  </View>
                  <View
                    style={styles.optionWrapper}
                  >
                    <TouchableOpacity
                      onPress={()=>navigation.navigate("Favorites")}
                    >
                      <View
                        style={styles.menuItem(0.5)}
                      >
                        <MaterialCommunityIcons
                          name='heart-outline'
                          size={24}
                          color= {COLORS.lightWhite}
                          style={{marginLeft: 10}}
                        />
                        <Text
                          style={styles.menuText}
                        >
                          Favorites
                        </Text>
                      </View>
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                      onPress={()=>navigation.navigate("Orders")}
                    >
                      <View
                        style={styles.menuItem(0.5)}
                      >
                        <MaterialCommunityIcons
                          name='truck-delivery'
                          size={26}
                          color= {COLORS.lightWhite}
                          style={{marginLeft: 10}}
                        />
                        <Text
                          style={styles.menuText}
                        >
                          Orders
                        </Text>
                      </View>
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity
                      onPress={()=>navigation.navigate("Cart")}
                    >
                      <View
                        style={styles.menuItem(0.5)}
                      >
                        <SimpleLineIcons
                          name='bag'
                          size={23}
                          color= {COLORS.lightWhite}
                          style={{marginLeft: 10}}
                        />
                        <Text
                          style={styles.menuText}
                        >
                          Cart
                        </Text>
                      </View>
                    </TouchableOpacity> */}

                    <TouchableOpacity
                      onPress={()=>clearCache()}
                    >
                      <View
                        style={styles.menuItem(0.5)}
                      >
                        <MaterialCommunityIcons
                          name='cached'
                          size={24}
                          color= {COLORS.lightWhite}
                          style={{marginLeft: 10}}
                        />
                        <Text
                          style={styles.menuText}
                        >
                          Clear cache
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={()=>logout()}
                    >
                      <View
                        style={styles.menuItem(0.5)}
                      >
                        <AntDesign
                        name='logout'
                          size={23}
                          color= {"#ff3c3c"}
                          style={{marginLeft: 10}}
                        />
                        <Text
                          style={styles.menuTextRed}
                        >
                        Logout
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              // </ScrollView>
            )
          }
        </View>
      </View>
    </View>
  )
}

export default Profile