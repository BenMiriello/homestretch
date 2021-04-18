import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SuggestedGoalCard() {
  const navigation = useNavigation();
  
  return(
    <>
      <TouchableOpacity style={styles.goalImageContainer} onPress={() => navigation.navigate("Create Goal")}>
        <Image style={styles.goalImage} source={require('../../../images/019-dumbbell.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goalImageContainer} onPress={() => navigation.navigate("Create Goal")}>
        <Image style={styles.goalImage} source={require('../../../images/034-rope.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goalImageContainer} onPress={() => navigation.navigate("Create Goal")}>
        <Image style={styles.goalImage} source={require('../../../images/036-scales.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goalImageContainer} onPress={() => navigation.navigate("Create Goal")}>
        <Image style={styles.goalImage} source={require('../../../images/043-stopwatch.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goalImageContainer} onPress={() => navigation.navigate("Create Goal")}>
        <Image style={styles.goalImage} source={require('../../../images/045-treadmill.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goalImageContainer} onPress={() => navigation.navigate("Create Goal")}>
        <Image style={styles.goalImage} source={require('../../../images/041-sneaker.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goalImageContainer} onPress={() => navigation.navigate("Create Goal")}>
        <Image style={styles.goalImage} source={require('../../../images/032-note.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goalImageContainer} onPress={() => navigation.navigate("Create Goal")}>
        <Image style={styles.goalImage} source={require('../../../images/023-healthy.png')}/>
      </TouchableOpacity>
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
