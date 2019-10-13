import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
// import Home from './src/containers/home';
import { AsyncStorage } from 'react-native';
import StackNav from './src/navigation/stack-navigator';
import reducers from './src/reducers';

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
));

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    const user = await AsyncStorage.getItem('user');
    if (value !== null && user != null) {
      const userObj = JSON.parse(user);
      console.log('token exists');
      store.dispatch({ type: 'AUTH_USER', payload: { user: userObj } });
    } else {
      console.log('token null');
      store.dispatch({ type: 'DEAUTH_USER' });
    }
  } catch (error) {
    console.log('error getting token', error);
  }
};

getData();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StackNav />
      </Provider>
    );
  }
}
