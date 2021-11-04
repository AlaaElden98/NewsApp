import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {DisplayText} from '../components/DisplayText';
import {List} from '../components/List';

const Tab = createMaterialTopTabNavigator();

const TopHeadlinesScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Egypt"
        component={List}
        initialParams={{country: 'eg', isHeadlines: true}}
      />
      <Tab.Screen
        name="UAE"
        component={List}
        initialParams={{country: 'ae', isHeadlines: true}}
      />
    </Tab.Navigator>
  );
};

export default TopHeadlinesScreen;
