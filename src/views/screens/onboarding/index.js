import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from 'configs/colors';
import RegisterForm from './form';
import validate from 'utils/validate';

import {connect} from 'react-redux';
import * as alertActions from '../../../redux/actions/alert';
import * as registerActions from '../../../redux/actions/register';

const Onboarding = props => {
  // Props
  const {navigation, do_alert, do_register, register} = props;

  console.log('=====================')
  console.log( 'register', register )
  console.log('=====================')

  // Mount
  useEffect(() => {}, []);

  const doRegister = (username, name, lastName, email, phone, password) => {
    const valid = validate({username, name, lastName, email, phone, password});

    if (valid === null) {
      do_register(email, password);
    } else {
      const messages = `${Object.keys(valid)
        .map(e => valid[e])
        .flat()
        .join('.\n')}.\n`;
      do_alert(messages);
    }
  };

  // Render
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <RegisterForm doRegister={doRegister} register={register} />
      </View>

      <View style={styles.suggestContainer}>
        <Text>Alrready have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
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
    flexDirection: 'row',
  },
  loginButton: {
    color: colors.buttonLink,
  },
});

const mapStateToProps = state => {
  return {
    register: state.register,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    do_register: (username, name, lastName, email, phone, password) => {
      dispatch(
        registerActions.doRegister(
          username,
          name,
          lastName,
          email,
          phone,
          password,
        ),
      );
    },
    do_alert: message => {
      dispatch(alertActions.error(message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
