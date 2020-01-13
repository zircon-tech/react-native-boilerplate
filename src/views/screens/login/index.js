import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Button from 'components/button';

const SignIn = props => {
  const {navigation} = props;
  // Mount
  useEffect(() => {}, []);

  // Render
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignIn</Text>
      <View style={styles.formContainer}></View>
      <View style={styles.buttonContainer}>
        <Button
          title="Forgot Password"
          action={() => navigation.navigate('ForgotPassword')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Reset Password"
          action={() => navigation.navigate('ResetPassword')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          action={() => navigation.navigate('Onboarding')}
          transparent
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 20,
  },
  title: {
    fontSize: 36,
  },
  transparentButton: {
    backgroundColor: 'transparent',
  },
  formContainer: {
    backgroundColor: 'red',
    paddingVertical: 30,
  },
});

export default SignIn;
