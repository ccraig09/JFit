import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WorkoutItem = (props) => {
  const { workout } = props;

  const WorkoutList = () => {
    return workout.map((workout, index) => {
      return (
        <View key={index} style={styles.container}>
          <Text>{workout.day}</Text>
          <Text>{workout.muscle}</Text>
          <Text>{workout.description}</Text>
          <Text>{workout.exercises}</Text>
        </View>
      );
    });
  };

  return (
    <View>
      <WorkoutList />
    </View>
  );
};

export default WorkoutItem;

const styles = StyleSheet.create({});
