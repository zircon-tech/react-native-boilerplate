import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/stores';
import MainNavigation from './src/navigation';
import GText from 'components/components/gText';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GText>Hola</GText>
        {/*<MainNavigation />*/}
      </Provider>
    );
  }
}

export default App;
