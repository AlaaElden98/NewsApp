import {StyleSheet} from 'react-native';

import {responsiveFontSize} from '../../utilis/helperFunctions';

export const styles = StyleSheet.create({
  iconWithTextContainer: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  textBelowIcon: {fontSize: responsiveFontSize(2), numberOfLines: 1},
});
