import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Button from 'components/components/button';
import LoginForm from '../../../lib/components/loginForm';

import {connect} from 'react-redux';
import * as loginActions from '../../../redux/actions/login';

const Login = props => {
  const {navigation, do_login, login} = props;
  // Mount
  useEffect(() => {}, []);

  // Methods
  const doLogin = (user, password) => {
    do_login(user, password);
  };

  // Render
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignIn</Text>
      <View style={styles.formContainer}>
        <LoginForm doLogin={doLogin} login={login} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Forgot Password"
          action={() => navigation.navigate('ForgotPassword')}
          transparent
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Reset Password"
          action={() => navigation.navigate('ResetPassword')}
          transparent
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
    marginVertical: 7,
  },
  title: {
    fontSize: 36,
  },
  transparentButton: {
    backgroundColor: 'transparent',
  },
  formContainer: {
    paddingVertical: 30,
    flexDirection: 'row',
    margin: 15,
  },
});

const mapStateToProps = state => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    do_login: (user, password) => {
      dispatch(loginActions.do_login(user, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
