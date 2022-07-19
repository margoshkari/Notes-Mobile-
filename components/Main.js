import React from "react";
import { View, TouchableOpacity } from "react-native";
import { gStyles } from "../style/styles";
import { Ionicons } from "@expo/vector-icons";

export default function Main({ navigation }) {
  return (
    <View
      style={{
        justifyContent: "flex-end",
        height: "100%",
        backgroundColor: "#2e2e2e",
      }}
    >
      <TouchableOpacity
        style={gStyles.addBtn}
        onPress={() => {
          navigation.navigate("Note");
        }}
      >
        <Ionicons name="add" size={34} color="white" />
      </TouchableOpacity>
    </View>
  );
}
