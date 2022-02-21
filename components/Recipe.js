import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";


import { Icon } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";

import {IMAGES} from './../data/images/recipe_images.js'

const Recipe = (props) => {

  const img = IMAGES[props.name]

  var detailScreen = "";

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
      <Image
        style={styles.recipeImage}
        source={{
          uri : img}}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 50
        }}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{props.name}</Text>

        


      </View>

      <View style={{
          position: 'absolute',
          right: 0,
          bottom:0
        }}>

          <Icon
            raised
            name='star'
            type='font-awesome'
            color='#11C45F'

          />

        </View>


    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({

  info: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: 150,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'

  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  }


});
export default Recipe;
