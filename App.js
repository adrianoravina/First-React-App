import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./screens/LoginScreen.js";
import MainScreen from "./screens/MainScreen.js";


import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen}/>
        <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="Main" component={MainScreen}/>


      </Stack.Navigator>

      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

export default App;
