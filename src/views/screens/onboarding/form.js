import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import Input from 'components/components/input';
import Button from 'components/components/button';

const RegisterForm = props => {
  // Props
  const {doRegister} = props;

  // Hooks
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // Mount
  useEffect(() => {}, []);

  // Render
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input placeholder="User" value={user} onChangeText={setUser} />
      </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Name" value={name} onChangeText={setName} />
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="LastName"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
      </View>

      <View style={styles.inputContainer}>
        <Input placeholder="LastName" value={phone} onChangeText={setPhone} />
      </View>

      <View style={styles.inputContainer}>
        <Input
          password
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={[styles.inputContainer, styles.registerButton]}>
        <Button
          title={'Register'}
          loading={false}
          action={() =>
            doRegister(user, name, lastName, email, phone, password)
          }
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
  registerButton: {
    justifyContent: 'flex-end',
  },
});

export default RegisterForm;
