import React, { useCallback, useEffect, useState } from "react";

import { View, ScrollView, StyleSheet, SafeAreaView, Text } from "react-native";
import { useSelector } from "react-redux";

import { PricingCard, colors } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";


import shoppingService from "../services/shopping.service.js";

import { auth } from '../firebase/config';
import { onAuthStateChanged } from "firebase/auth";



const SubscriptionScreen = (props) => {

    const [customerId, setCustomerId] = useState();
    const product = props.route.params.product;
    const productId = props.route.params.product.idproducts;
    const productPrice = "$" + `${product.price}`
    const productPrice15 = "$" + `${Math.floor(parseFloat(product.price) * 6 - ((parseFloat(product.price) * 6 * 15) / 100))}`
    const productPrice25 = "$" + `${Math.floor(parseFloat(product.price) * 12 - ((parseFloat(product.price) * 12 * 25) / 100))}`

    const user_email = useSelector(
        (state) => state.user["user"][0]
    );


    const submitPurchase = async (price, subPackage) => {

        const floatPrice = parseFloat(price.replace("$", ""));

        console.log(Math.random() * 100 + "xxxxx1xxddb" + Date.now())

        const data = {
            product_id: productId,
            total_price: floatPrice,
            tracking_number: Math.floor(Math.random() * 100) + "xxxxx1xxddb" + Date.now(),
            customer_id: customerId,
            qty: subPackage
        }

        const response = await shoppingService.createOrder(data)
        console.log(response)

        alert(response + ": ORDER WENT THROUGH")

    }

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>

                <TouchableOpacity onPress={() => submitPurchase(productPrice, 1)}>

                    <PricingCard
                        color={colors.primary}
                        title="1 Month"
                        price={productPrice}
                        info={['(x1) 10lb Bag of Coffee', 'Guaranteed Sustainability', 'Premium Roast']}
                        button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}

                    />

                </TouchableOpacity>

                <TouchableOpacity onPress={() => submitPurchase(productPrice15, 18)}>

                    <PricingCard
                        color={colors.secondary}
                        title="6 Months"
                        price={productPrice15}
                        info={['(x3) 5lb Bags per month', '15% discount', 'Fair trade, Highest Quality']}
                        button={{ title: ' GET MORE!' }}
                        onPress={() => submitPurchase(productPrice)}
                    />

                </TouchableOpacity>

                <TouchableOpacity onPress={() => submitPurchase(productPrice25, 24)}>

                    <PricingCard
                        color={'rgb(29, 212, 15)'}
                        title="1 Year"
                        price={productPrice25}
                        info={['(x3) 5lb Bags per month', '25% discount', 'Fair trade, Highest Quality, Dark blend']}
                        button={{ title: ' GO ALL IN!' }}
                        onPress={() => submitPurchase(productPrice)}
                    />

                </TouchableOpacity>



            </ScrollView>



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 30
    },
    product: {
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: 'black'
    }

});

export default SubscriptionScreen;
