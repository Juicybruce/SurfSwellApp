import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppText from "../components/AppText";

import colours from "../config/colours";

function ListItem({ title, distance, weather, temp, swell }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <AppText>{title}</AppText>
        <AppText>{distance}</AppText>
      </View>
      <View style={styles.bottomBox}>
        <AppText>{weather}</AppText>
        <AppText>{temp}</AppText>
        <AppText>{swell}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.primary,
    borderWidth: 3,
    margin: 1,
    borderColor: "black",
    width: "100%",
    height: 200,
    justifyContent: "space-between",
  },
  bottomBox: {
    height: 60,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colours.tertiary,
  },
  topBox: {
    height: 60,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colours.white,
  },
});

export default ListItem;
