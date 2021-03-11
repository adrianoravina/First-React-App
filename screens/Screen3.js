import * as React from 'react';
import { StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ChatMessages from './ChatMessages';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import  Tab1  from '../tabs/Tab1.js';
import  Tab2  from '../tabs/Tab2.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Tab2" component={Tab2} options={{
          title: 'CHAT', 
        }}/>
        <Stack.Screen name="ChatMessages" component={ChatMessages} />
      </Stack.Navigator>
  );
}

function Screen3() {
    return (

      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Tab1') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Tab2') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Tab1" component={Tab1} options={{ tabBarLabel: 'Tab1!' }}/>
        <Tab.Screen name="Tab2" component={StackNavigator} options={{ tabBarLabel: 'Chat' }}/>
      </Tab.Navigator>
       
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

export default Screen3;