import React, { useCallback, useEffect, useState } from "react";

import { View, ScrollView, StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";


const BusinessDetailScreen = (props) => {
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {
          Object.entries(props.route.params.product).map(([item, value], index) => {

            return (
              <View key={index} style={styles.details}>
                <Text>{item}</Text>
                <Text>{value}</Text>

              </View>
            )

          })

        }
        

        <Button
                title="Buy Now"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                  backgroundColor: 'rgba(111, 202, 186, 1)',
                  borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                containerStyle={{
                  marginHorizontal: 50,
                  height: 50,
                  width: 200,
                  marginVertical: 10,
                }}
                onPress={() => props.navigation.navigate("SubscriptionScreen", { product: props.route.params.product })}
              />


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
  buyButton: {
    backgroundColor: 'green'
  },
  details:{

  }

});

export default BusinessDetailScreen;
