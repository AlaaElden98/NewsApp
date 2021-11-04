import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import { DisplayText } from '../Components/DisplayText';

const Tab = createMaterialTopTabNavigator();

const TopHeadlinesScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Egypt"
        component={DisplayText}
        initialParams={{country: 'eg'}}
      />
      <Tab.Screen
        name="UAE"
        component={DisplayText}
        initialParams={{country: 'ae'}}
      />
    </Tab.Navigator>
  );
};

export default TopHeadlinesScreen;
