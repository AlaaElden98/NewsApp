import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ButtomTabs} from './src/Navigation/ButtomTabs';

export default function App() {
  return (
    <NavigationContainer>
      <ButtomTabs />
    </NavigationContainer>
  );
}
