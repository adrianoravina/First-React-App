import React, { useEffect, useState } from "react";

import { View, FlatList, StyleSheet, SafeAreaView, Image, Text } from "react-native";

import Recipe from "../components/Recipe";

var RECIPES = [
  { id: '1', name: 'Roasted Chicken', liked: true },
  { id: '2', name: 'Tandoori Chicken', liked: false },
  { id: '3', name: 'Biryani Chicken', liked: true },
  { id: '4', name: 'Fried Chicken', liked: true },
  { id: '5', name: 'Butter Chicken', liked: false }
]


const RecipesScreen = ({ navigation, route }) => {

  if (route.name === "MyRecipesScreen") {

    RECIPES = RECIPES.filter(value => value.liked === true)

  }

  return (
    <SafeAreaView style={styles.container}>


      <FlatList

        data={RECIPES}
        renderItem={(itemData) => (

          <View>
            <Image
              style={styles.recipeImage}
              source={require('../data/roasted-chicken.jpg')}
            />

            <Recipe
            style={styles.recipeComponent}
              id={itemData.item.id}
              name={itemData.item.name}
              liked={itemData.item.name}
              navigation={navigation}
              parentScreen={route.name}
            ></Recipe>

          </View>



        )}
        keyExtractor={(item, index) => index.toString()}


      />


    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
    // flexDirection: 'column',
  },
  recipeImage: {
    flex:1,
    width: '100%',
    height:200,
    padding: 100,
    
  },
  recipeComponent: {

  }
  
});

export default RecipesScreen;
