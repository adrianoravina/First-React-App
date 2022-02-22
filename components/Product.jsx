import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import {PRODUCTS} from './../data/images/recipe_images.js'

const Product = (props) => {

    const img = PRODUCTS[props.product.name]

    return (


<TouchableOpacity onPress={() =>
                props.navigation.navigate("BusinessDetailScreen", { product: props.product })
            }
            >
                <View style={styles.container}>
                    <View style={styles.column}>
                        <Text style={styles.name} >{props.product.name}</Text>
                        <Text style={styles.price} >DKK{props.product.price}</Text>
                        <Text style={styles.description} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </View>

                    <View style={styles.column}>

                        <Image
                            source={{
                                uri : img}}

                            style={{
                                width: 160,
                                height: 100,
                                borderRadius: 25
                            }}
                        />
                    </View>
                </View>
                
            </TouchableOpacity>

        
           
    );


};


const styles = StyleSheet.create({

    name: {
        fontWeight: 'bold',
        fontSize: 18
    },
    description: {

    },
    price: {

    },
    container: {
        
        flexDirection: 'row'
    },
    column: {
        width: 200,
        justifyContent: 'center'
    }

});
export default Product;
