import { message } from 'antd';
// import * as Sentry from '@sentry/react';

export const storeData = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log('storeData', error);
  }
};

export const getData = (key: string) => {
  let res = '';
  try {
    res = localStorage.getItem(key) || '';
  } catch (error) {
    console.log('getData', error);
  }
  return res;
};

export const actionCreator = (actionName = '', extraField = []) => {
  const actionType: Record<string, string> = {
    NAME: actionName,
    PENDING: `${actionName}_PENDING`,
    SUCCESS: `${actionName}_SUCCESS`,
    ERROR: `${actionName}_ERROR`,
  };
  extraField.forEach(field => {
    actionType[field] = `${actionName}_${field}`;
  });

  return actionType;
};

export const actionTryCatchCreator = async ({ service, onPending, onSuccess, onError, ignoreError }: any) => {
  const isIgnoreError = ignoreError || false;
  try {
    if (onPending) onPending();
    const { status, data, headers } = await service;
    if (status === 401) {
      storeData('token', '');
      window.location.href = '/signin';
      return;
    }
    if (status >= 200 && status < 300) {
      if (onSuccess) onSuccess(data, headers, status);
    } else {
      throw String(`HTTP request with code ${status} \n ${data.detail || data.message || ''}`);
    }
  } catch (error: any) {
    console.log('error', JSON.stringify(error));

    if (onError) onError(error);
    if (isIgnoreError) {
      return;
    }
    if (typeof error === 'object') {
      // const status = error?.response?.status;
      // const isUnAuthen = status === 401;

      // if (isUnAuthen) {
      //   storeData('token', '');
      //   window.location.href = '/signin';
      //   return;
      // }

      const messages = error?.name || error?.response?.data?.title || '';

      message.error(`${messages} \n ${error?.response?.data?.detail || error?.response?.data?.message || ''}`);
    } else {
      message.error(error);
    }

    // const token = getData('token') || '';
    // Sentry.configureScope(scope => scope.setUser({ token }).setLevel('API ERROR'));
    // Sentry.captureException(error);
  }
};

export const truncates = (string = '', maxLength = 50) => {
  if (!string) return null;
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength)}...`;
};

export const formatFloatNumber = function (number: any, decimalNumber = 2) {
  const fixedNumber = Number.parseFloat(number).toFixed(decimalNumber);
  return String(fixedNumber).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDecimalVND = function (number: any, decimalNumber = 2) {
  return `${formatFloatNumber(number, 0)} VND`;
};

export function getRandomDate() {
  const year = 2020;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hour).padStart(
    2,
    '0',
  )}:${String(minute).padStart(2, '0')}`;
}
