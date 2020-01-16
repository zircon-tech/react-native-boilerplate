import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Input from '../components/input';
import Button from '../components/button';

const Component = props => {
  // Props
  const {doLogin, login} = props;

  // Hooks
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  // Render
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input placeholder="User" value={user} onChangeText={setUser} />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Password"
          password
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={[styles.inputContainer, styles.loginButton]}>
        <Button
          title={'Login'}
          loading={login.loading}
          action={() => doLogin(user, password)}
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
    justifyContent: 'flex-end',
  },
});

export default Component;
