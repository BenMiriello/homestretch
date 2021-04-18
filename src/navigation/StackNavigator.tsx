import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Suggestions from "../screens/Suggestions/Suggestions";
import CreateGoal from "../screens/CreateGoal/CreateGoal";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Suggestions"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#e75b4c",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerShown: true
      }}
    >
      <Stack.Screen name="Suggestions" component={Suggestions} />
      <Stack.Screen name="Create Goal" component={CreateGoal} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };
