import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableHighlight, Text, TextInput, View, SafeAreaView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
// import RNPickerSelect from 'react-native-picker-select';

import useAppState from '../../state';
import DismissKeyboard from '../../components/DismissKeyboard';
import { GoalType } from '../../utils/types';

export default function CreateGoal() {
  const navigation = useNavigation();
  const { goalName, setGoalName, saveGoal, setCurrentGoal } = useAppState();

  const [timesPerWeek, setTimesPerWeek] = useState<number>(7);
  const [daily, setDaily] = useState<boolean>(true);
  const [weekdays, setWeekdays] = useState<string>('1111111');
  const [shared, setShared] = useState<boolean>(false);
  // const [endDate, setEndDate] = useState<Date | null>(null);
  // const [ongoing, setOngoing] = useState<boolean>(true);

  const sharedPress = () => setShared(!shared);
  const dailyPress = (b: boolean) => {
    setDaily(b);
    setWeekdays('1111110');
  };
  const weekDaysPress = (idx: number) => {
    const tmpWeekdays = weekdays.split('');
    tmpWeekdays[idx] = tmpWeekdays[idx] === '0' ? '1' : '0';
    setTimesPerWeek(tmpWeekdays.filter(d => d === '1').length);
    setWeekdays(tmpWeekdays.join(''));
  };
  // const ongoingPress = () => setOngoing(!ongoing);

  useEffect(() => {
    if (weekdays === '1111111') setDaily(true);
  }, [weekdays]);

  const onSubmit = () => {
    if (weekdays === '0000000') {
      Alert.alert(
        "Goal Incomplete",
        "Aim for at least once per week",
        [{ text: "OK" }],
      )
    } else if (goalName.length === 0) {
      Alert.alert(
        "Goal Incomplete",
        "Your goal Needs a name",
        [{ text: "OK" }],
      )
    } else {
      const goalToSave: GoalType = { name: goalName, timesPerWeek, weekdays, shared, daily };
      saveGoal(goalToSave)
        .then((newGoal) => {
          setCurrentGoal(newGoal);
          navigation.navigate('Goal Details');
        })
        .catch((err: {header: string, message: string}) => {
          Alert.alert(
            err.header,
            err.message,
            [{text: 'OK'}]
          )
        })
    }
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


            { daily ?
              <View style={styles.formRow}>
                <TouchableHighlight style={{width: '49%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={() => dailyPress(true)}>
                  <View style={daily ? styles.buttonSelected : styles.buttonNotSelected}>
                    <Text style={daily ? styles.buttonTextSelected : styles.buttonTextNotSelected }>Daily</Text>
                  </View>
                </TouchableHighlight>
                <View style={{width: '2%'}}></View>
                <TouchableHighlight style={{width: '49%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={() => dailyPress(false)}>
                  <View style={!daily ? styles.buttonSelected : styles.buttonNotSelected}>
                    <Text style={!daily ? styles.buttonTextSelected : styles.buttonTextNotSelected}>Select Days</Text>
                  </View>
                </TouchableHighlight>
              </View>
            :
              <View style={styles.formRow}>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, idx) =>
                  <TouchableHighlight key={`dow-${day}`}  style={{width: '12.5%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={_ => weekDaysPress(idx)}>
                    <View style={weekdays[idx] === '1' ? styles.buttonSelected : styles.buttonNotSelected}>
                      <Text style={weekdays[idx] === '1' ? styles.buttonTextSelected : styles.buttonTextNotSelected}>{day[0].toUpperCase()}</Text>
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            }
            <View style={styles.formRowSeparator}></View>

            {/* <View style={styles.formRow}>
              <TouchableHighlight style={{width: ongoing ? '100%' : '31%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={ongoingPress}>
                <View style={styles.buttonNotSelected}>
                  <Text style={styles.buttonTextNotSelected}>
                    {ongoing ? 'Set End Date' : 'Cancel'}
                  </Text>
                </View>
              </TouchableHighlight>
              {ongoing ? null :
                <>
                  <View style={styles.select}>
                    <RNPickerSelect
                      onValueChange={(value) => console.log(value)}
                      items={[
                        { label: '1', value: 1 },
                        { label: '2', value: 2 },
                      ]}
                    />
                  </View>
                  <View style={styles.select}>
                    <RNPickerSelect
                      onValueChange={(value) => console.log(value)}
                      items={[
                        { label: 'Weeks', value: 'weeks' },
                        { label: 'Months', value: 'months' },
                      ]}
                    />
                  </View>
                </>
              }
              </View>
            <View style={styles.formRowSeparator}></View> */}


            <View style={styles.formRow}>
              <TouchableHighlight style={{width: '48.5%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={sharedPress}>
                <View style={shared ? styles.buttonNotSelected : styles.buttonSelected}>
                  <Text style={shared ? styles.buttonTextNotSelected : styles.buttonTextSelected}>Private</Text>
                </View>
              </TouchableHighlight>
              <View style={{width: '3%'}}></View>
              <TouchableHighlight style={{width: '48.5%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={sharedPress}>
                <View style={shared ? styles.buttonSelected : styles.buttonNotSelected}>
                  <Text style={shared ? styles.buttonTextSelected : styles.buttonTextNotSelected}>Public</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.formRowSeparator}></View>


            <View style={styles.formRow}>
              <TouchableHighlight style={{width: '100%'}} activeOpacity={0.6} underlayColor='#DDDDDD' onPress={onSubmit}>
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
    height: 40,
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
  select: {
    width: '31%',
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#e75b4c',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  }
});
