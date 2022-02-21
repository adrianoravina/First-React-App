import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const Info = (props) => {


    return (

        <View style={styles.infoContainer}>
            {
                    Object.entries(props.infoData).map(([item, value], index) => {

                        return (

                            <View style={{flexDirection: 'row', justifyContent:'center', marginBottom:3}} key={index}>
                                <Text style={{marginLeft:10}} >{item}</Text>
                                <Text style={{fontWeight: 'bold'}} > {value}</Text>
                            </View>


                        );

                    }
                )
            }

        </View>
    );


};


const styles = StyleSheet.create({

    


});
export default Info;
