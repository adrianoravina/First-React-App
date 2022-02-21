import React, { useEffect, useState } from "react";

import { View, FlatList, StyleSheet, SafeAreaView, Image, Text } from "react-native";
import { getDatabase, ref, child, get } from "firebase/database";

import Recipe from "../components/Recipe";

const RecipesScreen = ({ navigation }) => {

  const [recipes, setRecipes] = useState([]);
  const dbRef = ref(getDatabase())

  useEffect(() => {

    get(child(dbRef, `/Recipes`)).then((snapshot) => {
      if (snapshot.exists()) {

        const data = Object.keys(snapshot.val())
        setRecipes(data)

      } else {
        console.log("No data available")
      }
    }).catch((error) => {
      console.error(error)
    })

  }, [])


  return (
    <SafeAreaView style={styles.container}>

      <Text style={{fontWeight: 'bold', fontSize:40, marginLeft:10, marginTop:10}}>New</Text>
      <Text style={{fontWeight: 'bold', fontSize:40, marginLeft:10}}>Recipes</Text>

     

      <FlatList

        data={recipes}
        renderItem={(itemData) => (

          <View style={{margin:5}}>

            <Recipe
              style={styles.recipeComponent}
              name={itemData.item}
              navigation={navigation}
            ></Recipe>

          </View>

        )}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 30
        }}
        keyExtractor={(item, index) => index.toString()}

      />

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({


});

export default RecipesScreen;
