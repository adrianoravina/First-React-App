import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";


import Recipes from "./../screens/Recipes.js"
import RecipeDetail from "./../screens/RecipeDetail.js"

const Stack = createStackNavigator();


const MyRecipes = props => {


    return (
        <View style={styles.container}>
      
      <Stack.Navigator>

        <Stack.Screen
          name="Recipes"
          component={Recipes}
          options={{
            title: "My Recipes",
          }}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetail}
          options={{
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
       </View>
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