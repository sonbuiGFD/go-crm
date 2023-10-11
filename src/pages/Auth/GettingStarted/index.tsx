import React from 'react';
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './style.scss';

// import { ReactComponent as GettingStared } from 'assets/svg/getting_started.svg';
import { ReactComponent as GettingStaredName } from 'assets/svg/getting_started__name.svg';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { ReactComponent as Globe } from 'assets/svg/icon__globe.svg';

const GettingStarted = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="started__page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="started__overlay animate__motion"
      ></motion.div>
      <div className="started__container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="started__left animate__motion"
        >
          <img src="/img/started__img.png" alt="started__img.svg" />
        </motion.div>
        <motion.div
          className="started__right animate__motion"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="started__logo text-center">
            <Logo width={127} height={58} />
            <div className="started__name">
              <GettingStaredName />
            </div>
          </div>
          <div className="started__title">Welcome back</div>
          <div className="started__sub">Please login to your account</div>
          <div className="started__form">
            <Input prefix={<Globe />} placeholder="ID" className="started__input" />
            <Button onClick={handleLogin} block type="primary" color="#28C76F" className="started__cta btn__success">
              Log in
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GettingStarted;
