import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {getTopHeadlinesEG} from '../../../redux/topHeadlinesEGSlice';
import {updateEGStatus} from '../../../redux/topHeadlinesEGSlice';
import {updateUAEStatus} from '../../../redux/topHeadlinesUAESlice';
import {getTopHeadlinesUAE} from '../../../redux/topHeadlinesUAESlice';
import {
  responsiveFontSize,
  getDateAndTime,
} from '../../../utilis/helperFunctions';
import {MAXIMUM_RESULTS_PAGE} from '../../../utilis/constants';
import {topHeadlineFakeResponse} from '../../../fakeData';
import {styles} from './styles';

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
    dispatch(updateEGStatus('stop'));
    dispatch(updateUAEStatus('stop'));
  };
  const renderItem = ({item}) => {
    const {date, time} = getDateAndTime(item.publishedAt);
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
        <View style={styles.itemContainer}>
          <Image
            source={
              item.urlToImage
                ? {
                    uri: item.urlToImage,
                  }
                : require('../../../utilis/assests/NO_IMAGE.jpg')
            }
            style={item.urlToImage ? styles.image : styles.noImage}
            loadingIndicatorSource={1}
          />
          {item.title !== '' && item.title && (
            <Text style={styles.title}>{item.title}`</Text>
          )}
          {item.author !== '' && item.author && (
            <Text style={styles.author}>Author: {item.author}</Text>
          )}
          {item.publishedAt !== '' && item.publishedAt && (
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
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={topHeadlineFakeResponse.articles}
      renderItem={renderItem}
      onEndReachedThreshold={0.5}
      onEndReached={page < MAXIMUM_RESULTS_PAGE ? getNextPage : stopFetching}
      style={{backgroundColor: 'white'}}
    />
  );
};
