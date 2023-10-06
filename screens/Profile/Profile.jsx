import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import styles from './profile.style'
import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { COLORS } from '../../constants'
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons"
import bgLogo from "../../assets/images/bgLogo.png"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ScrollView } from 'react-native-gesture-handler'

const Profile = ({navigation}) => {
  const [ userData, setUserData ] = useState(null)
  const [ userLogin, setUserLogin ] = useState(false)
 
<<<<<<< Updated upstream
=======
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

  const cacheClear = async () => {
    const id = await AsyncStorage.getItem('id')
    const userId = `favorites${JSON.parse(id)}`;

    try {
      await AsyncStorage.removeItem(userId)
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
          onPress: ()=> console.log("logout pressed")
        },
        {
          defaultIndex: 1
        }
      ]
    )
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

  const deleteUser = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          onPress: ()=> console.log("cancel delete")
        },
        {
          text: "Continue",
          onPress: ()=> console.log("account deleted")
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
          
          <Image
            source={bgLogo}
            style={styles.bgLogo}
          />
          <Text
            style={styles.profileText}
          >
            Home to everything stz related
          </Text>
          {/* <Text
            style={styles.name}
          >
            {userLogin === true ? "Dami" : "Please login into your account"}
          </Text> */}
          {
            userLogin === false ? (
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
                      style={styles.menuText}
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
            ) : (
              <View
                style={styles.loginBtn}
              >
                <Text
                  style={styles.menuText}
                >
                  damilolaoyeniyi13@gmail.com
                </Text>
              </View>
            )
          }

          {
            userLogin === false ? (
              <View>

              </View>
            ) : (

              <ScrollView
                style={styles.profileWrapper}
              >
                <TouchableOpacity
                  onPress={()=>navigation.navigate("Favorites")}
                >
                  <View
                    style={styles.menuItem(0.2)}
                  >
                    <MaterialCommunityIcons
                      name='heart-outline'
                      size={24}
                      color= {COLORS.primary}
                    />
                    <Text
                      style={styles.menuText}
                    >
                      Favorites
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={()=>navigation.navigate("Orders")}
                >
                  <View
                    style={styles.menuItem(0.2)}
                  >
                    <MaterialCommunityIcons
                      name='truck-delivery'
                      size={24}
                      color= {COLORS.primary}
                    />
                    <Text
                      style={styles.menuText}
                    >
                      Orders
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={()=>navigation.navigate("Cart")}
                >
                  <View
                    style={styles.menuItem(0.2)}
                  >
                    <SimpleLineIcons
                      name='bag'
                      size={24}
                      color= {COLORS.primary}
                    />
                    <Text
                      style={styles.menuText}
                    >
                      Cart
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={()=>clearCache()}
                >
                  <View
                    style={styles.menuItem(0.2)}
                  >
                    <MaterialCommunityIcons
                      name='cached'
                      size={24}
                      color= {COLORS.primary}
                    />
                    <Text
                      style={styles.menuText}
                    >
                      Clear Cache
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={()=>deleteUser()}
                >
                  <View
                    style={styles.menuItem(0.2)}
                  >
                    <AntDesign
                      name='deleteuser'
                      size={24}
                      color= {COLORS.primary}
                    />
                    <Text
                      style={styles.menuText}
                    >
                      Delete User
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={()=>logout()}
                >
                  <View
                    style={styles.menuItem(0.2)}
                  >
                    <View
                      style={styles.menuItem(0.5)}
                    >
                      <AntDesign
                       name='logout'
                        size={26}
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
              </ScrollView>
            )
          }
        </View>
      </View>
    </View>
  )
}

export default Profile
