import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from '../../navigation/NavigationServices';

const storage = AsyncStorage;
const tokenKey = 'jwtToken';

export const setToken = token => {
  storage.setItem(
    tokenKey,
    JSON.stringify({
      value: token,
    }),
  );
};

export const getToken = async () => {
  const encodedStoredToken = await storage.getItem(tokenKey);
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

export function deleteToken() {
  storage.removeItem(tokenKey);
  NavigationService.navigate('Login');
}
