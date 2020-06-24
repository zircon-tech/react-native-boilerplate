import 'react-native-gesture-handler';
import React from 'react';
import GText from 'components/components/gText';
import GButton from 'components/components/gButton';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import Splash from '../views/screens/splash';

import Modal from 'components/components/modal';
import Main from '../views/screens/main';

import * as alertActions from '../redux/actions/alert';
import Onboarding from '../views/screens/onboarding';
import SignIn from '../views/screens/login';
import ForgotPassword from '../views/screens/login/forgot';
import ResetPassword from '../views/screens/login/reset';

const StackMain = createStackNavigator();

const AppContainer = ({alertObject, alert_clear, session}) => (
  <>
    <Modal
      {...alertObject}
      visible={Boolean(alertObject && alertObject.message)}
      modalClose={() => {
        alert_clear();
      }}
    />
    <NavigationContainer>
      <StackMain.Navigator initialRouteName="Splash" headerMode="screen">
        <StackMain.Screen name="Splash" component={Splash} />
        {session.currentUser ? (
          <StackMain.Navigator initialRouteName="Main" headerMode="screen">
            <StackMain.Screen
              name="Main"
              component={Main}
              options={({navigation, route}) => ({
                headerTitle: () => <GText>Main</GText>,
                headerRight: () => (
                  <GButton onPress={() => navigation.goBack()}>Go Back</GButton>
                ),
              })}
            />
          </StackMain.Navigator>
        ) : (
          <StackMain.Navigator initialRouteName="SignIn" headerMode="screen">
            <StackMain.Screen
              name="SignIn"
              options={{title: 'SignIn'}}
              component={SignIn}
            />
            <StackMain.Screen
              name="ForgotPassword"
              options={{title: 'ForgotPassword'}}
              component={ForgotPassword}
            />
            <StackMain.Screen
              name="ResetPassword"
              options={{title: 'ResetPassword'}}
              component={ResetPassword}
            />
            <StackMain.Screen
              name="Onboarding"
              options={{title: 'Onboarding'}}
              component={Onboarding}
            />
          </StackMain.Navigator>
        )}
      </StackMain.Navigator>
    </NavigationContainer>
    {/*<AppNavigator ref={navigatorRef => {*/}
    {/*  NavigationService.setTopLevelNavigator(navigatorRef);*/}
    {/*}} />*/}
  </>
);

export default connect(
  (state) => ({
    alertObject: state.alert,
    session: state.session,
  }),
  (dispatch) => ({
    alert_clear: () => {
      dispatch(alertActions.clear());
    },
  }),
)(AppContainer);
