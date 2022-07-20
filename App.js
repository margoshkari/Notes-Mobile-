import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
