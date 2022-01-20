import React from "react";

import { View, ScrollView, StyleSheet, SafeAreaView, Text } from "react-native";
import NutritionData from "../components/NutritionData.jsx"

const NutritionScreen = (props) => {

  const ingredientsObject = props.route.params.ingredients;

  //console.log(props.route.params.ingredients)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Text style={styles.title}>Hello you're in Nutrition Screen!</Text>

        {

          Object.entries(ingredientsObject).map(([ingredient, value], index) => {


            return (
              <View key={index}>
                <NutritionData ingredient={ingredient}></NutritionData>
              </View>
            )

          })

        }


      </ScrollView>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: 30
  }

});

export default NutritionScreen;
