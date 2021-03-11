import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = props => {
    return (
        <View style={styles.item}>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity 
        style={styles.deletebutton} 
        onPress={props.onDelete}>
          <MaterialIcons name="delete" size={20} color="#333"/>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    item:{
        flexDirection: 'row',
        flex: 1,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 10,
        alignContent: 'stretch',
        justifyContent: 'flex-end',
        marginTop: 20,   
        padding: 30
    },
    title: {
        fontSize: 32,
        flex: 4,
        flexWrap: 'wrap',
        alignContent: 'center',
        flexDirection: 'column'
      },
      deletebutton:{
        backgroundColor: '#d11a2a',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

      }
});

export default TodoItem;