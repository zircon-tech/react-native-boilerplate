import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import Input from '../components/input';

const Component = props => {
  // Props
  const {action} = props;

  // Hooks
  // const [ newState, setNewState ] = useState( null );

  // Mount
  useEffect(() => {}, []);

  // Render
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input placeholder="User" />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Password" password />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
  }
});

export default Component;
