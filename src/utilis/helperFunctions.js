import {Dimensions} from 'react-native';
import {isoCountries} from './isoCountries';

const percentageCalculation = (max, val) => max * (val / 100);

/**
 * @param {number} height
 * @param {number} width
 * @param {number} val
 * @returns the %val of the screen size
 */
const fontCalculation = (height, width, val) => {
  const widthDimension = height > width ? width : height;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percentageCalculation(
    Math.sqrt(
      Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2),
    ),
    val,
  );
};
export const responsiveFontSize = val => {
  const {height, width} = Dimensions.get('window');
  return fontCalculation(height, width, val);
};

/**
 *
 * @param {number} val
 * @returns %val from the screen width
 */
export const responsiveWidth = val => {
  const {width} = Dimensions.get('window');
  return percentageCalculation(width, val);
};

export const responsiveHeight = val => {
  const {height} = Dimensions.get('window');
  return percentageCalculation(height, val);
};

export const getDateAndTime = pastTime => {
  let time = new Date(pastTime).toLocaleTimeString('en');
  const date = new Date(pastTime).toLocaleDateString();
  return {date: date, time: time.slice(0, 5)};
};

export const getCountryName = countryCode => {
  countryCode = countryCode.toUpperCase();
  if (isoCountries.hasOwnProperty(countryCode)) {
    return isoCountries[countryCode];
  } else {
    return countryCode;
  }
};

export const getCurrentDate = () => {
  const currentdate = new Date();
  const date =
    currentdate.getDate() +
    '/' +
    (currentdate.getMonth() + 1) +
    '/' +
    currentdate.getFullYear();
  return date;
};

export const getCurrentTime = () => {
  const currentdate = new Date();
  const time = currentdate.getHours() + ':' + currentdate.getMinutes();
  return time;
};
