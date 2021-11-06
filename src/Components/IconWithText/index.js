import React from 'react';
import {View, Text, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveFontSize} from '../../utilis/helperFunctions';

import {styles} from './styles';
export const IconWithText = props => {
  const {iconName, iconSize, iconColor, text1, text2, onPress} = props;
  return (
    <View style={styles.iconWithTextContainer}>
      <MaterialCommunityIcons
        name={iconName}
        size={responsiveFontSize(iconSize)}
        color={iconColor}
        onPress={onPress ? onPress : null}
      />
      <Text style={styles.textBelowIcon}>{text1}</Text>
      {text2 && <Text style={styles.textBelowIcon}>{text2}</Text>}
    </View>
  );
};
