import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  getSourcesHeadlines,
  updateSourcesHeadlinesStatus,
} from '../../redux/sourcesHeadlinesSlice';
import {MAXIMUM_RESULTS_PAGE} from '../../utilis/constants';
import {getDateAndTime, responsiveFontSize} from '../../utilis/helperFunctions';
import {styles} from './styles';
import {topHeadlineFakeResponse} from '../../fakeData';

const SourceHeadlinesScreen = ({navigation, route}) => {
  const {sourceId} = route.params;
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const status = useSelector(state => state.sourcesHeadlines.status);
  console.log(status);

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
      Alert.alert(err.message, 'Try again later');
    }
  }, [status]);
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
            sourceName: item.source.name,
          });
        }}>
        <View style={styles.itemContainer}>
          <Image
            source={
              item.urlToImage
                ? {
                    uri: item.urlToImage,
                  }
                : require('../../utilis/assests/NO_IMAGE.jpg')
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
