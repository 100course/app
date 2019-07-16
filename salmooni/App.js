import React from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Login from './components/Login';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';


const store = createStore(reducer);

export default App = () => {
  

  return(
    <Provider store={store}>
      <Login/>
    </Provider>

  );
};

AppRegistry.registerComponent('App', () => App);