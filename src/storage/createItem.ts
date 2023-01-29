import AsyncStorage from '@react-native-async-storage/async-storage';
import { getItem } from "./getItem";
import { MAIN_KEY } from './config';

export type NewMeal = {
  date: string;
  time: string;
  name: string;
  desc: string;
  inside: boolean;
}

export async function createMeal(item: NewMeal) {
  const currentItems = await getItem('mealList');

  const existDate = currentItems.find((i: any) => i.title === item.date);

  if (!existDate) {
    const newItem = {
      title: item.date,
      data: [{
        time: item.time, meal: item.name, id: 0, inside: item.inside ? 55 : 1,
      }]
    }

    currentItems.push(newItem);
    await AsyncStorage.setItem(`${MAIN_KEY}:mealList`, JSON.stringify(currentItems));
  } else {
    existDate.data.push({
      time: item.time, meal: item.name, id: existDate.data.length, inside: item.inside ? 55 : 1,
    });

    await AsyncStorage.setItem(`${MAIN_KEY}:mealList`, JSON.stringify(currentItems));
  }
}