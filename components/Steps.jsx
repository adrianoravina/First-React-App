import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const Steps = (props) => {

    return (

        <View style={styles.infoContainer}>
            {
                    Object.entries(props.stepsData).map(([item, value], index) => {
                        //console.log(`${item}: ${value} : ${index}`)

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

    infoContainer: {},
    infoRow: {},
    id: {
        backgroundColor: '#ff5733'
    },
    name: {
        
    },


});
export default Steps;
