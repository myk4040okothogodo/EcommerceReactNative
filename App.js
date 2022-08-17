import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import "react-native-reanimated";

import {
  Welcome,
  Walkthrough,
  AuthMain2,
  Home,
  ScanProduct
} from "./screens";

const Stack = createStackNavigator();

const App = () => {

    const[loaded] = useFonts ({
      BlackItalic : require("./assets/fonts/Poppins-BlackItalic.ttf"),
      Black       : require("./assets/fonts/Poppins-Black.ttf"),
      BoldItalic  : require("./assets/fonts/Poppins-BoldItalic.ttf"),
      Bold        : require("./assets/fonts/Poppins-Bold.ttf"),
      SemiBold        : require("./assets/fonts/Poppins-SemiBold.ttf"),
      ExtraBoldItalic: require("./assets/fonts/Poppins-ExtraBoldItalic.ttf"),
      ExtraBold   : require("./assets/fonts/Poppins-ExtraBold.ttf"),
      ExtraLightItalic: require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
      ExtraLight  : require("./assets/fonts/Poppins-ExtraLight.ttf"),
      LightItalic: require("./assets/fonts/Poppins-LightItalic.ttf"),
      MediumItalic: require("./assets/fonts/Poppins-MediumItalic.ttf"),
      Medium: require("./assets/fonts/Poppins-Medium.ttf"),
      Regular: require("./assets/fonts/Poppins-Regular.ttf"),
      SemiBoldItalic: require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
      ThinItalic :require("./assets/fonts/Poppins-ThinItalic.ttf"),
      Light: require("./assets/fonts/Poppins-Light.ttf"),
    });
    if (!loaded) return null;

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Welcome'}
            >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Walkthrough" component={Walkthrough} />
                <Stack.Screen name="AuthMain2" component={AuthMain2} />
                <Stack.Screen name="Home" component={Home}  />
                <Stack.Screen name="ScanProduct" component={ScanProduct}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
