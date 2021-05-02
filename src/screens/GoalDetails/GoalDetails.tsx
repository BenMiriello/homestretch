import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import useAppState from '../../state';
import { weekDayNames } from '../../utils/constants';

export default function GoalDetails() {
  const navigation = useNavigation();
  const { currentGoal } = useAppState();

  const displayWeekdays = (
    currentGoal && currentGoal.weekdays.split('').map((n, i) => (
      n === '1' ? weekDayNames[i] : null
    )).filter(e => e).join(', ')
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Button
            title="Go to My Goals"
            onPress={() => navigation.navigate('My Goals')}
          />
          <Text style={styles.textRow}>{currentGoal.name}</Text>
          {currentGoal.daily ?
            <Text style={styles.textRow}>
              Daily
            </Text>
          :
            null
          }
          {currentGoal.daily ?
            null
          :
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
