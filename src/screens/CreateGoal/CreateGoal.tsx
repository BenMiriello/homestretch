import React from 'react'
import { StyleSheet, TouchableHighlight, Text, TextInput, View, SafeAreaView } from 'react-native'

import useAppState from '../../state';

import { weekNumbers } from '../../../types';

export default function CreateGoal() {
  const { goalName, setGoalName, timesPerWeek, setTimesPerWeek, anyDay, setAnyDay, weekdays, shared, setShared } = useAppState();

  // sometimes when page initializes, reset all fields, sometimes leave as previously set

  const handleNameChange = setGoalName;
  const anyDayPress = () => setAnyDay(!anyDay);
  const timesPerWeekPress = () => setTimesPerWeek(5)
  const sharedPress = () => setShared(!shared);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <View style={styles.formRow}>
            <TextInput style={styles.nameField} value={goalName} onChangeText={handleNameChange} placeholder='Name'/>
          </View>
          <View style={styles.formRowSeparator}></View>
          <Text style={styles.aboveButtonLabel}>Times Per Week</Text>
          <View style={styles.formRow}>
            {['1','2','3','4','5','6','7'].map(x =>
              <TouchableHighlight style={{width: '12.5%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={timesPerWeekPress}>
                <View style={styles.buttonSelected}>
                  <Text style={styles.buttonTextSelected}>{x}</Text>
                </View>
              </TouchableHighlight>
            )}
          </View>
          <View style={styles.formRowSeparator}></View>
          <View style={styles.formRow}>
            <TouchableHighlight style={{width: '100%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={anyDayPress}>
              <View style={styles.buttonSelected}>
                <Text style={styles.buttonTextSelected}>Any Day</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.formRowSeparatorHalf}></View>
          <View style={styles.formRow}>
            {['M','T','W','T','F','S','S'].map(x =>
              <TouchableHighlight style={{width: '12.5%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={timesPerWeekPress}>
                <View style={styles.buttonSelected}>
                  <Text style={styles.buttonTextSelected}>{x}</Text>
                </View>
              </TouchableHighlight>
            )}
          </View>
          <View style={styles.formRowSeparator}></View>
          <View style={styles.formRow}>
            <TouchableHighlight style={{width: '47.5%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={sharedPress}>
              <View style={shared ? styles.buttonNotSelected : styles.buttonSelected}>
                <Text style={shared ? styles.buttonTextNotSelected : styles.buttonTextSelected}>Private</Text>
              </View>
            </TouchableHighlight>
            <View style={{width: '5%'}}></View>
            <TouchableHighlight style={{width: '47.5%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={sharedPress}>
              <View style={shared ? styles.buttonSelected : styles.buttonNotSelected}>
                <Text style={shared ? styles.buttonTextSelected : styles.buttonTextNotSelected}>Public</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

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
  formRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginTop: 20,
    // marginBottom: 20,
    // height: 50,
  },
  formRowSeparator: {
    width: '100%',
    height: 50,
  },
  formRowSeparatorHalf: {
    width: '100%',
    height: 20,
  },
  aboveButtonLabel: {
    fontSize: 20,
    marginBottom: 10, 
  },
  label: {
    fontSize: 20,
  },
  nameField: {
    fontSize: 20,
    width: '100%',
    height: 50,
    borderColor: '#aaa',
    borderWidth: 2,
    padding: 8,
    borderRadius: 5,
  },
  buttonSelected: {
    width: '100%',
    height: 50,
    backgroundColor: '#e75b4c',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 5,
  },
  buttonNotSelected: {
    width: '100%',
    height: 50,
    backgroundColor: '#f2e2e1',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 5,
  },
  buttonTextSelected: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  buttonTextNotSelected: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },
});
