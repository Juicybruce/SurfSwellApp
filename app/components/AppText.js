import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontWeight: "400",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Helvetica",
  },
});
export default AppText;
