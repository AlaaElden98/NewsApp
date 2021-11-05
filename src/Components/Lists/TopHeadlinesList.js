import React, {useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getTopHeadlinesEG} from '../../redux/topHeadlinesEGSlice';
import {getTopHeadlinesUAE} from '../../redux/topHeadlinesUAESlice';
import {responsiveWidth, responsiveHeight} from '../../utilis/helperFunctions';

export const TopHeadlinesList = ({navigation, route}) => {
  const {country} = route.params;
  const dispatch = useDispatch();
  const status =
    country === 'eg'
      ? useSelector(state => state.topHeadlinesEG.status)
      : useSelector(state => state.topHeadlinesUAE.status);

  useEffect(() => {
    if (status === 'idle') {
      country === 'eg'
        ? dispatch(
            getTopHeadlinesEG({page: 1, country: country, category: 'sports'}),
          )
        : dispatch(
            getTopHeadlinesUAE({page: 1, country: country, category: 'sports'}),
          );
    }
  }, [dispatch]);

  const topHeadlines =
    country === 'eg'
      ? useSelector(state => state.topHeadlinesEG.items)
      : useSelector(state => state.topHeadlinesUAE.items);

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
      <FlatList data={topHeadlines} renderItem={renderItem} />
    </View>
  );
};
