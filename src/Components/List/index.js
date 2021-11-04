import React from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

import {topHeadlineFakeResponse, sourcesFakeResponse} from '../../fakeData';
import {responsiveWidth, responsiveHeight} from '../../utilis/helperFunctions';

export const List = ({navigation, route}) => {
  const isHeadlines = route ? route.params.isHeadlines : false;
  const DATA = isHeadlines
    ? topHeadlineFakeResponse.articles
    : sourcesFakeResponse.sources;

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailsScreen', {
            author: item.author,
            title: item.title,
            sourceUrl: item.url,
            urlToImage: item.urlToImage,
            publishedAt: item.publishedAt,
            content: item.content,
          });
        }}>
        <View>
          <Image
            source={{uri: item.urlToImage}}
            style={{
              width: responsiveWidth(30),
              height: responsiveHeight(25),
              borderRadius: 15,
            }}
          />
          <Text>`Title: {item.title}`</Text>
          <Text>`Author: {item.author}`</Text>
          <Text>`publishedAt: {item.publishedAt}`</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderResourceItem = ({item}) => {
    console.log(item.id);
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ResourceHeadlinesScreen', {
            sourceId: item.id,
          });
        }}>
        <View>
          <Text>`Name: {item.name}`</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={isHeadlines ? renderItem : renderResourceItem}
        keyExtractor={item => {
          isHeadlines ? item.source.id : item.id;
        }}
      />
    </View>
  );
};

List.propTypes = {
  isHeadlines: PropTypes.bool,
};