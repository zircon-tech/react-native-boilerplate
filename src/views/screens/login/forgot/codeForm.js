import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import InputCode from 'components/components/inputCode';
import Button from 'components/components/button';

import {forgotCode} from 'configs';

const EmailForm = props => {
  const {codeLength} = forgotCode;

  // Props
  const {doCheckCode, forgot} = props;

  // Hooks
  const [code, setCode] = useState('');

  // Method
  useEffect( () => {
    if( code.length === codeLength){
      doCheckCode(forgot.email, code);
    }
  }, [code])



  // Render
  return (
    <>
      <View style={styles.inputContainer}>
        <InputCode codeLength={codeLength} onChangeCode={ text => {text && setCode(text)} } />
      </View>
      <View style={[styles.inputContainer, styles.forgotButton]}>
        {/* <Button
          title={'Change password'}
          loading={forgot.loading}
          action={() => doCheckCode(forgot.email, code) }
        /> */}
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
    marginVertical: 15,
  },
  forgotButton: {
    justifyContent: 'center',
  },
});

export default EmailForm;
