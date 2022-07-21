import React, { useEffect, useState } from "react";
import { View, TextInput, Button } from "react-native";
import { gStyles } from "../style/styles";
import { Formik } from "formik";
import { Component } from "react";

export default function Note({ route, navigation }) {
  const [confirm, setConfirm] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const submitFunc = (values) => {
    values.text = values.text != undefined ? values.text : "";
    values.title = values.title != undefined ? values.title : "";

    if (values.title != "" || values.text != "") {
      if (route.params.addNote != undefined) {
        values.key = Math.random().toString();
        route.params.addNote(values);
      } else if (route.params.updateNote != undefined) {
        route.params.updateNote(values);
      }
      navigation.navigate("Main");
    }
  };
  useEffect(() => {
    console.log(title);
    console.log(text);
    if (title != "" || text != "") {
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
      }}
    >
      <Formik
        onSubmit={(values, action) => {
          submitFunc(values);
          //action.resetForm();
        }}
        initialValues={{
          title: route.params.item?.title,
          text: route.params.item?.text,
          key: route.params.item?.key,
        }}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder="Title"
              placeholderTextColor="#5c5c5c"
              value={props.values.title}
              multiline
              style={[gStyles.input, { fontSize: 25, marginBottom: "5%" }]}
              onChangeText={(data) => {
                setTitle(data);
                props.handleChange("title");
              }}
            ></TextInput>
            <TextInput
              placeholder="Start typing"
              placeholderTextColor="#5c5c5c"
              value={props.values.text}
              multiline
              style={gStyles.input}
              onChangeText={(data) => {
                setText(data);
                props.handleChange("text");
              }}
            ></TextInput>
            {confirm && <Button title="Add" onPress={props.handleSubmit} />}
          </View>
        )}
      </Formik>
    </View>
  );
}
