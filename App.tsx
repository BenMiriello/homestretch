import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Goals</Text>
      </View>
      <View style={styles.body}>
        <Image style={styles.goalImage} source={require('./images/019-dumbbell.png')}/>
        <Image style={styles.goalImage} source={require('./images/034-rope.png')}/>
        <Image style={styles.goalImage} source={require('./images/012-measure.png')}/>
        <Image style={styles.goalImage} source={require('./images/043-stopwatch.png')}/>
        <Image style={styles.goalImage} source={require('./images/045-treadmill.png')}/>
        <Image style={styles.goalImage} source={require('./images/041-sneaker.png')}/>
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
    // alignItems: 'center',
  },
  bodyRow: {
    width: '100%',
    flexWrap: 'nowrap',
  },
  goalImage: {
    width: 150,
    height: 150,
    margin: 15
  },
});

// <Text>Create your first goal here</Text>
