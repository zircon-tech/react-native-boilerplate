import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from '../../navigation/NavigationServices';

const tokenKey = 'jwtToken';

export const getAuth = async () => {
  try {
    const auth = await AsyncStorage.getItem('auth');
    return auth ? JSON.parse(auth) : null;
  } catch (error) {
    return null;
  }
};

export const setAuth = async auth => {
  const authObject = JSON.stringify(auth);
  const authVal = await AsyncStorage.setItem('auth', authObject);
  return authVal;
};

export const logOut = async () => {
  try {
    await AsyncStorage.removeItem('auth');
    await AsyncStorage.removeItem(tokenKey);
    NavigationService.navigate('Login');
    return true;
  } catch (error) {
    return false;
  }
};

export const getToken = () => {
  const encodedStoredToken = AsyncStorage.getItem(tokenKey);
  if (encodedStoredToken) {
    try {
      const storedToken = JSON.parse(encodedStoredToken);
      return storedToken.value;
    } catch (e) {
      return null;
    }
  }
  return null;
};