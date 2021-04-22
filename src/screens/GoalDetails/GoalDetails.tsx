import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

import useAppState from '../../state';

export default function GoalDetails() {
  const { currentGoal } = useAppState();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.textRow}>{currentGoal.name}</Text>
          <Text style={styles.textRow}>{currentGoal.timesPerWeek.toString()}</Text>
          <Text style={styles.textRow}>{currentGoal.weekdays}</Text>
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
