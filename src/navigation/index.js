import 'react-native-gesture-handler';
import React from 'react';
import {connect} from 'react-redux';
import GText from 'components/components/gText';
import GButton from 'components/components/gButton';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../views/screens/splash';

import Modal from 'components/components/modal';
import Main from '../views/screens/main';

import * as alertActions from '../redux/actions/alert';
import Onboarding from '../views/screens/onboarding';
import SignIn from '../views/screens/login';
import ForgotPassword from '../views/screens/login/forgot';
import ResetPassword from '../views/screens/login/reset';
import NavigationServices from './NavigationServices';

const StackMain = createStackNavigator();
const StackAuth = createStackNavigator();
const StackUnauth = createStackNavigator();

const AppContainer = ({alertObject, alert_clear, session}) => (
  <>
    <Modal
      {...alertObject}
      visible={Boolean(alertObject && alertObject.message)}
      modalClose={() => {
        alert_clear();
      }}
    />
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationServices.setTopLevelNavigator(navigatorRef);
      }}>
      <StackMain.Navigator initialRouteName="Splash" headerMode="screen">
        <StackMain.Screen name="Splash" component={Splash} />
        <StackMain.Screen name="Main">
          {() =>
            session.currentUser ? (
              <StackAuth.Navigator initialRouteName="Main" headerMode="screen">
                <StackAuth.Screen
                  name="Main"
                  component={Main}
                  options={({navigation, route}) => ({
                    headerTitle: () => <GText>Main</GText>,
                    headerRight: () => (
                      <GButton onPress={() => navigation.goBack()}>
                        Go Back
                      </GButton>
                    ),
                  })}
                />
              </StackAuth.Navigator>
            ) : (
              <StackUnauth.Navigator
                initialRouteName="SignIn"
                headerMode="screen">
                <StackUnauth.Screen
                  name="SignIn"
                  options={{title: 'SignIn'}}
                  component={SignIn}
                />
                <StackUnauth.Screen
                  name="ForgotPassword"
                  options={{title: 'ForgotPassword'}}
                  component={ForgotPassword}
                />
                <StackUnauth.Screen
                  name="ResetPassword"
                  options={{title: 'ResetPassword'}}
                  component={ResetPassword}
                />
                <StackUnauth.Screen
                  name="Onboarding"
                  options={{title: 'Onboarding'}}
                  component={Onboarding}
                />
              </StackUnauth.Navigator>
            )
          }
        </StackMain.Screen>
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
