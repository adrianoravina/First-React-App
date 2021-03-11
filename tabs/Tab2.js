import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ChatRoom from '../components/ChatRoom';
import { CHATROOM } from '../data/dummy-data';

const Tab2 = props => {

  

    return (
        <View style={styles.container}>
      
        <FlatList
        data={CHATROOM}
        renderItem={itemData=> (
          <ChatRoom chatroom={itemData.item}></ChatRoom>
        )}
        />
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  
    newTodo: {
  
    }
  });

export default Tab2;