import React from "react";
import { View, TouchableOpacity } from "react-native";
import { gStyles } from "../style/styles";
import { Ionicons } from "@expo/vector-icons";

export default function Main() {
  return (
    <View>
      <View style={{ justifyContent: "flex-end", height: "100%" }}>
        <TouchableOpacity style={gStyles.addBtn}>
          <Ionicons name="add" size={34} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
