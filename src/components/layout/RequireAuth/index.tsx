import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'store';

const RequireAuth = ({ children }: any) => {
  const isAuthened = useAppSelector(store => store.global.isAuthened);
  const location = useLocation();
  if (!isAuthened) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
