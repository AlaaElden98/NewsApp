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

/**
 * @param {string} pastTime
 * @returns {object} {date:'DD/MM/YY', time: 'HH:MM'}
 */
export const getDateAndTime = pastTime => {
  let time = new Date(pastTime).toLocaleTimeString('en');
  const date = new Date(pastTime).toLocaleDateString();
  return {date: date, time: time.slice(0, 5)};
};

/**
 * @param {string} countryCode
 * @returns Country name -If exist-
 */
export const getCountryName = countryCode => {
  countryCode = countryCode.toUpperCase();
  if (isoCountries.hasOwnProperty(countryCode)) {
    return isoCountries[countryCode];
  } else {
    return countryCode;
  }
};

/**
 * @returns {string} Current date, format 'DD/MM/YYYY'
 */
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

/**
 * @returns {string} Current time
 */
export const getCurrentTime = () => {
  const currentdate = new Date();
  const time = currentdate.getHours() + ':' + currentdate.getMinutes();
  return time;
};

/**
 * @param {number} from The starting index
 * @param {number} to The end index -not included-
 * @param {string} str The string to trim
 * @returns {string} str[from] + str[from+1] + ... + str[to-1] + '...'
 */
export const trimString = (from, to, str) => {
  let trimmedString = str.slice(from, to);
  return trimmedString + '...';
};

/**
 * @param {string} names
 * @returns {string} one name, or if the string is to big, 'Unknow Author'
 */
export const getOneName = names => {
  if (names.length > 25) return 'Unknown Author';
  const words = names.split(' ');
  let name = words[0];
  if (words[1]) name += ' ' + words[1];
  return name;
};
