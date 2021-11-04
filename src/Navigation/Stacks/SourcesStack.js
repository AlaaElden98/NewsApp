import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SourcesScreen from '../../Screens/SourcesScreen';
import DetailsScreen from '../../Screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export function SourcesStack() {
  return (
    <Stack.Navigator initialRouteName="SourcesScreen" screenOptions={{headerShown: false}}>
      <Stack.Screen name="SourcesScreen" component={SourcesScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
