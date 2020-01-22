import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import colors from '../../../configs/colors';

const Spinner = props => {
  // Props
  const {color = colors.spinnerDefaultColor, size = 'small'} = props;

  // Render
  return <ActivityIndicator size={size} color={color} />;
};

const styles = StyleSheet.create({});

export default Spinner;
