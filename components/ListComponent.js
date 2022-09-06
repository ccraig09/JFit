import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import Card from "../components/UI/Card";

const ListComponent = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [pressed, setPressed] = useState(false);

  function clickHandler(index) {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      setPressed(!pressed);
    } else {
      setPressed(!pressed);
      setSelectedIndex(index);
    }
  }

  if (props.data.length === 0) {
    return <Text>No data was loaded.</Text>;
  } else {
    return props.data.map((data, index) => (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          clickHandler(index);
        }}
        key={index}
      >
        <Card
          id={data.id}
          data={data}
          index={index}
          selected={selectedIndex}
          onNext={() => {
            clickHandler(index);
          }}
          pressed={pressed}
        ></Card>
      </TouchableOpacity>
    ));
  }
};

export default ListComponent;
