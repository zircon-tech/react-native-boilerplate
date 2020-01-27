import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from 'configs/colors';
import RegisterForm from './form';
import validate from 'utils/validate';

const Onboarding = props => {
  // Props
  const {navigation} = props;

  // Mount
  useEffect(() => {}, []);

  const doRegister = (user, name, lastName, email, phone, password) => {
    const valid = validate({user, name, lastName, email, phone, password});
    console.log('=====================')
    console.log( 'valid', valid )
    console.log('=====================')
  }

  // Render
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <RegisterForm doRegister={doRegister} />
      </View>

      <View style={styles.suggestContainer}>
        <Text>Alrready have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButton}>LogIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  formContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  suggestContainer: {
    flexDirection: 'row'
  },
  loginButton: {
    color: colors.buttonLink,
  },
});

export default Onboarding;
