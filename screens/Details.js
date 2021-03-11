import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Details () {

    return (
        <View style={styles.container}>
      
        <Text>Detail Screen</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 100
    },
  
    newTodo: {
  
    }
  });

export default Details;