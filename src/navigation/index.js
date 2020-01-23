import React, {useEffect} from 'react';
import NavigationService from '../navigation/NavigationServices';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {connect} from 'react-redux';

import Splash from '../views/screens/splash';

import MainNavigator from './MainNavigator';
import LoginNavigator from './LoginNavigator';
import OnboardingNavigator from './OnboardingNavigator';

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
  const {alertObject} = props;

  useEffect(() => {
    if (alertObject && alertObject.message !== undefined) {
      alert(alertObject.message);
    }
  }, [alertObject]);

  return (
    <>
      <AppNavigator
        ref={nav => {
          this.navigator = nav;
          NavigationService.setTopLevelNavigator(nav);
        }}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    alertObject: state.alert,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {};
// };

export default connect(mapStateToProps, null)(AppContainer);
