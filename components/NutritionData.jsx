import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";


import { getDatabase, ref, child, get } from "firebase/database";


const NutritionData = (props) => {

    const [data, setData] = useState({});
    const [title, setTitle] = useState();

    const dbRef = ref(getDatabase())

    useEffect(() => {


        get(child(dbRef, `/Food/${props.ingredient.toUpperCase()}`)).then((snapshot) => {
            if (snapshot.exists()) {

                var nutritionFacts = snapshot.val()
                setData(nutritionFacts)
                setTitle(props.ingredient)


            } else {

                console.log(props.ingredient + " Not found")

            }
        }).catch((error) => {
            console.error(error)
        })



    }, [])


    return (

        <View style={styles.infoContainer}>

            <Text style={styles.title}>{title}</Text>

            {

                Object.entries(data).map(([item, value], index) => {
                    console.log(data)
                    console.log(item)

                    return (

                        <View key={index}>
                            {// ex: Vitamin B1
                            }
                            <Text>{item}</Text> 

                            {// ex: 4,3
                            }
                            <Text>{value}</Text> 
                            
                        </View>
                    )

                })

            }


        </View>

    );

};


const styles = StyleSheet.create({

    infoContainer: {

    },
    title: {
        fontSize:15,
        fontWeight:'bold',
        backgroundColor: '#991700',
        color: 'white'
    }


});
export default NutritionData;
