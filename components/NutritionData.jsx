import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";


import { getDatabase, ref, child, get } from "firebase/database";


const NutritionData = (props) => {

    const [data, setData] = useState({});

    const dbRef = ref(getDatabase())

    useEffect(() => {

        get(child(dbRef, `/Food/${props.ingredient.toUpperCase()}`)).then((snapshot) => {
            if (snapshot.exists()) {

                var nutritionFacts = snapshot.val()
                setData(nutritionFacts)

            } else {

                console.log(props.ingredient + " Not found")


            }
        }).catch((error) => {
            console.error(error)
        })
    }, [])

    return (

        <View style={styles.infoContainer}>

            {
                Object.keys(data).length === 0 ?
                    <>

                    </>
                    :
                    <>
                        <Text style={styles.title}> {props.ingredient}</Text>
                    </>
            }


            {
                Object.entries(data).map(([item, value], index) => {

                    if (item === "Kcal") {
                        var isKcal = true;
                        
                    }

                    return (

                        <View key={index}>
                            {// ex: Vitamin B1                           
                            }
                            <Text style={isKcal === true ? (styles.kcal) : styles.item}>{item}</Text>

                            {// ex: 4,3
                            }
                            <Text style={isKcal === true ? (styles.kcal) : styles.item}>{isKcal === true ? value : value + '%'}</Text>

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
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#991700',
        color: 'white'
    },
    item: {
        
    },
    kcal: {
        backgroundColor: 'yellow'
    }


});
export default NutritionData;
