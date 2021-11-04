import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

const ResourceHeadlinesScreen = ({route}) => {
  const {sourceId} = route.params;
  return (
    <View>
      <Text>{sourceId}</Text>
    </View>
  );
};

ResourceHeadlinesScreen.propTypes = {
  sourceId: PropTypes.string,
};
export default ResourceHeadlinesScreen;
