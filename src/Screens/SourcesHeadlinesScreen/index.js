import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, FlatList, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import {
  getSourcesHeadlines,
  updateSourcesHeadlinesStatus,
} from '../../redux/sourcesHeadlinesSlice';
import {MAXIMUM_RESULTS_PAGE} from '../../utilis/constants';
import {getDateAndTime} from '../../utilis/helperFunctions';
import {Card} from '../../components/Card';

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
            author: item.author,
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
          author={item.author}
          publishedAt={item.publishedAt}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={page < MAXIMUM_RESULTS_PAGE ? getNextPage : stopFetching}
        style={{backgroundColor: 'white'}}
      />
    </View>
  );
};

SourceHeadlinesScreen.propTypes = {
  sourceId: PropTypes.string,
};
export default SourceHeadlinesScreen;
