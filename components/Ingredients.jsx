import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const Ingredientes = (props) => {


    return (

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
