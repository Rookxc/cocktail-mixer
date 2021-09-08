import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MenuCard from '../components/MenuCard.js';
import Screen from '../components/Screen.js';

export default function CategoryScreen() {
    return (
        <Screen style={styles.container}>
            <MenuCard gradientStart="#ff5f6d" gradientEnd="#ffc371" category="SUMMER COCKTAILS"/>
            <MenuCard gradientStart="#78c48c" gradientEnd="#184d26" category="JÄGERMEISTER COCKTAILS"/> 
            <MenuCard gradientStart="#cc2b5e" gradientEnd="#753a88" category="TOP RATED"/>
            <MenuCard gradientStart="#71d9ac" gradientEnd="#f2fc2b" category="#fridaynightcocktails"/>
            <MenuCard gradientStart="#141e30" gradientEnd="#243b55" category="CHEAP COCKTAILS"/> 
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop: 10,
    }
});