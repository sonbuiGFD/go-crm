import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/layout/header';
// import Footer from 'components/layout/Footer';
import Sidebar from '../Sidebar';
import { useAppSelector } from 'store';

const Layout = () => {
  const sidebarCompact = useAppSelector(state => state.global.sidebarCompact);
  const hideSidebar = useAppSelector(state => state.global.hideSidebar);

  return (
    <div className={`app__main ${!hideSidebar && 'active'} ${sidebarCompact && 'compact'}`}>
      <Sidebar />
      <main className="app__content">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
