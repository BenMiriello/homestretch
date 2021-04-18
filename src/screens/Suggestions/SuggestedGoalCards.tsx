import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAppState from '../../state';

export default function SuggestedGoalCard() {
  const navigation = useNavigation();
  const { setGoalName } = useAppState();

  const createGoal = (goalName: string) => {
    setGoalName(goalName);
    navigation.navigate("Create Goal");
  }
  
  return(
    <>
      <TouchableOpacity style={styles.goalImageContainer}
        onPress={() => createGoal('Weight Lifting')}
      >
        <Image style={styles.goalImage} source={require('../../../images/019-dumbbell.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goalImageContainer}
        onPress={() => createGoal('Jump Rope')}
        >
        <Image style={styles.goalImage} source={require('../../../images/034-rope.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goalImageContainer}
        onPress={() => createGoal('Weight Target')}
      >
        <Image style={styles.goalImage} source={require('../../../images/036-scales.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goalImageContainer}
        onPress={() => createGoal('Timed Activity')}
      >
        <Image style={styles.goalImage} source={require('../../../images/043-stopwatch.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goalImageContainer}
        onPress={() => createGoal('Running')}
        >
        <Image style={styles.goalImage} source={require('../../../images/041-sneaker.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goalImageContainer}
        onPress={() => createGoal('Heart Health')}
      >
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
