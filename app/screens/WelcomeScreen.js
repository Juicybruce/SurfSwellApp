import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
} from "react-native";

import colours from "../config/colours";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/beachBackground.jpg")}
      blurRadius={3}
    >
      <View style={styles.loginButton}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.text}>Register</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    padding: 2,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    padding: 2,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.secondary,
  },

  text: {
    fontSize: 32,
    fontWeight: "400",
    fontFamily: "Roboto",
  },
});

export default WelcomeScreen;
