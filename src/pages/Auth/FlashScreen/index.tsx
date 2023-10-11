import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.scss';

import { ReactComponent as Logo } from 'assets/svg/logo.svg';
// import { ReactComponent as LogoText } from 'assets/svg/logo_name.svg';

const FlashScreen = ({ isAuthened }: any) => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if (isAuthened) {
        navigate('/admin', { replace: true });
      } else {
        navigate('/login', { replace: true });
      }
    }, 2000);
  }, [isAuthened, navigate]);

  return (
    <div className="flash_screen">
      <div className="flash_screen__container">
        <div className="flash_screen__left">
          <div className="flash_screen__logo animate__animated animate__fadeIn animate__slower">
            <Logo />
            <div className="flash_screen__name">{/* <LogoText /> */}</div>
          </div>

          <div className="flash_screen__des animate__animated animate__fadeIn animate__slower">
            <p>
              <span className="d-block"> Powered By</span>
              <span className="d-block">Fastboy Marketing</span>
            </p>
            <p>
              <span className="d-block">Copyright © 2023-2024</span>
              <span className="d-block">Go Ahead Inc. </span>
              <span className="d-block">All rights reserved</span>
            </p>

            <p>Loading data...</p>
          </div>
        </div>

        <div className="flash_screen__right">
          <img className="animate__animated animate__fadeIn" src="/img/flashscreen__img.png" alt="flash_screen__img" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ global }: any) => ({
  isAuthened: global.isAuthened,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FlashScreen);
