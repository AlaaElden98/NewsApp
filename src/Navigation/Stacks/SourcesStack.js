import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SourcesScreen from '../../screens/SourcesScreen';
import ResourceHeadlinesScreen from '../../screens/ResourceHeadlinesScreen'
import DetailsScreen from '../../screens/DetailsScreen'

const Stack = createNativeStackNavigator();

export function SourcesStack() {
  return (
    <Stack.Navigator initialRouteName="SourcesScreen" >
      <Stack.Screen name="SourcesScreen" component={SourcesScreen} options={{title:'Sources'}}/>
      <Stack.Screen name="ResourceHeadlinesScreen" component={ResourceHeadlinesScreen} options={{title:'Headlines from source'}}/>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{title:'Details'}}/>
    </Stack.Navigator>
  );
}
