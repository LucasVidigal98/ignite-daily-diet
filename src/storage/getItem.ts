import AsyncStorage from '@react-native-async-storage/async-storage';
import { MAIN_KEY } from './config';

export async function getItem(itemType: string) {
  const items = await AsyncStorage.getItem(`${MAIN_KEY}:${itemType}`);

  if (!items) {
    return {
      [itemType]: []
    };
  }

  return JSON.parse(items);
}