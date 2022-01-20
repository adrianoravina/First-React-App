import React, { useEffect, useState } from "react";

import { View, ScrollView, FlatList, StyleSheet, Button, Text, ImageBackground } from "react-native";

import { getDatabase, ref, child, get } from "firebase/database";

import Info from "../components/Info.jsx"
import Ingredients from "../components/Ingredients.jsx"
import Steps from "../components/Steps.jsx"


const image = require('../data/roasted-chicken.jpg');

const RecipeDetailScreen = (props) => {

  const recipe = props.route.params.name
  const [info, setInfo] = useState({});
  const [ingredients, setIngredients] = useState({});
  const [steps, setSteps] = useState({});

  const dbRef = ref(getDatabase())

  useEffect(() => {

    get(child(dbRef, `/Recipes/${recipe}`)).then((snapshot) => {
      if (snapshot.exists()) {

        setInfo(snapshot.val()["Info"])
        setIngredients(snapshot.val()["Ingredients"])
        setSteps(snapshot.val()["Steps"])

      } else {
        console.log("No data available")
      }
    }).catch((error) => {
      console.error(error)
    })

  }, [])

  return (
    <ScrollView style={styles.container}>

      <ImageBackground
        source={require('../data/roasted-chicken.jpg')}
        style={styles.recipeImage}
      >
        <Text style={styles.name}>{props.route.params.name}</Text>

        <Info
          infoData={info}
        />

      </ImageBackground>

      {
      //End of img background 
      //Information card
      }

      <View style={styles.infoCard}>

        <Text style={styles.factsTitle}>Nutritional Facts</Text>

        <Ingredients
          ingredientsData={ingredients}
          navigation={props.navigation}
        />

        <Text style={styles.stepsTitle}>Steps</Text>

        <Steps
          stepsData={steps}
        />

      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "teal"
  },
  factsTitle: {

    color: "white",
    fontSize: 20,

  },
  stepsTitle: {

    color: "white",
    fontSize: 20,

  },

  name: {
    paddingTop: 200,
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  recipeImage: {


  }
});

export default RecipeDetailScreen;
