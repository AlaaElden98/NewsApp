import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TopHeadlinesScreen from '../../screens/TopHeadlinesScreen';
import DetailsScreen from '../../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export function TopHeadlinesStack() {
  return (
    <Stack.Navigator
      initialRouteName="TopHeadlines"
     >
      <Stack.Screen name="TopHeadlinesScreen" component={TopHeadlinesScreen} options={{title:'Top Headlines'}}/>
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  );
}
