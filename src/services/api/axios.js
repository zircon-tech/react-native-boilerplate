import axios from 'axios';
import curlirize from 'axios-curlirize';
import {PermClientError} from 'utils/exceptions';
import {API_KEY, API_PORT, API_URL} from '../../config';
import {deleteToken, getToken} from '../../lib/utils/auth';
const API_URL_PORT = `${API_URL}:${API_PORT}`;

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-api-key': API_KEY,
  },
  timeout: 50000,
  validateStatus: status => status < 400,
});

curlirize(axiosInstance, (result, err) => {
  const {command} = result;
  if (err) {
    console.log('err cc', err);
  } else {
    console.log(command);
  }
});

const axiosCall = async (axiosInst, url, {query, ...requestOptions}) =>
  axiosInst({
    method: requestOptions.method,
    url: encodeQueryParams(`${API_URL_PORT}${url}`, query).toString(),
    data: requestOptions.body,
    headers: requestOptions.headers,
  });

const apiCall = async (...args) => {
  try {
    const response = await axiosCall(axiosInstance, ...args);
    console.log({response});
    if (response.status >= 200 && response.status < 400) {
      return response;
    }
    return null;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      deleteToken();
      throw new PermClientError();
    } else {
      if (error.response) {
        if (error.response.data) {
          if (error.response.data.message) {
            throw new Error(error.response.data.message);
          }
          if (error.response.data.errors) {
            throw new Error(
              error.response.data.errors
                .map(e => `${e.param}: ${e.msg}`)
                .join('. '),
            );
          }
          throw new Error('Something went wrong.');
        } else {
          throw new Error('Something went wrong.');
        }
      } else {
        // NavigationService.navigate('ErrorFallback');
        throw new Error(
          'Network Error. Please check your internet connection.',
        );
      }
    }
  }
};

const encodeQueryParams = (url, query) => {
  const encodeURL = new URL(url);
  // ToDo: Have to agree how to encode null
  if (query) {
    Object.entries(query).forEach(([k, v]) =>
      encodeURL.searchParams.append(k, v),
    );
  }
  return encodeURL;
};

export const unAuthAxiosCall = (url, requestOptions) => {
  return apiCall(url, requestOptions);
};

export const authAxiosCall = async (url, requestOptions) => {
  const token = await getToken();
  return manualAuthAxiosCall(token, url, requestOptions);
};

export const manualAuthAxiosCall = async (token, url, requestOptions) => {
  return apiCall(url, {
    ...requestOptions,
    headers: {
      ...requestOptions.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};
