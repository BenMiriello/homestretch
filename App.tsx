import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SuggestedGoalCards from './SuggestedGoalCards';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Goals</Text>
      </View>
      <View style={styles.body}>
        <SuggestedGoalCards />
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
    backgroundColor: '#f86',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 25,
    padding: '3%',
    color: '#fff',
    fontWeight: 'bold',
  },
  body: {
    height: '90%',
    // flex: 1,
    display: "flex",
    justifyContent: 'space-around',
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    // alignItems: 'center',
  },
});
