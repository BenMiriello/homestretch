import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import useAppState from '../../state';
import { weekDayNames } from '../../../types';

export default function GoalDetails() {
  const { currentGoal } = useAppState();

  const displayWeekdays = (
    currentGoal.weekdays.split('').map((n, i) => (
      n === '1' ? weekDayNames[i] : null
    )).filter(e => e).join(' ')
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.textRow}>{currentGoal.name}</Text>
          {currentGoal.anyDay ?
            <Text style={styles.textRow}>{currentGoal.timesPerWeek.toString()}</Text> 
          : null}
          {currentGoal.anyDay ? null :
            <Text style={styles.textRow}>{displayWeekdays}</Text>
          }
          <Text style={styles.textRow}>{currentGoal.shared ? 'Public' : 'Private'}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: "flex",
    justifyContent: 'space-around',
    flexDirection: "column",
    alignItems: 'center',
    flexWrap: "wrap",
    paddingTop: 10,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  textRow: {
    height: 50,
    fontSize: 20,
  },
});
