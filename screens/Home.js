import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TodoView from "./TodoView.js";
import Details from "./Details.js";
import Screen3 from "./Screen3.js";



const Stack = createStackNavigator();

function Home () {

    return (
<Stack.Navigator>
      <Stack.Screen name="Todo" component={TodoView} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
      
    );
  }

export default Home;