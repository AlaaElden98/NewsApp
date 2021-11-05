import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export const SourcesList = ({navigation, data}) => {
  const renderItem = ({item}) => {
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
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

SourcesList.propTypes = {
  data: PropTypes.array,
};
