import React from 'react';
import s from './styles.module.scss';

import HeaderProfile from './HeaderProfile';
import HeaderToggle from './HeaderToggle';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.header__left}>
        <HeaderToggle />
      </div>
      <div className={s.header__right}>
        <HeaderProfile />
      </div>
    </header>
  );
}

export default Header;
