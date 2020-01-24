import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from 'configs/colors';
import RegisterForm from './form';

const Onboarding = props => {
  // Props
  const {navigation} = props;

  // Mount
  useEffect(() => {}, []);

  // Render
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <RegisterForm />
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
  },
  suggestContainer: {
    flexDirection: 'row'
  },
  loginButton: {
    color: colors.buttonLink,
  },
});

export default Onboarding;
