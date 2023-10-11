import React from 'react';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { MenuOutlined } from '@ant-design/icons';
import { updateHideSidebar } from 'store/features/globalSlice';
import { useAppDispatch, useAppSelector } from 'store';
import { Button } from 'antd';

import s from './styles.module.scss';

function HeaderToggle() {
  const hideSidebar = useAppSelector(state => state.global.hideSidebar);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(updateHideSidebar(!hideSidebar));
  };
  return (
    <div className={`${s.header__mobi}`}>
      <Button icon={<MenuOutlined />} type="link" onClick={handleToggle} className={s.header__toggle}></Button>
      <div className={s.header__logo}>
        <Logo width={127} height={47} />
      </div>
    </div>
  );
}

export default HeaderToggle;
