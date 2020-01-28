import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import InputCode from 'components/components/inputCode';
import Button from 'components/components/button';

import {forgotCode} from 'configs';

const EmailForm = props => {

  const {codeLength} = forgotCode;

  // Props
  const {doFrogot, forgot} = props;


  // Mount
  useEffect(() => {}, []);

  // Render
  return (
    <>
      <View style={styles.inputContainer}>
        <InputCode codeLength={4} />
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
