import React, { useState, useEffect } from 'react';
import {View, StyleSheet} from 'react-native';


const RegisterForm = props => {

  // Props
  // const { all, props, here } = props;

  // Hooks
  const [ newState, setNewState ] = useState( null );

  // Mount
  useEffect(() => {
    
  }, []);
  
  // Render
  return (
    <View style={ styles.container }>
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default RegisterForm;