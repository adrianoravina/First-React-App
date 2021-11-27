import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

const Recipe = (props) => {
  return (
    <TouchableOpacity onPress={props.goToDetail}>
      <View style={styles.item}>
        <Text>{props.id}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
  }
});
export default Recipe;
