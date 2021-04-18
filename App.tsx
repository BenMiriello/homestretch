import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Goals</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.goalImageContainer}>
          <Image style={styles.goalImage} source={require('./images/019-dumbbell.png')}/>
        </View>
        <View style={styles.goalImageContainer}>
          <Image style={styles.goalImage} source={require('./images/034-rope.png')}/>
        </View>
        <View style={styles.goalImageContainer}>
          <Image style={styles.goalImage} source={require('./images/012-measure.png')}/>
        </View>
        <View style={styles.goalImageContainer}>
          <Image style={styles.goalImage} source={require('./images/043-stopwatch.png')}/>
        </View>
        <View style={styles.goalImageContainer}>
          <Image style={styles.goalImage} source={require('./images/045-treadmill.png')}/>
        </View>
        <View style={styles.goalImageContainer}>
          <Image style={styles.goalImage} source={require('./images/041-sneaker.png')}/>
        </View>
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
  goalImageContainer: {
    width: 160,
    height: 160,
    margin: 10,
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#eee',
    padding:15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  goalImage: {
    width: 125,
    height: 125,
  },
});
