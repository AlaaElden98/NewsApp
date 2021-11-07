import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {responsiveFontSize} from '../utilis/helperFunctions';

export const EndOfResults = props => {
  const {text} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text ? text : 'End of results!'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', padding: 10},
  text: {fontSize: responsiveFontSize(2), fontWeight: '700'},
});
