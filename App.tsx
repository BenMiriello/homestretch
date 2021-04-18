import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from './src/navigation/StackNavigator';

import SuggestedGoalCards from './src/screens/Suggestions/SuggestedGoalCards';

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
