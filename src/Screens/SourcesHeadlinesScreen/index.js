import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, FlatList, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import {
  getSourcesHeadlines,
  updateSourcesHeadlinesStatus,
} from '../../redux/sourcesHeadlinesSlice';
import {MAXIMUM_RESULTS_PAGE} from '../../utilis/constants';
import {Card} from '../../components/Card';
import {CustomActivityIndicator} from '../../components/CustomActivityIndicator';
import {EndOfResults} from '../../components/EndOfResults';
import {getOneName} from '../../utilis/helperFunctions';

const SourceHeadlinesScreen = ({navigation, route}) => {
  const {sourceId} = route.params;
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const status = useSelector(state => state.sourcesHeadlines.status);

  useEffect(() => {
    if (status === 'idle')
      dispatch(getSourcesHeadlines({source_id: sourceId, page: page}));
  }, [dispatch, page]);

  const data = useSelector(state => state.sourcesHeadlines.items);

  const getNextPage = () => {
    dispatch(updateSourcesHeadlinesStatus('idle'));
    setPage(page + 1);
  };
  const stopFetching = () => {
    dispatch(updateSourcesHeadlinesStatus('stop'));
  };

  const err = useSelector(state => state.sourcesHeadlines.error);
  useEffect(() => {
    if (status === 'failed') {
      Alert.alert(err.message, 'Unable to load Source headlines, Try later!');
    }
  }, [status]);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailsScreen', {
            author:
              item.author && item.author != ''
                ? getOneName(item.author)
                : 'Unknown',
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
              : 'Unknown'
          }
          publishedAt={item.publishedAt}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
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

SourceHeadlinesScreen.propTypes = {
  sourceId: PropTypes.string,
};
export default SourceHeadlinesScreen;
