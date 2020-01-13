import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import colors from '../../configs/colors';

const Button = props => {
  // Props
  const {title, action} = props;

  // Hooks
  // const [ newState, setNewState ] = useState( null );

  // Mount
  useEffect(() => {}, []);

  // Render
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={action}>
        <Text style={styles.buttonText}>{ title }</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.buttonBackground,
  },
  buttonText: {color: colors.buttonText},
});

export default Button;
