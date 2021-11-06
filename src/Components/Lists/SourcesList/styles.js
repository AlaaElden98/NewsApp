import { StyleSheet } from 'react-native';
import {responsiveFontSize} from '../../../utilis/helperFunctions';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    margin: 6,
    borderRadius: 25,
    padding: 8,
    alignItems: 'center',
  },
  name: {
    fontSize: responsiveFontSize(2.8),
    color: 'black',
    fontWeight: '500',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  description: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  additionalInfo: {
    textTransform: 'capitalize',
    alignSelf: 'flex-end',
    marginLeft: 10,
    fontSize: responsiveFontSize(1.8),
  },
});
