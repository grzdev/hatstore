import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { Cart, ProductDetails, TopPicks } from './screens';

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
  })

  const onLayoutRootView = useCallback(async() => {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded) {
    return null;
  }

  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Bottom Navigation'
        component={BottomTabNavigator}
        options= {{headerShown:false}}
      />
      <Stack.Screen
        name='Cart'
        component={Cart}
        options= {{headerShown:false}}
      />
      <Stack.Screen
        name='ProductDetails'
        component={ProductDetails}
        options= {{headerShown:false}}
      />
      <Stack.Screen
        name='ProductList'
        component={TopPicks}
        options= {{headerShown:false}}
      />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

