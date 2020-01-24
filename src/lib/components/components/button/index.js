import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Spinner from '../spinner';

import colors from '../../../configs/colors';

const Button = props => {
  // Props
  const {title, action, transparent, loading} = props;

  // Hooks
  // const [ newState, setNewState ] = useState( null );

  // Variables
  const backgroundColor = transparent ? null : colors.buttonBackground;
  const color = transparent ? '#333' : colors.buttonText;

  // Render
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, {backgroundColor}]}
      onPress={action}
      disabled={loading}
      >
      {loading ? (
        <Spinner color={color} />
      ) : (
        <Text style={[styles.buttonText, {color}]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {},
});

export default Button;
