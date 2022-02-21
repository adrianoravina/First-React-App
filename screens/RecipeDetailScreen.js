import React, { useEffect, useState } from "react";

import { View, ScrollView, StyleSheet, Text, Image } from "react-native";

import { getDatabase, ref, child, get } from "firebase/database";

import Info from "../components/Info.jsx"
import Ingredients from "../components/Ingredients.jsx"
import Steps from "../components/Steps.jsx"

import {IMAGES} from './../data/images/recipe_images.js'

const RecipeDetailScreen = (props) => {

  const recipe = props.route.params.name
  const [info, setInfo] = useState({});
  const [ingredients, setIngredients] = useState({});
  const [steps, setSteps] = useState({});

  const img = IMAGES[props.route.params.name]

  console.log(img)



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

      <Image
        source={{
          uri : img}}
        style={{
          width: "100%",
          height: 200,
        }}
      />
        <View style={styles.backgroundName}>
        <Text style={styles.name}>{props.route.params.name}</Text>
        </View>

        <Info
        
          infoData={info}
        />


      {
      //End of img background 
      //Information card
      }

      <View  >

        <Text style={styles.factsTitle}>Nutritional Facts</Text>

        <Ingredients
          ingredientsData={ingredients}
          navigation={props.navigation}
        />

        <Steps
        
          stepsData={steps}
        />

      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  factsTitle: {
    color: "black",
    fontSize: 25,
    marginTop:20,
    textAlign:'center',
    fontWeight:'bold'
  },
  name: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10
    
  },
});

export default RecipeDetailScreen;
