import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-community/async-storage";

const useAsyncStorage = <T,>(key: string, defaultValue: T): [T, (newValue: T) => void, boolean] => {
  const [storageValue, _setStorageValue] = useState(defaultValue);
  const [synced, setSynced] = useState(false);

  async function setStorageValue(newValue: T) {
    await AsyncStorage.setItem(key, JSON.stringify(newValue));
    setSynced(true);
    _setStorageValue(newValue);
  };

  async function updateStorageValue() {
    const fromStorage = await AsyncStorage.getItem(key);
    let value = defaultValue;
    if (fromStorage) value = JSON.parse(fromStorage);
    _setStorageValue(value);
    setSynced(true);
  };

  useEffect(() => {updateStorageValue()}, []);

  return [storageValue, setStorageValue, synced];
};

export default useAsyncStorage;
