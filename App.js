import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Discover from "./tabs/Discover.js";
import MyRecipes from "./tabs/MyRecipes";
import Business from "./tabs/Business.js";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Discover") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "MyRecipes") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Business") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{ tabBarLabel: "Discover" }}
        />
        <Tab.Screen
          name="MyRecipes"
          component={MyRecipes}
          options={{ tabBarLabel: "MyRecipes" }}
        />
        <Tab.Screen
          name="Business"
          component={Business}
          options={{ tabBarLabel: "Business" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
});

export default App;
