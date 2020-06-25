import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/stores';
import MainNavigation from './src/navigation';
import GText from 'components/components/gText';

const App = () => (
  <Provider store={store}>
    <MainNavigation />
  </Provider>
);

export default App;
