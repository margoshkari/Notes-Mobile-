import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MainStack from "./navigate";
import { LogBox } from "react-native";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("hello!!!!!!!!");
    LogBox.ignoreLogs([
      "Non-serializable values were found in the navigation state",
    ]);
  });
  return (
    <View style={styles.container}>
      <MainStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e2e2e",
  },
});
