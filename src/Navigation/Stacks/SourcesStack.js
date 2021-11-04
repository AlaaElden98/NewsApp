import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SourcesScreen from '../../screens/SourcesScreen';
import DetailsScreen from '../../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export function SourcesStack() {
  return (
    <Stack.Navigator initialRouteName="SourcesScreen" screenOptions={{headerShown: false}}>
      <Stack.Screen name="SourcesScreen" component={SourcesScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
