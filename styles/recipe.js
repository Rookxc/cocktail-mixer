import { StyleSheet } from "react-native"
import { Colors } from "../config/colors.js";

export default StyleSheet.create({
    ingredients:{
      //backgroundColor: "red",
      position: "absolute",
      top: 15,
      left: 0,
    },
  
    quantities:{
      //backgroundColor: "green",
      alignItems: 'flex-end',
      position: "absolute",
      top: 7,
      right: 0,
    },
  
    container: {
      height: 200,
      width: "95%",
      backgroundColor: Colors.ingridientsContainerBackground,
      flexDirection: "column",
  
      //margins and paddings
      marginVertical: 7,
      marginHorizontal: 10,
      padding: 25,
  
      //border
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
  
      position: 'absolute', //Here is the trick
      bottom: -10, //Here is the trick
      
    },
  
    rowContainer:{
        flexDirection: "row",
    },
  
    buttonsContainer:{
      flexDirection: "row",
      position: 'absolute', 
      right: 0,
    },
  
    title:{
      fontSize: 22,
      color: "white",
      fontWeight: "bold",
    },
  
    ingredient:{
        fontSize: 15,
        padding: 1,
        fontWeight: "bold",
        color: "white",
        
    },
  
    ingridientContainer:{
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 10,
      paddingTop: 10,
      borderTopWidth: 1,
      borderTopColor: "white",
    },
  
    rating:{
      fontSize: 25,
      color: "white",
    },
  
    buttonMl:{
      height:30,
      width: 35,
      borderWidth: 1,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderColor: "white",
      alignItems: "center",
    },
  
    buttonOz:{
      height:30,
      width: 35,
      borderWidth: 1,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      borderColor: "white",
      alignItems: "center",
    },
  
    measurement:{
        fontSize: 18,
        color: "white",
    }
  });
  