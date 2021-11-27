import React, { useEffect } from "react";

import { View, FlatList, StyleSheet, Button, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const RecipeDetail = (props) => {

    return (
        <View style={styles.container}>

            <Text>Recipe Detail Screen</Text>
          
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  
  export default RecipeDetail;
  