import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CreateGoal({goalTitle}: {goalTitle: string}) {
  return (
    <View>
      <Text>{goalTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({});
