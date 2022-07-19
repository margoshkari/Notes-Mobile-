import React from "react";
import Note from "./components/Note";
import Main from "./components/Main";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "",
          headerStyle: {
            backgroundColor: "#2e2e2e",
          },
          headerTintColor: "#fff",
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Note" component={Note} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
