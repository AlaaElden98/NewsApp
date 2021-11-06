import React, {useCallback, useEffect} from 'react';
import {View, Text, Image, ScrollView, Alert, Linking} from 'react-native';
import PropTypes from 'prop-types';

import {IconWithText} from '../../components/IconWithText';
import {
  getCurrentDate,
  getCurrentTime,
  getDateAndTime,
} from '../../utilis/helperFunctions';
import {dodgerBlue} from '../../utilis/colors';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, updateItems} from '../../redux/historySlice';

const DetailsScreen = ({route}) => {
  const {
    author,
    title,
    sourceUrl,
    urlToImage,
    publishedAt,
    content,
    sourceName,
  } = route.params;

  const {date, time} = getDateAndTime(publishedAt);
  const dispatch = useDispatch();
  const history = useSelector(state => state.history.items);

  const saveHistory = () => {
    const currentData = getCurrentDate();
    const currentTime = getCurrentTime();
    const findElemntById = element => element.id === sourceUrl;
    const elementIndex = history.findIndex(findElemntById);

    if (elementIndex === -1) {
      const item = {
        id: sourceUrl,
        title: title,
        author: author,
        sourceName: sourceName,
        date: currentData,
        time: currentTime,
      };
      dispatch(addItem(item));
    } else {
      const copy = JSON.parse(JSON.stringify(history));
      copy[elementIndex].date = currentData;
      copy[elementIndex].time = currentTime;
      const item = copy[elementIndex];
      copy.splice(elementIndex, 1);
      copy.push(item);
      dispatch(updateItems(copy));
    }
  };
  useEffect(() => {
    saveHistory();
  }, []);
  const handleOpenSourceSite = useCallback(async () => {
    if (!sourceUrl) {
      Alert.alert(`Sorry, ${sourceName}  web site is not availiable :/`);
      return;
    }
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(sourceUrl);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(sourceUrl);
    } else {
      Alert.alert(`Don't know how to open this URL: ${sourceUrl}`);
    }
  }, [sourceUrl]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={
            urlToImage
              ? {
                  uri: urlToImage,
                }
              : require('../../utilis/assests/NO_IMAGE.jpg')
          }
          style={urlToImage ? styles.image : styles.noImage}
        />

        {title !== '' && title && <Text style={styles.title}>{title}</Text>}

        <View style={styles.seperator} />

        {content !== '' && content && (
          <Text style={styles.content}>{content}</Text>
        )}
        <View style={styles.additionalInfo}>
          <IconWithText
            iconName="web"
            iconSize={5}
            iconColor={dodgerBlue}
            text1={'Visit Source Site'}
            onPress={handleOpenSourceSite}
          />
          <IconWithText
            iconName="pencil-outline"
            iconSize={5}
            iconColor={dodgerBlue}
            text1={author}
          />
          <IconWithText
            iconName="calendar-clock"
            iconSize={5}
            iconColor={dodgerBlue}
            text1={`Date: ${date}`}
            text2={`Time: ${time}`}
          />
        </View>
      </View>
    </ScrollView>
  );
};

DetailsScreen.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  sourceUrl: PropTypes.string,
  urlToImage: PropTypes.string,
  publishedAt: PropTypes.string,
  content: PropTypes.string,
  sourceName: PropTypes.string,
};

export default DetailsScreen;
