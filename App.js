import React, {useState} from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import ReduxThunk from 'redux-thunk';

import Ai4Navigator from './navigation/Ai4Navigator';

import userReducer from './store/reducers/user';
import storeReducer from './store/reducers/store';
import orderReducer from './store/reducers/order';

const rootReducer = combineReducers ({
  user: userReducer,
  store: storeReducer,
  order: orderReducer,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.log('Problem Loading Fonts')}
      />
    )
  }
  return (
    <Provider store={store}><Ai4Navigator /></Provider>
  );
}
