import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TopHeadLinesScreen from '../Screens/TopHeadlinesScreen';
import SourcesScreen from '../Screens/SourcesScreen';
import HistoryScreen from '../Screens/HistoryScreen';

const Tab = createBottomTabNavigator();

export const ButtomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="TopHeadlines">
      <Tab.Screen
        name="TopHeadlines"
        component={TopHeadLinesScreen}
        options={{title: 'Top headlines'}}
      />
      <Tab.Screen name="Sources" component={SourcesScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};
