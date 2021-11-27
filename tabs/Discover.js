import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Recipes from "./../screens/Recipes.js"
import RecipeDetail from "./../screens/RecipeDetail.js"

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Discover = props => {
  return (
    <View style={styles.container}>
      <Stack.Navigator>

        <Stack.Screen
          name="Recipes"
          component={Recipes}
          options={{
            title: "World Recipes",
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
    flex: 1,
  },

  newTodo: {},
});

export default Discover;
