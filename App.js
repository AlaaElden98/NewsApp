import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {ButtomTabs} from './src/navigation/ButtomTabs';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ButtomTabs />
      </NavigationContainer>
    </Provider>
  );
}
