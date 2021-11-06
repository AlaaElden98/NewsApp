import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {SourcesList} from '../components/Lists/SourcesList';
import { sourcesFakeResponse } from '../fakeData';
import {getSources} from '../redux/sourcesSlice';

const SourcesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.sources.status);

  useEffect(() => {
    if (status === 'idle') dispatch(getSources());
  }, [dispatch]);

  const sources = useSelector(state => state.sources.items);

  return <SourcesList navigation={navigation} data={sourcesFakeResponse.sources} />;
};

export default SourcesScreen;
