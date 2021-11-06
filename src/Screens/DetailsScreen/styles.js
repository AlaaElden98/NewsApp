import {StyleSheet} from 'react-native';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilis/helperFunctions';
import {lightDodgerBlue} from '../../utilis/colors';

export const styles = StyleSheet.create({
  container: {flex: 1, padding: 15, backgroundColor: 'white'},
  image: {
    width: responsiveWidth(95),
    height: responsiveHeight(35),
    borderRadius: 20,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: responsiveFontSize(2.5),
    color: 'black',
    fontWeight: '400',
    textAlign: 'justify',
    lineHeight: responsiveHeight(4.3),
  },
  seperator: {borderColor: lightDodgerBlue, borderWidth: 1, margin: 5},
  content: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    textAlign: 'justify',
    marginBottom: 5,
    lineHeight: responsiveHeight(3.8),
  },
  additionalInfo: {flexDirection: 'row', justifyContent: 'space-between'},
  iconWithTextContainer: {justifyContent: 'center', alignItems: 'center'},
  textBelowIcon: {fontSize: responsiveFontSize(2)},
  noImage: {
    width: responsiveWidth(95),
    height: responsiveHeight(35),
    resizeMode: 'center',
    alignSelf: 'center',
  },
});
