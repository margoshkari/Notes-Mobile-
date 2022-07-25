import React, { useEffect, useState } from "react";
import { View, TextInput, Button, TouchableOpacity } from "react-native";
import { gStyles } from "../style/styles";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function Note({ route, navigation }) {
  const [confirm, setConfirm] = useState(false);
  const [title, setTitle] = useState(route.params.item?.title);
  const [text, setText] = useState(route.params.item?.text);
  const [key, setKey] = useState(route.params.item?.key);
  const [values, setValues] = useState({
    title: route.params.item?.title,
    text: route.params.item?.text,
    key: route.params.item?.ke,
  });

  const submitFunc = () => {
    values.title = title;
    values.text = text;
    console.log(values.title);
    if (
      (values.title != "" && values.title != undefined) ||
      (values.text != "" && values.text != undefined)
    ) {
      if (route.params.addNote != undefined) {
        values.key = Math.random().toString();
        route.params.addNote(values);
      } else if (route.params.updateNote != undefined) {
        values.key = key;
        route.params.updateNote(values);
      }
    }
    navigation.navigate("Main");
  };
  useEffect(() => {
    if (
      (title != "" && title != undefined) ||
      (text != "" && text != undefined)
    ) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [title, text]);
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#1f1f1f",
        minHeight: Math.round(Dimensions.get("window").height),
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
            height: "50%",
            backgroundColor: "#1f1f1f",
            justifyContent: "space-between",
            flexDirection: "row",
            marginLeft: "5%",
            width: "90%",
          }}
        >
          <TouchableOpacity onPress={submitFunc}>
            <Ionicons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={submitFunc}>
            {confirm && <Feather name="check" size={25} color="white" />}
          </TouchableOpacity>
        </View>
      </View>
      {/* ---------------END----------------- */}

      <View>
        <TextInput
          placeholder="Title"
          placeholderTextColor="#5c5c5c"
          value={title}
          multiline
          style={[gStyles.input, { fontSize: 25, marginBottom: "5%" }]}
          onChangeText={(data) => {
            setTitle(data);
          }}
        ></TextInput>
        <TextInput
          placeholder="Start typing"
          placeholderTextColor="#5c5c5c"
          value={text}
          multiline
          style={gStyles.input}
          onChangeText={(data) => {
            setText(data);
          }}
        ></TextInput>
      </View>
    </View>
  );
}
