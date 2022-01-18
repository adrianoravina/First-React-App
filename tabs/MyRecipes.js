import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";


import RecipesScreen from "../screens/RecipesScreen.js"
import RecipeDetailScreen from "../screens/RecipeDetailScreen.js"

const Stack = createStackNavigator();


const MyRecipes = props => {

    return (
        
      <Stack.Navigator>

        <Stack.Screen
          name="MyRecipesScreen"
          component={RecipesScreen}
          options={{
            title: "My Recipes",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="MyRecipeDetailScreen"
          component={RecipeDetailScreen}
          options={{
            title: "My Recipes Deatils",
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
  
    newTodo: {
  
    }
  });

export default MyRecipes;