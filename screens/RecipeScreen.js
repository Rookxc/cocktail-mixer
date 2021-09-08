import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import { Colors } from "../config/colors.js";
import Ingredients from '../components/Ingredients.js';
import MenuCard from '../components/MenuCard.js';
import Screen from '../components/Screen.js';


export default function RecipeScreen() {
    return (
        <View style={styles.container}>
            <Ingredients style={styles.ingredients}></Ingredients>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: Colors.recipeScreenBackground,
      flex: 1,
    },

    ingredients:{
    }
});