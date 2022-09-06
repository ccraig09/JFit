import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import Notes from "../Notes";
import { wp, hp } from "./designDimensions";

const Card = (props) => {
  let Comp;
  if (props.selected === props.index) {
    Comp = TouchableOpacity;
  } else {
    Comp = View;
  }
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <View>
          <Text
            accessible={true}
            accessibilityRole="text"
            style={[
              styles.text,
              {
                color: props.selected === props.index ? "black" : "grey",
              },
            ]}
          >
            {props.data.day}
          </Text>

          {props.selected !== props.index ? (
            <Text style={{ fontSize: 15, textAlign: "center" }}>
              ({props.data.muscle})
            </Text>
          ) : null}
        </View>

        <Comp
          accessible={true}
          accessibilityRole="button"
          activeOpacity={0.6}
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => {
            if (props.selected === props.index) {
              props.onNext();
            }
          }}
        >
          <Text
            accessible={true}
            accessibilityRole="text"
            style={styles.rightText}
          >
            {props.selected === props.index ? "Hide" : "Show"}
          </Text>
          <Ionicons
            name={
              props.selected === props.index
                ? "chevron-up-outline"
                : "chevron-down-outline"
            }
            size={30}
            color={props.selected === props.index ? "black" : "grey"}
          />
        </Comp>
      </View>
      {props.selected === props.index && (
        <View
          style={{
            borderBottomColor: "#e7e7e7",
            borderBottomWidth: 3,
            width: "95%",
          }}
        />
      )}
      <View style={styles.bottomHalf}></View>
      {props.selected === props.index && (
        <View
          style={[
            styles.list,
            props.selected !== props.index ? styles.hidden : null,
          ]}
        >
          <Text style={styles.hiddenTextTitle}>{props.data.description}</Text>
          {props.data.exercises.map((exercise, index) => {
            return (
              <View key={index}>
                <Text
                  style={
                    props.data.exercises.length - 1 === index
                      ? styles.hiddenText
                      : styles.hiddenTextGreen
                  }
                >
                  {props.data.exercises.length - 1 !== index ? "\u2B24" : "🔥"}
                  {"  "}
                  {exercise}
                </Text>
              </View>
            );
          })}

          <Text
            style={{
              color: props.data.day === "Thursday" ? null : "blue",
              textAlign: "center",
              margin: 10,
            }}
            onPress={() => Linking.openURL(props.data.abs)}
          >
            {" "}
            {props.data.day === "Thursday"
              ? "⭐️ abs are just 2 sets of 1 minute planks"
              : "Click here for Ab video"}
          </Text>
          <View style={{ padding: 10 }}>
            <Notes id={props.id} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: wp(95),
    margin: 10,
  },
  text: {
    fontSize: 35,
    fontWeight: "600",
  },
  rightText: {
    fontSize: 25,
    fontWeight: "400",
    marginRight: 10,
  },
  topHalf: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  bottomHalf: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  bottomContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  bottomText: {
    fontSize: 20,
    fontWeight: "300",
    marginLeft: 3,
    color: "#575757",
  },
  hidden: {
    height: 0,
  },
  hiddenTextTitle: {
    fontSize: 20,
    fontWeight: "600",
    padding: 10,
    color: "#575757",
  },

  hiddenText: {
    fontSize: 20,
    fontWeight: "400",
    padding: 10,
    color: "orange",
  },
  hiddenTextGreen: {
    fontSize: 20,
    fontWeight: "400",
    padding: 10,
    color: "green",
  },
  list: {
    overflow: "hidden",
  },
});
