import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";

import { Colors } from "../config/colors.js";

function Screen({ style, children }) {
  return (
    <SafeAreaView style={[styles.screen]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={[styles.view, style]}>{children}
        </View>
      </ScrollView>   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {     
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: Colors.recipeScreenBackground,
  },
  view: {
    flex: 1,
  },

  scrollView: {
    marginHorizontal: 20,
    flex: 1,
  },
});

export default Screen;