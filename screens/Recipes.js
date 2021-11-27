import React, { useEffect } from "react";

import { View, FlatList, StyleSheet, Button, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Recipe from "../components/Recipe";



const Recipes = ({navigation}) => {

    function goToDetail(){
        navigation.navigate('RecipeDetail') 
    }

    return (
        <View style={styles.container}>

            <Text>Recipes Screen</Text>

            <View style={styles.recipeComponent}>

            <Recipe
            id={1}
            goToDetail={goToDetail}
          ></Recipe>


            </View>

            
          
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'row',
    },
    recipeComponent: {
        width: 80,
        height:40
    }
  });
  
  export default Recipes;
  