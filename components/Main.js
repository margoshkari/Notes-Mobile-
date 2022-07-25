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
import { MaterialIcons } from "@expo/vector-icons";
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
  const [isSelected, setSelect] = useState(false);

  const addNote = (data) => {
    setNotes((list) => {
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

  const selectItems = (item) => {
    setSelect(true);
    setSelectedItems((list) => {
      return [...list, item.key];
    });
  };

  const deselectItems = () => {
    setSelect(false);
    setSelectedItems([]);
  };

  const deselectOneItem = (item) => {
    setSelectedItems((list) => {
      return list.filter((key) => key != item.key);
    });
    if (selectedItems.length <= 1) {
      setSelect(false);
    }
  };

  const pressNote = (item) => {
    if (!isSelected) {
      navigation.navigate("Note", {
        item: item,
        updateNote: updateNote,
      });
    } else {
      if (selectedItems.includes(item.key)) {
        deselectOneItem(item);
      } else {
        selectItems(item);
      }
    }
  };

  const deleteNote = () => {
    var tmpArray = notes.filter(function (item) {
      return !selectedItems.includes(item.key);
    });
    setNotes(tmpArray);
    deselectItems();
  };

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#1f1f1f",
      }}
    >
      {/* ---------------Navpanel----------------- */}
      <View
        style={{
          height: "10%",
          backgroundColor: "#1f1f1f",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            height: "80%",
            backgroundColor: "#1f1f1f",
            justifyContent: "center",
            marginLeft: "5%",
          }}
        ></View>
      </View>
      {/* ---------------END----------------- */}

      {/* Вывод всех заметок */}
      <Pressable
        style={{ height: "100%", width: "100%" }}
        onPress={deselectItems}
      >
        {isSelected && (
          <TouchableOpacity onPress={deleteNote}>
            <MaterialIcons
              name="delete-outline"
              size={30}
              color="white"
              style={{ marginLeft: "10%", marginBottom: "5%" }}
            />
          </TouchableOpacity>
        )}
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={gStyles.note}
              onPress={() => {
                pressNote(item);
              }}
              onLongPress={() => {
                selectItems(item);
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
