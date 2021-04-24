import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from './components/StackNavigator';
import { AppStateProvider } from './state';

export default function App() {
  return (
    <NavigationContainer>
      <AppStateProvider>
        <MainStackNavigator />
      </AppStateProvider>
    </NavigationContainer>
  );
}
