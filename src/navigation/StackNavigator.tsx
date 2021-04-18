import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Suggestions from "../screens/Suggestions/Suggestions";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f86",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="Suggestions" component={Suggestions} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };
