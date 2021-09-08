import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/recipe"
import { Colors } from "../config/colors.js";
const customData = require('../data/cocktails.json');


//tale id bo pridobiu iz localstorage / asyncstorage
const id = "000";

var cocktailData;

for(var i = 0; i < customData.cocktails.length; i++){
  if(customData.cocktails[i].id == id){
    cocktailData = customData.cocktails[i];
  }
}

function Ingredients(props) {
  const [checked, setChecked] = useState("");
  const [isPressML, setIsPressML ] = useState(false);
  const [isPressOZ, setisPressOZ ] = useState(true);


  function milliliters(){
    setChecked("ml");
    setIsPressML(true);
    setisPressOZ(false);
  }
  
  function ounces(){
    setChecked("oz");
    setIsPressML(false);
    setisPressOZ(true);
  }

  function renderQuanitites() {
    if (checked == "ml") {
        return (
          <View  style={styles.quantities}>
          {
            cocktailData.quantityML.map((item) => {
              return(
                <Text style={styles.ingredient}>{item}</Text>
              );
            })
          }
          </View>        
        ); 
    }
    else{
      return (
        <View  style={styles.quantities}>
        {
          cocktailData.quantityOZ.map((item) => {
            return(
              <Text style={styles.ingredient}>{item}</Text>
            );
          })
        }
        </View>        
      ); 
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.rowContainer}>
            <Text style={styles.title}>INGREDIENTS</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.buttonMl, {backgroundColor: isPressML ? Colors.recipeScreenBackground : Colors.ingridientsContainerBackground}]} onPress={milliliters}>
                  <Text style={styles.measurement}>ml</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonOz, {backgroundColor: isPressOZ ? Colors.recipeScreenBackground : Colors.ingridientsContainerBackground}]} onPress={ounces}>
                    <Text style={styles.measurement}>oz</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.ingridientContainer}>
          <View style={styles.ingredients}>
          {
            cocktailData.ingredients.map((item) => {
              return (
                <View>
                  <Text style={styles.ingredient}>{item}</Text>      
                </View>
              );
            })
          } 
          </View>
          <View  style={styles.quantities}>
              {renderQuanitites()}
          </View>
        </View>
    </View>   
  );
}

export default Ingredients;