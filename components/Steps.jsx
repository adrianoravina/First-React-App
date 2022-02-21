import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const Steps = (props) => {

    return (

        <View style={styles.infoContainer}>
            {
                    Object.entries(props.stepsData).map(([item, value], index) => {

                        return (

                            <View style={styles.infoRow} key={index}>

                                <Text style={styles.id} >{item}</Text>
                                <Text style={styles.name} >{value}</Text>
                            </View>

                        );

                    }
                )
            }

        </View>
    );


};


const styles = StyleSheet.create({

    id: {
        backgroundColor: "#BB33EF",
        
        fontSize:20,
        color:'white',
        padding:10
    },
    name: {
        backgroundColor: "#BB33EF",
        color:'white',
        padding:10,
        fontWeight: 'bold',
    },


});
export default Steps;
