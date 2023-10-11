import axios from 'axios';
import { REACT_APP_HOST } from 'configs';

import { getData } from 'utils';

export const request = async ({
  host = '',
  url = '',
  method = 'GET',
  params = {},
  data = {},
  headers = {},
  token = '',
  onUploadProgress = () => {},
}) => {
  const _token = token || getData('token');
  const uploadProgress = onUploadProgress || (() => {});
  const res = await axios({
    url: `${host || REACT_APP_HOST}${url}`,
    method,
    data,
    params,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${_token}`,
      ...headers,
    },
    onUploadProgress: uploadProgress,
  });
  return res;
};

export default request;
