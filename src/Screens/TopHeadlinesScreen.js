import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {DisplayText} from '../components/DisplayText';
import {TopHeadlinesList} from '../components/Lists/TopHeadlinesList';

const Tab = createMaterialTopTabNavigator();

const TopHeadlinesScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Egypt"
        component={TopHeadlinesList}
        initialParams={{country: 'eg'}}
      />
      <Tab.Screen
        name="UAE"
        component={TopHeadlinesList}
        initialParams={{country: 'ae'}}
      />
    </Tab.Navigator>
  );
};

export default TopHeadlinesScreen;
