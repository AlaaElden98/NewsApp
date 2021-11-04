import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HistoryScreen from '../screens/HistoryScreen';
import {TopHeadlinesStack} from './stacks/TopHeadlinesStack';
import {SourcesStack} from './stacks/SourcesStack';
import {dodgerBlue, lightDodgerBlue} from '../utilis/colors';
import {responsiveFontSize} from '../utilis/helperFunctions';

const Tab = createBottomTabNavigator();

export const ButtomTabs = () => {
  const iconSize = responsiveFontSize(3.8);
  const fontSize = responsiveFontSize(1.8);
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
          tabBarLabelStyle: {fontSize: fontSize},
          tabBarIcon: ({color}) => (
            <MaterialIcons name="trending-up" size={iconSize} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SourcesStack"
        component={SourcesStack}
        options={{
          title: 'Sources',
          tabBarLabelStyle: {fontSize: fontSize},
          tabBarIcon: ({color}) => (
            <MaterialIcons name="source" size={iconSize} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: 'History',
          tabBarLabelStyle: {fontSize: fontSize},
          tabBarIcon: ({color}) => (
            <MaterialIcons name="history" size={iconSize} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
