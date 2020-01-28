import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const InputChar = props => {
  // Props
  const {inputRef} = props;

  // Render
  return (
    <TextInput
      placeholder="0"
      placeholderTextColor="#212121"
      style={styles.inputStyle}
      maxLength={1}
      ref={r => inputRef && inputRef(r)}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#212121',
    marginHorizontal: 5,
    fontSize: 29,
  },
});

export default InputChar;
