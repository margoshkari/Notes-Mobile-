import React from "react";
import { View, TextInput, Button } from "react-native";
import { gStyles } from "../style/styles";
import { Formik } from "formik";

export default function Note({ route, navigation }) {
  const submitFunc = (values) => {
    if (values.text != "") {
      route.params.addNote(values);
      navigation.navigate("Main", values);
    }
  };
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
        initialValues={{ title: "", text: "" }}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder="Title"
              placeholderTextColor="#5c5c5c"
              value={props.values.title}
              multiline
              style={[gStyles.input, { fontSize: 25, marginBottom: "5%" }]}
              onChangeText={props.handleChange("title")}
            ></TextInput>
            <TextInput
              placeholder="Start typing"
              placeholderTextColor="#5c5c5c"
              value={props.values.text}
              multiline
              style={gStyles.input}
              onChangeText={props.handleChange("text")}
            ></TextInput>
            <Button title="Add" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
