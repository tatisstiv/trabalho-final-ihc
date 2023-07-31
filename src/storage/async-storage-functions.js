import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log('error on storing data');
  }
};

export const getValue = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('error on fetching data');
  }
};

export const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log('error on removing data');
  }
};

export const getAllValues = async () => {
  let keys = []
  let jsonValues = []
  try {
    keys = await AsyncStorage.getAllKeys()
    jsonValues = await AsyncStorage.multiGet(keys)
    return jsonValues.map(value => JSON.parse(value[1]));
  } catch(e) {
    console.log('error on fetching data: ' + e);
  }
}