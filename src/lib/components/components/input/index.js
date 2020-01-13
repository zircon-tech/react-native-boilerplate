import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import colors from '../../../configs/colors';

const Input = props => {
  // Props
  const {placeholder, initialValue = '', password = false} = props;

  // Hooks
  const [text, setText] = useState(initialValue);

  // Render
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={password}
      style={styles.inputStyle}
      onChangeText={text => setText(text)}
      value={text}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    paddingVertical: 7,
    marginVertical: 7,
    borderColor: colors.inputUnderline,
    borderBottomWidth: 1,
    flex: 1,
    height: 40,
  },
});

export default Input;
