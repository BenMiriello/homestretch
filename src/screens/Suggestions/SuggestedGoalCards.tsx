import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function SuggestedGoalCard() {
  return(
    <>
      <View style={styles.goalImageContainer}>
        <Image style={styles.goalImage} source={require('../../../images/019-dumbbell.png')}/>
      </View>
      <View style={styles.goalImageContainer}>
        <Image style={styles.goalImage} source={require('../../../images/034-rope.png')}/>
      </View>
      <View style={styles.goalImageContainer}>
        <Image style={styles.goalImage} source={require('../../../images/036-scales.png')}/>
      </View>
      <View style={styles.goalImageContainer}>
        <Image style={styles.goalImage} source={require('../../../images/043-stopwatch.png')}/>
      </View>
      <View style={styles.goalImageContainer}>
        <Image style={styles.goalImage} source={require('../../../images/045-treadmill.png')}/>
      </View>
      <View style={styles.goalImageContainer}>
        <Image style={styles.goalImage} source={require('../../../images/041-sneaker.png')}/>
      </View>
      <View style={styles.goalImageContainer}>
        <Image style={styles.goalImage} source={require('../../../images/032-note.png')}/>
      </View>
      <View style={styles.goalImageContainer}>
        <Image style={styles.goalImage} source={require('../../../images/023-healthy.png')}/>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  goalImageContainer: {
    width: 160,
    height: 160,
    margin: 10,
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#eef',
    padding:15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  goalImage: {
    width: 125,
    height: 125,
  },
});
