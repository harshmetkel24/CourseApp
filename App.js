import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_900Black } from "@expo-google-fonts/nunito";

import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import UserData from "./src/screens/UserData";

export default function App() {
  let [fontsLoaded] = useFonts({
    regular: JosefinSans_400Regular,
    medium: JosefinSans_600SemiBold,
    bold: JosefinSans_700Bold,
    extraBold: Nunito_900Black,
  });
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleStyle: {
            fontSize: 30,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={fontsLoaded ? Home : AppLoading}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Student Details" component={UserData} />
        <Stack.Screen name="Courses" component={Course} />
        <Stack.Screen name="Contact Us" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
