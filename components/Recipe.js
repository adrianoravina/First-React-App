import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";


import { TouchableOpacity } from "react-native-gesture-handler";

const Recipe = (props) => {

  var detailScreen = "";

  //console.log(props.name)

  /*
  

  

  */

  if (props.parentScreen === "MyRecipesScreen") {

    detailScreen = "MyRecipeDetailScreen";

  } else {

    detailScreen = "RecipeDetailScreen";

  }


  return (
    <TouchableOpacity onPress={() =>
      props.navigation.navigate(detailScreen, { id: props.id, name: props.name })
    }
    >



        <View style={styles.info}>


          <Text style={styles.id}>Identification num: {props.id}</Text>
          <Text style={styles.name}>{props.name}</Text>
        </View>

    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  item: {

    flexDirection: "column",
    padding: 10,

    backgroundColor: '#ddd',
    borderStyle: "solid",
    borderWidth: 1,
  },
  recipePhoto: {
    position: "absolute",
                    top: 25,
                    right: 20,
                    width: "90%",
                    height: 200,
  },

  info: {
    flexDirection: "column",
    //padding: 10,

  },

  id: {
    backgroundColor: '#ff5733'
  },
  name: {
    color: "white",
    backgroundColor: '#33FF71',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 35,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'right'
  },

  facts: {
    backgroundColor: '#FF3390'

  },

  box: {
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
  }
});
export default Recipe;
