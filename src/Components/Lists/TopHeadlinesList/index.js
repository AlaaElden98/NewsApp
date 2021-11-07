import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getTopHeadlinesEG} from '../../../redux/topHeadlinesEGSlice';
import {updateEGStatus} from '../../../redux/topHeadlinesEGSlice';
import {updateUAEStatus} from '../../../redux/topHeadlinesUAESlice';
import {getTopHeadlinesUAE} from '../../../redux/topHeadlinesUAESlice';
import {getCountryName, getOneName} from '../../../utilis/helperFunctions';
import {MAXIMUM_RESULTS_PAGE} from '../../../utilis/constants';
import {Card} from '../../Card';
import {CustomActivityIndicator} from '../../CustomActivityIndicator';
import {EndOfResults} from '../../EndOfResults';

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

  const err = useSelector(state => state.topHeadlinesEG.error);

  useEffect(() => {
    if (status === 'failed') {
      Alert.alert(
        err.message,
        `Unable to load ${getCountryName(country)} top headlines, Try later!`,
      );
    }
  }, [status]);
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
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailsScreen', {
            author:
              item.author && item.author != ''
                ? getOneName(item.author)
                : 'Unknown Author',
            title: item.title,
            sourceUrl: item.url,
            urlToImage: item.urlToImage,
            publishedAt: item.publishedAt,
            content: item.content,
            sourceName: item.source.name,
          });
        }}>
        <Card
          urlToImage={item.urlToImage}
          title={item.title}
          author={
            item.author && item.author != ''
              ? getOneName(item.author)
              : 'Unknown Author'
          }
          publishedAt={item.publishedAt}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={topHeadlines}
      renderItem={renderItem}
      onEndReachedThreshold={0.5}
      onEndReached={page < MAXIMUM_RESULTS_PAGE ? getNextPage : stopFetching}
      ListFooterComponent={
        page < MAXIMUM_RESULTS_PAGE ? (
          <CustomActivityIndicator size={40} />
        ) : (
          <EndOfResults />
        )
      }
      style={{backgroundColor: 'white'}}
    />
  );
};
