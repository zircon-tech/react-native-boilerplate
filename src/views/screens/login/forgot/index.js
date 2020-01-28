import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {connect} from 'react-redux';
import * as loginActions from '../../../../redux/actions/login';
import * as alertActions from '../../../../redux/actions/alert';

import EmailForm from './emailForm';
import CodeForm from './codeForm';

import validate from 'utils/validate';

const Login = props => {
  // Props
  const {navigation, do_alert, do_forgot, forgot} = props;

  // Mount
  useEffect(() => {}, []);

  // Methods
  const doFrogot = email => {
    // Validate email and password
    const valid = validate({email});

    if (valid === null) {
      do_forgot(email);
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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Forgot</Text>
      </View>
      <View style={styles.formContainer}>
        {forgot.email ? (
          <CodeForm forgot={forgot} doFrogot={doFrogot} />
        ) : (
          <EmailForm forgot={forgot} doFrogot={doFrogot} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  title: {
    fontSize: 36,
  },
  transparentButton: {
    backgroundColor: 'transparent',
  },
  formContainer: {
    paddingVertical: 30,
    margin: 15,
    flex: 1,
  },
});

const mapStateToProps = state => {
  return {
    forgot: state.forgot,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    do_forgot: email => {
      dispatch(loginActions.doForgotPassword(email));
    },
    do_alert: message => {
      dispatch(alertActions.error(message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
