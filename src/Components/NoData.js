import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {responsiveFontSize, responsiveHeight} from '../utilis/helperFunctions';

export const NoData = props => {
  const {text} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text ? text : 'No data to show!'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(100),
  },
  text: {fontSize: responsiveFontSize(2.5), fontWeight: '700'},
});
