import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import BusinessDetailScreen from "../screens/BusinessDetailScreen.jsx"
import BusinessScreen from "../screens/BusinessScreen.jsx"
import SubscriptionScreen from "../screens/SubscriptionScreen.jsx"

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Business = props => {


  return (
    <View style={styles.container}>

      <Stack.Navigator>

        <Stack.Screen
          name="BusinessScreen"
          component={BusinessScreen}
          options={{
            title: "Business",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="BusinessDetailScreen"
          component={BusinessDetailScreen}
          options={{
            title: "Business Details",
            gestureEnabled: true,
            headerShown: true
          }}
        />

        <Stack.Screen
          name="SubscriptionScreen"
          component={SubscriptionScreen}
          options={{
            title: "Subscribe",
            gestureEnabled: true,
            headerShown: true
          }}
        />
        {/*


        <Stack.Screen
          name="NutritionScreen"
          component={NutritionScreen}
          options={{
            title: "Nutritional Details",
            gestureEnabled: true,
            headerShown: true
          }}



        />

*/}
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

export default Business;