import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {responsiveFontSize} from '../../utilis/helperFunctions';
import {styles} from './styles';

export const IconWithText = props => {
  const {
    iconName,
    iconSize,
    iconColor,
    text1,
    text2,
    onPress,
    backgroundColor,
  } = props;
  return (
    <View style={[{...styles.iconWithTextContainer, backgroundColor}]}>
      <MaterialCommunityIcons
        name={iconName}
        size={responsiveFontSize(iconSize)}
        color={iconColor}
        onPress={onPress ? onPress : null}
      />
      <Text style={styles.textBelowIcon}>{text1 ? text1 : 'Unknown'}</Text>
      {text2 && <Text style={styles.textBelowIcon}>{text2}</Text>}
    </View>
  );
};

IconWithText.propTypes = {
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
};
