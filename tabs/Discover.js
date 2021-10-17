import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Recipes from "./screens/Recipes.js"
import RecipeDetail from "./screens/RecipeDetail.js"

import { createStackNavigator } from "@react-navigation/stack";

const DiscoverStack = createStackNavigator();

function Discover() {
  return (
    <View style={styles.container}>
      <DiscoverStack.Navigator
        initialRouteName="Recipes"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
        }}
      >
        <DiscoverStack.Screen
          name="Recipes"
          component={Recipes}
          options={{
            title: "World Recipes",
          }}
        />
        <DiscoverStack.Screen
          name="RecipeDetail"
          component={RecipeDetail}
          options={{
            gestureEnabled: false,
          }}
        />
      </DiscoverStack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },

  newTodo: {},
});

export default Discover;
