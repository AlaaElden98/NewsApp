import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getTopHeadlinesEG} from '../../redux/topHeadlinesEGSlice';
import {updateEGStatus} from '../../redux/topHeadlinesEGSlice';
import {updateUAEStatus} from '../../redux/topHeadlinesUAESlice';
import {getTopHeadlinesUAE} from '../../redux/topHeadlinesUAESlice';
import {responsiveWidth, responsiveHeight} from '../../utilis/helperFunctions';
import { MAXIMUM_RESULTS_PAGE } from '../../utilis/constants';

export const TopHeadlinesList = ({navigation, route}) => {
  const {country} = route.params;
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const status =
    country === 'eg'
      ? useSelector(state => state.topHeadlinesEG.status)
      : useSelector(state => state.topHeadlinesUAE.status);

  useEffect(() => {
    if (status === 'idle') {
      country === 'eg'
        ? dispatchTopHeadlinesEG(page)
        : dispatchTopHeadlinesUAE(page);
    }
  }, [dispatch, page]);

  const topHeadlines =
    country === 'eg'
      ? useSelector(state => state.topHeadlinesEG.items)
      : useSelector(state => state.topHeadlinesUAE.items);

  const dispatchTopHeadlinesEG = (page = 1) => {
    dispatch(
      getTopHeadlinesEG({page: page, country: country, category: 'sports'}),
    );
    dispatch(
      getTopHeadlinesEG({page: page, country: country, category: 'business'}),
    );
  };

  const dispatchTopHeadlinesUAE = (page = 1) => {
    dispatch(
      getTopHeadlinesUAE({page: page, country: country, category: 'sports'}),
    );
    dispatch(
      getTopHeadlinesUAE({page: page, country: country, category: 'business'}),
    );
  };

  const getNextPage = () => {
    dispatch(updateEGStatus('idle'));
    dispatch(updateUAEStatus('idle'));
    setPage(page + 1);
  };
  const stopFetching = () => {
    updateEGStatus('stop');
    updateUAEStatus('stop');
  };
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
      <FlatList
        data={topHeadlines}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={page < MAXIMUM_RESULTS_PAGE ? getNextPage : stopFetching}
      />
    </View>
  );
};
