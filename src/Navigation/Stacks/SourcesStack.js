import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SourcesScreen from '../../screens/SourcesScreen';
import ResourceHeadlinesScreen from '../../screens/ResourceHeadlinesScreen'
import DetailsScreen from '../../screens/DetailsScreen'

const Stack = createNativeStackNavigator();

export function SourcesStack() {
  return (
    <Stack.Navigator initialRouteName="SourcesScreen" >
      <Stack.Screen name="SourcesScreen" component={SourcesScreen} />
      <Stack.Screen name="ResourceHeadlinesScreen" component={ResourceHeadlinesScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
