import  React, { useState }  from 'react';
import { StyleSheet, View, TextInput, FlatList, Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import  TodoItem  from '../components/TodoItem.js';

function TodoView  ( { navigation } )  {

const [newTodo, setNewTodo] = useState(''); 
const [myTodos, setTodo] = useState([]);

// Function definition - (enteredText is variable name of local var)
  
const todoInputHandler = (enteredText) => {
  setNewTodo(enteredText); // Calling 'setter'(function) defined on line 6
};

// When the user clicks the button, this function is called

const addTodoHandler = () => {
  // This is setting the myTodos variable in the state, as it sets it, it retrieves
  // a snapshot (it is a function), and the following: [...currentTodos, newTodo] will
  // read the array and create a new array and copy the existing values into the new array
  // and the second parameter (newTodo) will be added to the new array.
  if(newTodo == ""){
    alert("Please type something first :D");

  }else{
    setTodo(currentTodos => [...currentTodos, { id:Math.random().toString(), title:newTodo }]);
    setNewTodo("");
    console.log(myTodos);
  }

  
}

const clearTodoHandler = () => {
  // This clears the TextInput
  setNewTodo("");
}

const removeTodoItem = ( todoId ) => {
  console.log(todoId);
  setTodo(currentTodos => currentTodos.filter(item => item.id !== todoId));
}

    return (
      
      <View style={styles.container}>

    
      <TextInput placeholder="Write a new task..." 
      value={newTodo}
      onChangeText={todoInputHandler}
      style={styles.newTaskInput}/>

      
      <TouchableOpacity onPress={addTodoHandler} style={styles.addTodo}>
          <Text style={styles.textAdd}>Add Todo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={clearTodoHandler} style={styles.clearTodo}>
          <Text style={styles.textAdd}>Clear Todo</Text>
      </TouchableOpacity>
 
      <FlatList data={myTodos} renderItem={itemData => (
        <TodoItem title={itemData.item.title} onDelete={removeTodoItem.bind(this, itemData.item.id)}/>
      )}/>

      <Button 
              title="Go to Details Screen" 
              onPress={() => navigation.navigate('Details')}
     />


      <Button 
              title="Go to Screen3 Screen" 
              onPress={() => navigation.navigate('Screen3')}
     />
     
     </View>
  );
  
    
}

const styles = StyleSheet.create({
    container: {
      marginTop: 50
    },
    newTaskInput: {
      borderBottomWidth: 5,
      padding: 10,
      marginHorizontal: 40
    },
    addTodo: {
      backgroundColor: '#4BCA1B',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 40,
      marginTop: 10,
      height: 50
    },
    clearTodo: {
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 40,
      marginTop: 10,
      height: 50
    },
    textAdd : {
      color : 'white',
      fontWeight: 'bold'
    }

  });

export default TodoView;