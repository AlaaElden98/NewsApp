import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {getCountryName} from '../../../utilis/helperFunctions';
import {EndOfResults} from '../../EndOfResults';
import {CustomActivityIndicator} from '../../CustomActivityIndicator';

export const SourcesList = ({navigation, data}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SourceHeadlinesScreen', {
            sourceId: item.id,
          });
        }}>
        {item.id !== '' && item.id && (
          <View style={styles.container}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.additionalInfo}>
              {getCountryName(item.country)}
            </Text>
            <Text style={styles.additionalInfo}>{item.category}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      style={{backgroundColor: 'white'}}
      ListFooterComponent={
        data ? <CustomActivityIndicator size={40} /> : <EndOfResults />
      }
    />
  );
};

SourcesList.propTypes = {
  data: PropTypes.array,
};
