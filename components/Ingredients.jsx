import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


const Ingredientes = (props) => {

    return (

        <TouchableOpacity onPress={() =>
            props.navigation.navigate("NutritionScreen", { ingredients: props.ingredientsData })
        }
        >

            <View style={styles.infoContainer}>
                {
                    Object.entries(props.ingredientsData).map(([item, value], index) => {
                        //console.log(`${item}: ${value} : ${index}`)

                        return (


                            <View style={styles.infoRow} key={index}>

                                <Text style={styles.id} >{item} : {value}</Text>
                            </View>


                        );

                    }
                    )
                }

            </View>

        </TouchableOpacity>
    );


};


const styles = StyleSheet.create({

    infoContainer: {},
    infoRow: {},
    id: {
        backgroundColor: '#ff5733'
    },


});
export default Ingredientes;
