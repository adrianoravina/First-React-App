import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


function Tab1 () {

    return (
        <View style={styles.container}>
      
        <Text>Tab1</Text>
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

export default Tab1;