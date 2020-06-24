import {StyleSheet, Text} from 'react-native';
import React from 'react';

const GText = ({style, ...props}) => (
  <Text style={[styles.textStyle, style]} {...props} />
);

const styles = StyleSheet.create({
  textStyle: {
    //fontStyle: ''
  },
});
export default GText;
