import React from 'react'
import { View, Text } from 'react-native'

import useAppState from '../../state';

export default function GoalDetails() {
  const { currentGoal } = useAppState();

  return (
    <View>
      <Text>{currentGoal.name}</Text>
    </View>
  )
}
