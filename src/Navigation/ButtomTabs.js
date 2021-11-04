import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HistoryScreen from '../screens/HistoryScreen';
import {TopHeadlinesStack} from './stacks/TopHeadlinesStack';
import {SourcesStack} from './stacks/SourcesStack';
import {dodgerBlue, lightDodgerBlue} from '../utilis/colors';

const Tab = createBottomTabNavigator();

export const ButtomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="TopHeadlinesStack"
      screenOptions={{
        tabBarActiveTintColor: dodgerBlue,
        tabBarInactiveTintColor: lightDodgerBlue,
      }}>
      <Tab.Screen
        name="TopHeadlinesStack"
        component={TopHeadlinesStack}
        options={{
          title: 'Top headlines',
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({color}) => (
            <MaterialIcons name="trending-up" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SourcesStack"
        component={SourcesStack}
        options={{
          title: 'Sources',
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({color}) => (
            <MaterialIcons name="source" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: 'History',
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({color}) => (
            <MaterialIcons name="history" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
