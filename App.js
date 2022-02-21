import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./screens/LoginScreen.js";
import MainScreen from "./screens/MainScreen.js";

import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import UserReducer from "./store/reducers/UserReducer";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  user: UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>

      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="Main" component={MainScreen} />

        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
