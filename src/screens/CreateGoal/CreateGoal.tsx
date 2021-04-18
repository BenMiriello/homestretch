import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import useAppState from '../../state';

export default function CreateGoal() {
  const { goalName } = useAppState();

  return (
    <View>
      <Text>{goalName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({});
