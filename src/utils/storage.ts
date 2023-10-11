import { message } from 'antd';
import { USER_INFO } from 'utils/constants';

export const getUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem(`${USER_INFO}`) || '{}');
  if (typeof userInfo === 'string') {
    return JSON.parse(userInfo);
  } else {
    return userInfo;
  }
};

export const updateUserInfo = (userInfo: any) => {
  let _userInfo = JSON.parse(localStorage.getItem(`${USER_INFO}`) || '{}');
  _userInfo = { ...userInfo };
  localStorage.setItem(`${USER_INFO}`, JSON.stringify(_userInfo));
  return;
};

export const handleLogout = () => {
  try {
    localStorage.setItem(`${USER_INFO}`, JSON.stringify('{}'));
    window.location.href = '/';

    // axiosInstance.get(`/api/user/logout`).then(res => {
    //   if (res.status == 200) {
    //     localStorage.setItem(`${USER_INFO}`, JSON.stringify("{}"));
    //     location.href = "/";
    //   } else {
    //     toast.error("Something went wrong.");
    //   }
    // })
  } catch (error) {
    console.error(error);
    message.error('Something went wrong.');
  }
};
