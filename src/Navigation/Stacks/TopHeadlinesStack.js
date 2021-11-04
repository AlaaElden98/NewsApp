import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TopHeadlinesScreen from '../../Screens/TopHeadlinesScreen';
import DetailsScreen from '../../Screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export function TopHeadlinesStack() {
  return (
    <Stack.Navigator initialRouteName='TopHeadlines' screenOptions={{headerShown: false}}>
      <Stack.Screen name="TopHeadlinesScreen" component={TopHeadlinesScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
