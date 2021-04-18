import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import SuggestedGoalCards from './SuggestedGoalCards';

export default function Suggestions(){
  return(
    <View style={styles.container}>
      <View style={styles.body}>
        <SuggestedGoalCards />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  body: {
    height: '90%',
    display: "flex",
    justifyContent: 'space-around',
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
});
