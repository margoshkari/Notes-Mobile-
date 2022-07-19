import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { gStyles } from "../style/styles";
import { Ionicons } from "@expo/vector-icons";

export default function Main({ navigation }) {
  const [notes, setNotes] = useState([]);

  const addNote = (article) => {
    article.key = Math.random().toString();
    setNotes((list) => {
      console.log(article);
      return [article, ...list];
    });
  };

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
          navigation.navigate("Note", { addNote: addNote });
        }}
      >
        <Ionicons name="add" size={34} color="white" />
      </TouchableOpacity>
    </View>
  );
}
