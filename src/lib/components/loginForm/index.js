import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import Input from '../components/input';
import Button from '../components/button';

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

      <View style={[styles.inputContainer, styles.loginButton]}>
        <Button
          title="Login"
          action={() => alert("Login!")}
        />
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
  },
  loginButton: {
    justifyContent: 'flex-end'
  },
});

export default Component;
