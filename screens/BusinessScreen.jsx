import React, { useCallback, useEffect, useState } from "react";

import { StyleSheet, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import productsService from "../services/products.service.js";
import Product from "../components/Product.jsx"


const BusinessScreen = (props) => {

  const [data, setData] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = useCallback(async () => {


    const data = await productsService.getProducts("Berlin")

    setData(data)

  }, []);


  return (
    <View style={{flex:1}}>

      <Image
        source={require("../data/images/foodboutique.jpg")}
        style={{
          width: "100%",
          height: 150,
        }}
      />

      <FlatList

        data={data}
        renderItem={(itemData) => (
          <Product
          
            product={itemData.item}
            navigation={props.navigation}
          />
        )}
        keyExtractor={(item, index) => index.toString()}

      />


    </View>
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

export default BusinessScreen;
