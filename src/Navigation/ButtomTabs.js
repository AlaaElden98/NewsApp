import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HistoryScreen from '../Screens/HistoryScreen';
import {TopHeadlinesStack} from './Stacks/TopHeadlinesStack';
import {SourcesStack} from './Stacks/SourcesStack';

const Tab = createBottomTabNavigator();

export const ButtomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="TopHeadlinesStack">
      <Tab.Screen
        name="TopHeadlinesStack"
        component={TopHeadlinesStack}
        options={{title: 'Top headlines'}}
      />
      <Tab.Screen
        name="SourcesStack"
        component={SourcesStack}
        options={{title: 'Sources'}}
      />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};
