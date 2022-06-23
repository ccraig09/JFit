import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";

const screen = Dimensions.get("screen");

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} backgroundColor={"transparent"} translucent />

      <Image style={styles.image} source={require("../../assets/jfit.png")} />
      <Text accessible={true} accessibilityRole="header" style={styles.title}>
        J Fit
      </Text>
      <Text
        accessible={true}
        accessibilityRole="text"
        adjustsFontSizeToFit
        style={styles.subtitle}
      >
        A little birthday gift for ya. {"\n"} Hope you enjoy these.. KILL IT!
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fff",
    // flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "#254c9a",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    color: "#304b8c",
  },
});
