import React from 'react';
import {View, Text} from 'react-native';

export const DisplayText = ({route}) => {
  const data = route.params.country
  return (
    <View>
      <Text>Display text {data}</Text>
    </View>
  );
};

