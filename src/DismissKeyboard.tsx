import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function DismissKeyboard({children}: {children: React.ReactChild}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )
};

