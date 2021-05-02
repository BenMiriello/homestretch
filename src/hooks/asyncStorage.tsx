import { useEffect, useState } from 'react';

import AsyncStorage from "@react-native-community/async-storage";
import { GoalType } from '../utils/types';
import { goalStoragePrefix } from '../utils/constants';
import useFetching from './useFetching';

export interface StoredGoals {[key: string]: GoalType};

interface UseAsyncStorageType {
  storedGoals: StoredGoals;
  setNewStoredGoal: (goal: GoalType) => void;
}

export default function useAsyncStorage(): UseAsyncStorageType {
  const [fetching] = useFetching();
  const [storedGoals , setStoredGoals] = useState<StoredGoals>({});

  useEffect(() => {
    if (!fetching) getAllStoredGoals().then(setStoredGoals);
  }, [fetching]);

  async function getStorageGoal(key: string): Promise<GoalType | void> {
    return AsyncStorage.getItem(key).then((fromStorage => {
      if (fromStorage) {
        return JSON.parse(fromStorage);
      };
    }));
  };

  async function getAllStorageKeys() {
    return AsyncStorage.getAllKeys();
  };

  async function setNewStoredGoal(value: GoalType) {
    const key = `${goalStoragePrefix}${Date.now()}`;
    AsyncStorage.setItem(key, JSON.stringify(value));
  };

  async function getAllStoredGoals() {
    const storageKeys = await getAllStorageKeys();
    const promises = storageKeys.map(async key => {
      const retrievedGoal = await getStorageGoal(key);
      return [key, retrievedGoal];
    });
    const entries = await Promise.all(promises);
    return Object.fromEntries(entries);
  };

  async function updateStorageGoal(key: string, value: GoalType) {
    if (getStorageGoal(key)) {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      const retrievedValue = await getStorageGoal(key);
      if (retrievedValue === value) {
        return true;
      };
    };
    return false;
  };

  return {
    storedGoals,
    setNewStoredGoal,
  }
};
