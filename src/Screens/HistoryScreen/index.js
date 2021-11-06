import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getDataFromAsyncStorage} from '../../redux/historySlice';
import {styles} from './styles';

const HistoryScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFromAsyncStorage());
  }, [data]);

  const data = useSelector(state => state.history.items);
  const reversedData = JSON.parse(JSON.stringify(data)).reverse();

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.sourceAndAuthor}>{item.sourceName}</Text>
        <Text style={styles.sourceAndAuthor}>{item.author}</Text>
        <Text style={styles.dateAndTime}>Visited : {item.date}</Text>
        <Text style={styles.dateAndTime}>At: {item.time}</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={reversedData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default HistoryScreen;
