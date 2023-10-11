import React, { useRef, useState } from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import s from './styles.module.scss';
import { useOutsideClick } from 'utils/hooks';
import { handleLogout } from 'utils/storage';

function HeaderProfile() {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    setShow(false);
  });

  const handleToggle = () => {
    setShow(!show);
  };

  const handleLogoutButton = () => {
    handleLogout();
  };

  return (
    <div ref={ref} className={s.header__profile}>
      <button onClick={handleToggle} type="button" className={s.profile__btn}>
        <div className={`${s.profile__img} `}>
          <UserOutlined />
        </div>
        <div className={s.profile__icon}>
          <DownOutlined />
        </div>
      </button>

      <div className={`${s.profile__dropdown} ${show && s.show}`}>
        <div className={s.profile__content}>
          <button type="button" className={s.profile__item}>
            {'Account'}
          </button>
          <button onClick={handleLogoutButton} type="button" className={s.profile__item}>
            {'Logout'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderProfile;
