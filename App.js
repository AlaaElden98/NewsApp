import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ButtomTabs} from './src/navigation/ButtomTabs';

export default function App() {
  return (
    <NavigationContainer>
      <ButtomTabs />
    </NavigationContainer>
  );
}
