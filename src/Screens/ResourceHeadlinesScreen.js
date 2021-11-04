import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import {List} from '../components/List';

const ResourceHeadlinesScreen = ({navigation, route}) => {
  const {sourceId} = route.params;
  return (
    <View>
      <List navigation={navigation} headlines={true} />
    </View>
  );
};

ResourceHeadlinesScreen.propTypes = {
  sourceId: PropTypes.string,
};
export default ResourceHeadlinesScreen;
