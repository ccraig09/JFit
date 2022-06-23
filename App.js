import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import workouts from "./Data/workouts";
import ListComponent from "./components/ListComponent";
import Header from "./components/UI/Header";

export default function App() {
  // const [workouts, setWorkouts] = useState(workouts);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      <Header />
      <ListComponent data={workouts} />
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
});
