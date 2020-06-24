import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {minSplashTime} from 'configs/splash';

const Component = ({navigation, load_catalogs, jwtToken}) => {
  StatusBar.setHidden(true);
  const tm = useRef(null);
  useEffect(() => {
    const minTime = new Promise(resolve => {
      tm.current = setTimeout(resolve, minSplashTime);
    });
    Promise.all([minTime, load_catalogs()]).then(() => {
      if (jwtToken) {
        navigation.navigate('Main');
      } else {
        navigation.navigate('Login');
      }
    });
    return () => clearTimeout(tm.current);
  }, [jwtToken, navigation, load_catalogs]);


  // Render
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
  },
  text: {
    color: 'white',
    fontSize: 36,
  },
});

export default connect(
  ({
     session: {jwtToken, currentUser},
   }) => ({
    jwtToken,
    currentUser,
  }),
  dispatch => ({
    load_catalogs: () => dispatch(globalActions.loadCatalogs()),
  }),
)(Component);
