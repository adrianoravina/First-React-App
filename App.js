import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "./screens/Home.js";
import Settings from "./drawers/Settings.js";



const Drawer = createDrawerNavigator();



function App () {

    return (
      <NavigationContainer>

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
        
      </Drawer.Navigator>
    
      </NavigationContainer>
      
    );
  }

export default App;

