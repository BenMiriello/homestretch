import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useAsyncStorage from '../../hooks/asyncStorage';

interface Props {
  
}

const GoalsIndex = (props: Props) => {
  const { storedGoals } = useAsyncStorage();

  useEffect(() => {
    console.log(storedGoals)
  }, [storedGoals])
  
  return (
    <View>
      {Object.keys(storedGoals).map(key => (
        <View key={key}>
          <Text>{storedGoals[key].name}</Text>
          <Text>{storedGoals[key].timesPerWeek}</Text>
          <Text>{storedGoals[key].shared ? 'Public' : 'Private'}</Text>
          <View style={{height: 20}}></View>
        </View>
      ))}
    </View>
  )
}

export default GoalsIndex

const styles = StyleSheet.create({})
