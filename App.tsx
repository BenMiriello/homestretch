import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Goals</Text>
      </View>
      <View style={styles.body}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  header: {
    height: '10%',
    width: '100%',
    backgroundColor: '#e80',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 25,
    padding: '3%',
    color: '#fff',
  },
  body: {
    height: '90%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
