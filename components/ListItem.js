import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";

function ListItem({title,members,image,moreIcon,renderRightActions,onPress,}) {
    return (
        <View style={styles.container}>
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{title}</Text>
          {members && <Text>{members}</Text>}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 15,
    },
  
    detailsContainer: {
      marginLeft: 10,
      justifyContent: "center",
    },
  
    image: {
      width: 70,
      height: 70,
      borderRadius: 35,
      //borderColor: Colors.gradientDark,
      borderWidth: 2,
      marginRight: 10,
    },
  });


export default ListItem;

