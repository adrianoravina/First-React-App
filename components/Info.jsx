import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const Info = (props) => {


    return (

        <View style={styles.infoContainer}>
            {
                    Object.entries(props.infoData).map(([item, value], index) => {
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
        color: "white",
        backgroundColor: '#33FF71',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 35,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'right'
    },


});
export default Info;
