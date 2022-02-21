import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";

import { getDatabase, ref, child, get } from "firebase/database";

const TotalNutritionData = (props) => {

    const [data, setData] = useState([]);

    //firebase
    const dbRef = ref(getDatabase())

    useEffect(() => {

        getData()
        console.log(data)
        
    }, [])

    const getData = useCallback( async () => {
      
        let dataArray = [];

        Object.entries(props.ingredientsObject).map( ([ingredient, value], index) => {

            get(child(dbRef, `/Food/${ingredient.toUpperCase()}`)).then((snapshot) => {
                if (snapshot.exists()) {

                    var nutritionFacts = snapshot.val()
                    dataArray.push(nutritionFacts)
               
                } else {

                    console.log(ingredient + " Not found")

                }

            }).catch((error) => {
                console.error(error)
            })
        })

        setData(dataArray)

    }, []);
    

    
    return (

        <View>

            <Text>Total</Text>

            {
                console.log(data)
            }

        </View>


    );

};


const styles = StyleSheet.create({




});
export default TotalNutritionData;
