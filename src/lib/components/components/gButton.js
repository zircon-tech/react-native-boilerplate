import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import colors from 'configs/colors';

const COLOR = colors.buttonText;
const BACKGROUND_COLOR = colors.buttonBackground;

const Component = ({style, children, ...props}) => (
  <TouchableOpacity style={[styles.container, style]} {...props}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: COLOR,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Component;
