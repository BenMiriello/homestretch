import React from 'react'
import { StyleSheet, TouchableHighlight, Text, TextInput, View, SafeAreaView } from 'react-native'

import useAppState from '../../state';
import DismissKeyboard from '../../DismissKeyboard';
import { TimesPerWeek } from '../../../types';

// import { Weekday, Weekdays } from '../../../types';

export default function CreateGoal() {
  const { goalName, setGoalName, timesPerWeek, setTimesPerWeek, anyDay, setAnyDay, weekdays, setWeekdays,  shared, setShared } = useAppState();

  // sometimes when page initializes, reset all fields, sometimes leave as previously set

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const anyDayPress = () => setAnyDay(!anyDay);
  const timesPerWeekPress = (x: TimesPerWeek) => setTimesPerWeek(x);
  const sharedPress = () => setShared(!shared);
  const weekDaysPress = (dayPressed: string) => {
    if (weekdays.includes(dayPressed)) setWeekdays(weekdays.filter(day => day !== dayPressed));
    else {
      const newWeekdays = weekdays;
      newWeekdays.push(dayPressed);
      (setWeekdays(newWeekdays))
    };
  };

  return (
    <SafeAreaView>
      <DismissKeyboard>
        <View style={styles.container}>
          <View>
            <View style={styles.formRow}>
              <TextInput style={styles.nameField} value={goalName} onChangeText={setGoalName} placeholder='Name'/>
            </View>
            <View style={styles.formRowSeparator}></View>


            {/* <Text style={styles.aboveButtonLabel}>Times Per Week</Text> */}
            <View style={styles.formRow}>
              {['1','2','3','4','5','6','7'].map(x =>
                <TouchableHighlight style={{width: '12.5%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={_ => timesPerWeekPress(x)}>
                  <View style={x === timesPerWeek.toString() ? styles.buttonSelected : styles.buttonNotSelected}>
                    <Text style={x === timesPerWeek.toString() ? styles.buttonTextSelected : styles.buttonTextNotSelected}>{x}</Text>
                  </View>
                </TouchableHighlight>
              )}
            </View>
            <View style={{height: 20}}></View>

            <View style={styles.formRow}>
              <TouchableHighlight style={{width: '47.5%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={anyDayPress}>
                <View style={anyDay ? styles.buttonNotSelected : styles.buttonSelected}>
                  <Text style={anyDay ? styles.buttonTextNotSelected : styles.buttonTextSelected}>Times Per Week</Text>
                </View>
              </TouchableHighlight>
              <View style={{width: '5%'}}></View>
              <TouchableHighlight style={{width: '47.5%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={anyDayPress}>
                <View style={anyDay ? styles.buttonSelected : styles.buttonNotSelected}>
                  <Text style={anyDay ? styles.buttonTextSelected : styles.buttonTextNotSelected}>Selected Days</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={{height: 20}}></View>

            <View style={styles.formRow}>
              {daysOfWeek.map(day =>
                <TouchableHighlight style={{width: '12.5%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={_ => weekDaysPress(day)}>
                  <View style={weekdays.includes(day) ? styles.buttonSelected : styles.buttonNotSelected}>
                    <Text style={weekdays.includes(day) ? styles.buttonTextSelected : styles.buttonTextNotSelected}>{day[0].toUpperCase()}</Text>
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
            <View style={styles.formRowSeparator}></View>


            <View style={styles.formRow}>
              <TouchableHighlight style={{width: '100%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={() => {}}>
                <View style={styles.buttonSelected}>
                  <Text style={styles.buttonTextSelected}>Set Goal</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </DismissKeyboard>
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
  },
  formRowSeparator: {
    width: '100%',
    height: 50,
  },
  aboveButtonLabel: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '500',
  },
  label: {
    fontSize: 20,
  },
  nameField: {
    fontSize: 20,
    width: '100%',
    height: 50,
    borderColor: '#e75b4c',
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
    borderWidth: 2,
    borderColor: '#e75b4c',
  },
  buttonNotSelected: {
    width: '100%',
    height: 50,
    backgroundColor: '#f2e2e1',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#e75b4c',
  },
  buttonTextSelected: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  buttonTextNotSelected: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },
});
