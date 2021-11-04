import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

const DetailsScreen = ({route}) => {
  const {author, title, sourceUrl, urlToImage, publishedAt, content} =
    route.params;
  return (
    <View>
      <Text>The author’s name.{author}</Text>
      <Text>A title.{title}</Text>
      <Text>An image for the headline.{urlToImage}</Text>
      <Text>
        The source of the headline which navigates me to its external web page.
        {sourceUrl}
      </Text>
      <Text>The content.{content}</Text>
      <Text>Date and time of publishing.{publishedAt}</Text>
    </View>
  );
};

DetailsScreen.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  sourceUrl: PropTypes.string,
  urlToImage: PropTypes.string,
  publishedAt: PropTypes.string,
  content: PropTypes.string,
};

export default DetailsScreen;
