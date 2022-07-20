import React from "react";
import { StyleSheet } from "react-native";
export const gStyles = StyleSheet.create({
  addBtn: {
    backgroundColor: "#8aebd7",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    position: "absolute",
    right: "5%",
    bottom: "5%",
  },
  input: {
    color: "#fff",
    fontSize: 15,
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  note: {
    width: "90%",
    borderRadius: 15,
    backgroundColor: "#363636",
    height: 70,
    marginLeft: "5%",
    marginBottom: "3%",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(12, 34, 56, 0.5)",
    top: 0,
    left: 0,
    position: "absolute",
    borderRadius: 15,
  },
});
