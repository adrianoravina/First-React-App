import React from 'react'
import { StyleSheet } from 'react-native'


import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Discover from "../tabs/Discover.js";
import MyRecipes from "../tabs/MyRecipes";
import Business from "../tabs/Business.js";


const Tab = createBottomTabNavigator();

const MainScreen = () => {

    return (

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Discover") {
                            iconName = focused
                                ? "ios-earth"
                                : "ios-earth-outline";
                        } else if (route.name === "MyRecipes") {
                            iconName = focused
                                ? "ios-heart"
                                : "ios-heart-outline";
                        } else if (route.name === "Business") {
                            iconName = focused
                                ? "ios-business"
                                : "ios-business-outline";
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    activeTintColor: "#77B217",
                    inactiveTintColor: "gray",

                })}
            >
                <Tab.Screen
                    name="Discover"
                    component={Discover}
                    options={{ tabBarLabel: "Discover",  headerShown: false }} 
                />
                <Tab.Screen
                    name="MyRecipes"
                    component={MyRecipes}
                    options={{ tabBarLabel: "My Recipes", headerShown: false }}
                />
                <Tab.Screen
                    name="Business"
                    component={Business}
                    options={{ tabBarLabel: "Market", headerShown: false }}
                />
            </Tab.Navigator>
      

    )
}

export default MainScreen

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    }
})

/*

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import {  useNavigation } from "@react-navigation/native";

import { signOut } from "firebase/auth";

import { auth } from '../firebase/config';

SIGN OUT COMPONENT

const MainScreen = () => {

    const navigation = useNavigation();

    const handleSignOut = () => {

        signOut(auth)
        .then(() => {
            navigation.navigate("Login") 
        })
        .catch(error => alert(error.message))
    }

    return (

        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>

            <TouchableOpacity 
            style={styles.button}
            onPress={handleSignOut}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>

        </View>

      

    )
}

export default MainScreen

*/
