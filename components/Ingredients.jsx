import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


const Ingredients = (props) => {

    return (

        <TouchableOpacity onPress={() =>
            props.navigation.navigate("NutritionScreen", { ingredients: props.ingredientsData })
        }
        style={{margin:20, justifyContent:'center'}}
        >

            <View>
                {
                    Object.entries(props.ingredientsData).map(([item, value], index) => {

                        return (

                            <View style={{margin:2, flexDirection: 'row', justifyContent:'center',
                            height: 20, borderRadius: 50}} key={index}>

                                <Text style={styles.id} >{item} : <Text style={{fontWeight:'bold'}}>{value}</Text></Text>
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

    id:{
        
        color:'black'
    }
    

});
export default Ingredients;
