import React from "react";
import { View, TextInput } from "react-native";
import { gStyles } from "../style/styles";
import { Ionicons } from "@expo/vector-icons";

export default function Note() {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#2e2e2e",
      }}
    >
      <TextInput
        placeholder="Title"
        placeholderTextColor="#5c5c5c"
        multiline
        style={[gStyles.input, { fontSize: 25, marginBottom: "5%" }]}
      ></TextInput>
      <TextInput
        placeholder="Start typing"
        placeholderTextColor="#5c5c5c"
        multiline
        style={gStyles.input}
      ></TextInput>
    </View>
  );
}
