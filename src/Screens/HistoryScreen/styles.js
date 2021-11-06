import {StyleSheet} from 'react-native';

import {responsiveFontSize} from '../../utilis/helperFunctions';

export const styles = StyleSheet.create({
  container: {flex: 1, padding: 15, backgroundColor: 'white', borderRadius: 20},
  title: {
    fontSize: responsiveFontSize(2.2),
    textAlign: 'center',
    marginBottom: 5,
    color: 'black',
  },
  sourceAndAuthor: {
    fontSize: responsiveFontSize(2),
    marginBottom: 3,
    fontWeight: '500',
  },
  dateAndTime: {fontSize: responsiveFontSize(1.8)},
});
