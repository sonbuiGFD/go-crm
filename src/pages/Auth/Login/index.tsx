import React from 'react';
import { Input, Button } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { updateAuth } from 'store/features/globalSlice';
import { useAppDispatch } from 'store';

import { ReactComponent as GettingStaredName } from 'assets/svg/getting_started__name.svg';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { ReactComponent as Lock } from 'assets/svg/icon__lock.svg';
import { ReactComponent as User } from 'assets/svg/icon__user.svg';

import './style.scss';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location: any = useLocation();

  const handleLogin = () => {
    dispatch(updateAuth(true));
    const from = location.state?.from?.pathname || '/admin';
    navigate(from, { replace: true });
  };

  return (
    <div className="login__page">
      <div className="login__overlay animate__animated "></div>
      <div className="login__container">
        <div className="login__bg">
          <img alt="login__bg" src="/svg/login__bg.svg" className="" />
        </div>

        <img
          alt="login__icon__1"
          src="/svg/login__icon__1.svg"
          className="login__icon login__icon__1 animate__animated animate__fadeInUp animate__slow animate__delay-1s"
        />
        <img
          alt="login__icon__2"
          src="/svg/login__icon__2.svg"
          className="login__icon login__icon__2 animate__animated animate__fadeInUp animate__delay-1s"
        />
        <img
          alt="login__icon__3"
          src="/svg/login__icon__3.svg"
          className="login__icon login__icon__3 animate__animated animate__fadeInUp animate__slower animate__delay-1s"
        />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="login__box">
          <div className="login__logo text-center">
            <Logo width={127} height={58} />
            <div className="login__name">{/* <GettingStaredName /> */}</div>
          </div>
          <div className="login__title">Welcome GO CRM</div>
          <div className="login__sub">Please login to your account</div>
          <div className="login__form">
            <Input prefix={<User />} placeholder="Username" className="login__input" />
            <Input.Password
              prefix={<Lock />}
              placeholder="Password"
              className="login__input"
              iconRender={visible => (!visible ? <EyeFilled /> : <EyeInvisibleFilled />)}
            />
            <Button onClick={handleLogin} block type="primary" color="#28C76F" className="login__cta btn__success">
              Log in
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
