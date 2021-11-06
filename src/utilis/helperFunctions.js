import {Dimensions} from 'react-native';

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

export const calculateTimesDifference = pastTime => {
  const currentDate = new Date();
  const pastDate = new Date(pastTime);
  const differnceInMs = Math.abs(currentDate - pastDate); // Difference in milliseconds.
  const differnceInMinutes = Math.floor(differnceInMs / 60e3);
  const days = (differnceInMinutes / (60 * 60)).toFixed();
  const hours = (differnceInMinutes / 60).toFixed();
  const minutes = differnceInMinutes % 60;
  let difference = '';
  if (days !== '0') {
    difference += `${days} days `;
  }
  if (hours !== '0') {
    difference += `${hours} hours `;
  }
  if (minutes !== '0') {
    difference += `${minutes} minutes `;
  }
  difference += 'ago';
  return difference;
};
