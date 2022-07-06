import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import workouts from "./Data/workouts";
import ListComponent from "./components/ListComponent";
import Header from "./components/UI/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />

        <Header />

        <Text style={styles.hiddenTextCaption}>
          Exercises (green) are to be completed with:{"\n"}3 x 12-15. {"\n"}The
          final exercise (orange) will be only: {"\n"} 2 sets until failure.{" "}
          {"\n"} Link to ab workout will be provided.
        </Text>
        <ListComponent data={workouts} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8ff",
    alignItems: "center",
    // justifyContent: "center",
  },
  hiddenTextCaption: {
    lineHeight: 20,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    padding: 10,
    color: "#575757",
  },
});
