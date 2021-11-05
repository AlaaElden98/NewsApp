import React from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';

import {topHeadlineFakeResponse} from '../../fakeData';
import {responsiveWidth, responsiveHeight} from '../../utilis/helperFunctions';

export const TopHeadlinesList = ({navigation, route}) => {
  const DATA = topHeadlineFakeResponse.articles;
  const {country} = route.params;
  console.log(route.params)
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

  return (
    <View>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
};
