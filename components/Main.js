import React, { useState } from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import { gStyles } from "../style/styles";
import { Ionicons } from "@expo/vector-icons";
import { LogBox } from "react-native";
import { useEffect } from "react";

export default function Main({ navigation }) {
  useEffect(() => {
    LogBox.ignoreLogs([
      "Non-serializable values were found in the navigation state",
    ]);
  });
  const [notes, setNotes] = useState([]);

  const addNote = (article) => {
    article.key = Math.random().toString();
    setNotes((list) => {
      console.log(article);
      return [article, ...list];
    });
  };

  const limitstr = (text) => {
    var newtext = text.substr(0, 30);
    if (text.length > 30) {
      newtext += "...";
    }
    return newtext;
  };

  return (
    <View
      style={{
        justifyContent: "flex-end",
        height: "100%",
        backgroundColor: "#1f1f1f",
      }}
    >
      {/* Вывод всех заметок */}
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <TouchableOpacity style={gStyles.note}>
            <Text style={{ color: "white", fontSize: 20 }}>
              {limitstr(item.title)}
            </Text>
            <Text style={{ color: "#9e9e9e", fontSize: 15 }}>
              {limitstr(item.text)}
            </Text>
          </TouchableOpacity>
        )}
      />

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
