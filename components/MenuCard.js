import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


import { Colors } from "../config/colors.js";

function MenuCard({category, gradientStart, gradientEnd, onPress }) {
  return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient colors={[gradientStart,gradientEnd]} style={styles.container}> 
          <View>
            <Text style={styles.name}>{category}</Text>
          </View>     
        </LinearGradient>       
      </TouchableOpacity>   
  );
}

const styles = StyleSheet.create({
  container: {
    height: 170,
    backgroundColor: "gray",
    flexDirection: "row",
    //alignItems: "center",

    //margins and paddings
    marginVertical: 7,
    marginHorizontal: 0,
    padding: 25,

    //border
    borderRadius: 40,

  },

  name:{
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },

  rating:{
    fontSize: 25,
    color: "white",
  }

});

export default MenuCard;