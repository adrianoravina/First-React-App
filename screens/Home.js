import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TodoView from "./TodoView.js";
import Details from "./Details.js";
import Discover from "./Discover.js";



const Stack = createStackNavigator();

function Home () {

    return (
<Stack.Navigator>
      <Stack.Screen name="Todo" component={TodoView} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Discover" component={Discover} />
    </Stack.Navigator>
      
    );
  }

export default Home;