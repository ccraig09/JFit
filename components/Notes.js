import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Notes = (props) => {
  const [text, onChangeText] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        console.log("loading text");
        const value = await AsyncStorage.getItem(`@storage_Key + ${props.id}`);
        if (value !== null) {
          onChangeText(value);
          // value previously stored
        }
      } catch (e) {
        // error reading value
      }
    };

    getData();
  }, [value]);

  const storeData = async () => {
    try {
      console.log(text);
      alert("Note Saved");
      await AsyncStorage.setItem(`@storage_Key + ${props.id}`, text);
    } catch (e) {
      // saving error
      console.log("oopsies");
    }
  };

  return (
    <View
      style={{
        padding: 10,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
      }}
    >
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={"Enter Note"}
        value={text}
        multiline
      />
      <Button title="Save" onPress={storeData} />
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
