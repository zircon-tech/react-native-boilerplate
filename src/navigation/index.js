import React, {useEffect, useRef} from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {connect} from 'react-redux';

import Splash from '../views/screens/splash';

import MainNavigator from './MainNavigator';
import LoginNavigator from './LoginNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import Modal from 'components/components/modal';

import * as alertActions from '../redux/actions/alert';

import NavigationService from './NavigationServices';

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

const AppContainer = React.forwardRef((props, ref) => {
  const {alertObject, alert_clear} = props;

  // Methods
  const modalClose = () => {
    alert_clear();
  };

  return (
    <>
      <Modal
        {...alertObject}
        visible={alertObject && alertObject.message ? true : false}
        modalClose={modalClose}
      />
      <AppNavigator ref={ref} />
    </>
  );
});

const AppContainerNavigationService = props => (
  <AppContainer
    ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }}
  />
);

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainerNavigationService);
