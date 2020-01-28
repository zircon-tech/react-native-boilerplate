import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import Input from 'components/components/input';
import Button from 'components/components/button';

const EmailForm = props => {
  // Props
  const {doFrogot, forgot} = props;

  // Hooks
  const [email, setEmail] = useState('');

  // Mount
  useEffect(() => {}, []);

  // Render
  return (
    <>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={[styles.inputContainer, styles.forgotButton]}>
        <Button
          title={'Get code'}
          loading={forgot.loading}
          action={() => doFrogot(email)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  forgotButton: {
    justifyContent: 'flex-end',
  },
});

export default EmailForm;
