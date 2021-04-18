import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import SuggestedGoalCards from './SuggestedGoalCards';

export default function Suggestions(){
  return(
    <ScrollView>
      <View style={styles.container}>
        <SuggestedGoalCards  />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
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
