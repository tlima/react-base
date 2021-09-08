import { REQUEST_DEFAULT_RETRIES, REQUEST_DEFAULT_TIMEOUT } from 'lib/constants';

const request = (url, method, options = {}, data = null) => fetch(
  url,
  {
    method,
    headers: options.headers,
    body: data,
    timeout: options.timeout || REQUEST_DEFAULT_TIMEOUT,
  },
);

const buildResponse = async requestResult => {
  const response = {
    status: requestResult.status,
    headers: requestResult.headers,
    data: await requestResult.json(),
  };

  if (response.status < 200 || response.status > 299) throw response;
  return response;
};

const requestWithRetry = async (url, method, options = {}, data = null) => {
  const finalOptions = { retries: REQUEST_DEFAULT_RETRIES, ...options };
  const result = await request(url, method, options, data);

  if (result.status === 504 && finalOptions.retries > 0) {
    return requestWithRetry(url, method, { ...options, retries: finalOptions.retries - 1 }, data);
  }

  return buildResponse(result);
};

export const get = (url, options) => requestWithRetry(url, 'GET', options);

export const post = (url, data, options) => requestWithRetry(url, 'POST', options, data);
