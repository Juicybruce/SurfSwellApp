import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
} from "react-native";

import colours from "../config/colours";
import AppText from "../components/AppText";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/beachBackground.jpg")}
      blurRadius={3}
    >
      <View style={styles.loginButton}>
        <AppText>Login</AppText>
      </View>
      <View style={styles.registerButton}>
        <AppText>Register</AppText>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "95%",
    height: 70,
    margin: 5,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.primary,
  },
  registerButton: {
    width: "95%",
    height: 70,
    margin: 5,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.tertiary,
  },
});

export default WelcomeScreen;
