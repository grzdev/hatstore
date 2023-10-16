import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Search, Articles, Profile } from '../screens'
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from "../constants/index"
import LoadingScreen from './LoadingScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 80,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }
}


const BottomTabNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <LoadingScreen />
      ) : (

        <Tab.Navigator
          screenOptions={screenOptions}
        >
          <Tab.Screen 
            name='Home'
            component={Home}
            options={{
              tabBarIcon: ({focused}) => {
                return <Ionicons name={focused ? "home" : "home-outline"} 
                size={24} color={focused ? COLORS.primary : COLORS.gray2} style={{marginTop: 5}}/>
              }
            }}
          />
          <Tab.Screen 
            name='Search'
            component={Search}
            options={{
              tabBarIcon: ({focused}) => {
                return <Ionicons name={"search-sharp"} 
                size={24} color={focused ? COLORS.primary : COLORS.gray2} style={{marginTop: 5}}/>
              }
            }}
          />
          {/* <Tab.Screen 
            name='Articles'
            component={Articles}
            options={{
              tabBarIcon: ({focused}) => {
                return <Ionicons name={focused ? "newspaper" : "newspaper-outline"} 
                size={24} color={focused ? COLORS.primary : COLORS.gray2} style={{marginTop: 5}}/>
              }
            }}
          /> */}
          <Tab.Screen 
            name='Profile'
            component={Profile}
            options={{
              tabBarIcon: ({focused}) => {
                return <Ionicons name={focused ? "person" : "person-outline"} 
                size={24} color={focused ? COLORS.primary : COLORS.gray2} style={{marginTop: 5}}/>
              }
            }}
          />
        </Tab.Navigator>
      )}
    </View>
  )
}

export default BottomTabNavigator