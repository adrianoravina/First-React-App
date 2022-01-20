import React from "react";
import { StyleSheet, View, Text } from "react-native";

import RecipesScreen from "../screens/RecipesScreen.js"
import RecipeDetailScreen from "../screens/RecipeDetailScreen.js"
import NutritionScreen from "../screens/NutritionScreen.js"

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Discover = props => {
  return (


    <Stack.Navigator>

      <Stack.Screen
        name="RecipesScreen"
        component={RecipesScreen}
        options={{
          title: "World Recipes",
          headerShown: false
        }}
      />
      <Stack.Screen
        name="RecipeDetailScreen"
        component={RecipeDetailScreen}
        options={{
          title: "Recipe Details",
          gestureEnabled: true,
          headerShown: true
        }}
      />

      <Stack.Screen
        name="NutritionScreen"
        component={NutritionScreen}
        options={{
          title: "Nutritional Details",
          gestureEnabled: true,
          headerShown: true
        }}


      />
    </Stack.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  newTodo: {},
});

export default Discover;
