import React, { useEffect, useState } from "react";

import { View, FlatList, StyleSheet, SafeAreaView, Button, Text, Alert } from "react-native";
import { getDatabase, ref, child, get } from "firebase/database";

import Recipe from "../components/Recipe";
import { getAuth, signOut } from "firebase/auth";

const RecipesScreen = ({ navigation }) => {

  const [recipes, setRecipes] = useState([]);
  const dbRef = ref(getDatabase())

  const auth = getAuth();


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

  const LogOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful")
      navigation.navigate("Login")
    }).catch((error) => {
      // An error happened.
      console.log("Something went wrong")
    });

  }


  return (
    <SafeAreaView style={styles.container}>

      <View style={{
        fontWeight: 'normal', fontSize: 15, right: -120, top: 20
      }}>
        <Button
          title="Log Out"
          onPress={LogOut}
        />
      </View>



      <View style={{}}>
        <Text style={{ fontWeight: 'bold', fontSize: 40, marginLeft: 10, marginTop: 10 }}>New</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 40, marginLeft: 10 }}>Recipes</Text>
      </View>



      <FlatList

        data={recipes}
        renderItem={(itemData) => (

          <View style={{ margin: 5 }}>

            <Recipe
              style={styles.recipeComponent}
              name={itemData.item}
              navigation={navigation}
            ></Recipe>

          </View>

        )}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 12
        }}
        keyExtractor={(item, index) => index.toString()}

      />

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1
  }

});

export default RecipesScreen;
