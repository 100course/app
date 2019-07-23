import React from 'react';
import {AppRegistry, Text, View} from 'react-native';
import App from './components/App';
import Login from './components/Login';
import SalmooniRegister from './components/SalmooniRegister';
import SalmooniDashboard from './components/SalmooniDashboard';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import {createStackNavigator, createAppContainer} from 'react-navigation';


const store = createStore(reducer, applyMiddleware(thunk));

const AppNavigator = createStackNavigator(
  {
  Home: App,
  Login: Login,
  SalmooniRegister: SalmooniRegister,
  SalmooniDashboard: SalmooniDashboard
  },
  {
    initialRouteName : "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);






export default Application = () => {
  

  return(
    <Provider store={store}>
      <AppContainer/>
    </Provider>

  );
};



AppRegistry.registerComponent('Application', () => Application);