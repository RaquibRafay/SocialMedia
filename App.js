import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './src/navigator/MainNavigator';
import { combineReducers, createStore } from 'redux';
import { profileReducer } from './src/store/reducers/profileReducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  profileReducer: profileReducer
})

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  )
};
export default App;