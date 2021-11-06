import {StyleSheet} from 'react-native';
import {responsiveFontSize} from '../../utilis/helperFunctions';

export const styles = StyleSheet.create({
  iconWithTextContainer: {justifyContent: 'center', alignItems: 'center'},
  textBelowIcon: {fontSize: responsiveFontSize(2)},
});
