import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utilis/helperFunctions';
export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#f7f7f7',
    margin: 6,
    padding: 5,
    flex: 1,
    borderRadius: 25,
  },
  image: {
    width: responsiveWidth(93),
    height: responsiveHeight(30),
    borderRadius: 20,
    alignSelf: 'center',
    resizeMode: 'cover',
    margin: 5,
  },
  noImage:{
    width: responsiveWidth(93),
    height: responsiveHeight(30),
    alignSelf: 'center',
    resizeMode: 'contain',
    backgroundColor: 'white',
    margin: 5,
  },
  title: {
    fontSize: responsiveFontSize(2.2),
    lineHeight: responsiveHeight(4),
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  author: {
    fontSize: responsiveFontSize(2),
    marginLeft: 10,
    marginTop: 15,
    fontWeight: 'bold',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  timeText: {
    fontSize: responsiveFontSize(1.8),
    marginLeft:3
  },
  dateText:{
    fontSize: responsiveFontSize(1.8),
    marginRight:8
  }
});
