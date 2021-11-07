import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import {getDateAndTime, responsiveFontSize} from '../../utilis/helperFunctions';
import {styles} from './styles';

export const Card = props => {
  const {urlToImage, title, author, publishedAt} = props;
  const {date, time} = getDateAndTime(publishedAt);

  return (
    <View style={styles.itemContainer}>
      <Image
        source={
          urlToImage !== 'null' && urlToImage
            ? {
                uri: urlToImage,
              }
            : require('../../utilis/assests/NO_IMAGE.jpg')
        }
        style={
          urlToImage !== 'null' && urlToImage ? styles.image : styles.noImage
        }
        loadingIndicatorSource={1}
      />
      {title !== '' && title && <Text style={styles.title}>{title}</Text>}
      {author !== '' && author && (
        <Text style={styles.author}>Author: {author}</Text>
      )}
      {publishedAt !== '' && publishedAt && (
        <View style={styles.timeContainer}>
          <Text style={styles.dateText}>{date}</Text>
          <Ionicons
            name="md-time-outline"
            size={responsiveFontSize(2.4)}
            style={{marginLeft: 4}}
          />
          <Text style={styles.timeText}>{time}</Text>
        </View>
      )}
    </View>
  );
};

Card.propTypes = {
  urlToImage: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
};
