import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Main from "./components/Main";
import MainStack from "./navigate";

export default function App() {
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
