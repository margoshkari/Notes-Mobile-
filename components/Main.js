import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Pressable,
} from "react-native";
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
  const [selectedItems, setSelectedItems] = useState([]);

  const addNote = (data) => {
    setNotes((list) => {
      console.log(data);
      return [data, ...list];
    });
  };

  const updateNote = (data) => {
    var index = notes.findIndex((elem) => elem.key == data.key);
    if (index >= 0) {
      notes[index].title = data.title;
      notes[index].text = data.text;
      setNotes((list) => {
        return [...list];
      });
    }
  };

  const limitstr = (text) => {
    if (text != undefined) {
      var newtext = text.substr(0, 30);
      if (text.length > 30) {
        newtext += "...";
      }
      return newtext;
    }
  };

  const longPress = (item) => {
    setSelectedItems((list) => {
      return [...list, item.key];
    });
  };

  const deselect = () => {
    setSelectedItems([]);
  };

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#1f1f1f",
      }}
    >
      {/* Вывод всех заметок */}
      <Pressable style={{ height: "100%", width: "100%" }} onPress={deselect}>
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={gStyles.note}
              onPress={() => {
                navigation.navigate("Note", {
                  item: item,
                  updateNote: updateNote,
                });
              }}
              onLongPress={() => {
                longPress(item);
              }}
            >
              <View style={{ paddingLeft: "3%" }}>
                <Text style={{ color: "white", fontSize: 20 }}>
                  {limitstr(item.title)}
                </Text>
                <Text style={{ color: "#9e9e9e", fontSize: 15 }}>
                  {limitstr(item.text)}
                </Text>
              </View>

              {selectedItems.includes(item.key) && (
                <View style={gStyles.overlay}></View>
              )}
            </TouchableOpacity>
          )}
        />
      </Pressable>

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
