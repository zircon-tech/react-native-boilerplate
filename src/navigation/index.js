import React, {useEffect} from 'react';
import {Alert} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {connect} from 'react-redux';

import Splash from '../views/screens/splash';

import MainNavigator from './MainNavigator';
import LoginNavigator from './LoginNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import alertActions from '../redux/actions/alert';

const MainNavigation = createSwitchNavigator(
  {
    Splash: {
      screen: Splash,
    },
    Main: MainNavigator,
    Login: LoginNavigator,
    Onboarding: OnboardingNavigator,
  },
  {
    initialRouteName: 'Splash',
  },
);

const AppNavigator = createAppContainer(MainNavigation);

const AppContainer = props => {
  const {alertObject, alert_clear} = props;

  useEffect(() => {
    if (alertObject && alertObject.message !== null && alertObject.message !== undefined) {
      Alert.alert(
        'Error',
        alertObject.message,
        [{text: 'OK', onPress: () => alert_clear()}],
        {cancelable: false},
      );
    }
  }, [alertObject]);

  return (
    <>
      <AppNavigator />
    </>
  );
};

const mapStateToProps = state => {
  return {
    alertObject: state.alert,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    alert_clear: () => {
      dispatch(alertActions.clear());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
