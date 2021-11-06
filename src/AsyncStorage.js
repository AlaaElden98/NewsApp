import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    console.log('StoreData', jsonValue);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log('GetData', jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    Alert.alert('Error loading your data', 'Try again later!');
    console.error(e);
  }
};
