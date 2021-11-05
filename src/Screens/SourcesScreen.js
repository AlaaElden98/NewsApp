import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {SourcesList} from '../components/Lists/SourcesList';
import {getSources} from '../redux/sourcesSlice';

const SourcesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.sources.status);
  
  console.log(status);

  useEffect(() => {
    if (status === 'idle') dispatch(getSources());
  }, [dispatch]);

  const sources = useSelector(state => state.sources.items);

  return <SourcesList navigation={navigation} data={sources} />;
};

export default SourcesScreen;
