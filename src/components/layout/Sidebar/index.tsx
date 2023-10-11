import React, { useEffect } from 'react';
import {
  FormOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  SettingOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { updateHideSidebar, updateSidebarCompact } from 'store/features/globalSlice';
import { useAppDispatch, useAppSelector } from 'store';
import { useMediaQuery } from 'react-responsive';

import s from './styles.module.scss';

import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const sidebarCompact = useAppSelector(state => state.global.sidebarCompact);
  const hideSidebar = useAppSelector(state => state.global.hideSidebar);
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery({ maxWidth: 1168 });

  const handleCloseMobile = () => {
    dispatch(updateHideSidebar(true));
  };

  const handleToogle = () => {
    dispatch(updateSidebarCompact(!sidebarCompact));
    dispatch(updateHideSidebar(true));
  };

  useEffect(() => {
    dispatch(updateHideSidebar(isMobile));
  }, [isMobile, dispatch]);

  return (
    <>
      <aside
        className={`${s.sidebar} scrollbar-trigger ${!hideSidebar && s.active} ${sidebarCompact && s.sidebar__compact}`}
      >
        <div className={s.sidebar__top}>
          <div className={s.sidebar__header}>
            <div className={s.sidebar__logo}>
              <Logo width={127} height={58} />
            </div>
            <button type="button" className={s.sidebar__toggle} onClick={handleToogle}>
              {!sidebarCompact && hideSidebar ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
              <span hidden>toggle</span>
            </button>
          </div>
          <div className={s.sidebar__body}>
            <NavLink
              to={'/admin'}
              onClick={handleCloseMobile}
              title={'Task'}
              className={({ isActive }) => `${isActive ? s.active : ''} ${s.sidebar__item} `}
            >
              <div className={s.sidebar__icon} style={{ color: '#28c76f', fontSize: 24 }}>
                <MessageOutlined />
              </div>
              <div className={s.sidebar__text}>{'My Task'}</div>
            </NavLink>
            <NavLink
              to={'/invoices'}
              onClick={handleCloseMobile}
              title={'Invoices'}
              className={({ isActive }) => `${isActive ? s.active : ''} ${s.sidebar__item} `}
            >
              <div className={s.sidebar__icon} style={{ color: '#f3a22c', fontSize: 24 }}>
                <FormOutlined />
              </div>
              <div className={s.sidebar__text}>{'Invoices'}</div>
            </NavLink>
            <NavLink
              to={'/customers'}
              onClick={handleCloseMobile}
              title={'Customers'}
              className={({ isActive }) => `${isActive ? s.active : ''} ${s.sidebar__item} `}
            >
              <div className={s.sidebar__icon} style={{ color: '#597EF7', fontSize: 24 }}>
                <UserOutlined />
              </div>
              <div className={s.sidebar__text}>{'Customers'}</div>
            </NavLink>
            <NavLink
              to={'/agents'}
              onClick={handleCloseMobile}
              title={'Agents'}
              className={({ isActive }) => `${isActive ? s.active : ''} ${s.sidebar__item} `}
            >
              <div className={s.sidebar__icon} style={{ color: '#f65747', fontSize: 24 }}>
                <UserSwitchOutlined />
              </div>
              <div className={s.sidebar__text}>{'Agents'}</div>
            </NavLink>
          </div>
        </div>

        <div className={s.sidebar__bottom} style={{ padding: 0 }}>
          <NavLink
            to={'/settings'}
            onClick={handleCloseMobile}
            title={'Settings'}
            className={({ isActive }) => `${isActive ? s.active : ''} ${s.sidebar__item} `}
            style={{ marginBottom: 0 }}
          >
            <div className={s.sidebar__icon} style={{ color: '#597EF7', fontSize: 24 }}>
              <SettingOutlined />
            </div>
            <div className={s.sidebar__text}>{'Settings'}</div>
          </NavLink>
        </div>
      </aside>
      <div
        className={`${s.sidebar__backdrop} ${!hideSidebar && s.active}`}
        role="button"
        onClick={handleCloseMobile}
      ></div>
    </>
  );
}

export default Sidebar;
