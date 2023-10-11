import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import 'styles/main.scss';

import RequireAuth from 'components/layout/RequireAuth';
import Layout from 'components/layout/layout';
import FlashScreen from 'pages/Auth/FlashScreen';
import NotFound from 'pages/NotFound';

import Login from 'pages/Auth/Login';
import Tasks from 'pages/Tasks';
import Invoices from 'pages/Invoices';
import InvoiceDetail from 'pages/InvoiceDetail';
import TaskDetail from 'pages/TaskDetail';
import Customers from 'pages/Customers';
import Agents from 'pages/Agents';
import Settings from 'pages/Settings';

// const Login = lazy(() => import('pages/Auth/Login'));
// const Tasks = lazy(() => import('pages/Tasks'));
// const TaskDetail = lazy(() => import('pages/TaskDetail'));
// const Invoices = lazy(() => import('pages/Invoices'));
// const InvoiceDetail = lazy(() => import('pages/InvoiceDetail'));
// const Customers = lazy(() => import('pages/Customers'));
// const Agents = lazy(() => import('pages/Agents'));

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Suspense fallback={<div></div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<FlashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route
              path="/admin"
              element={
                <RequireAuth>
                  <Tasks />
                </RequireAuth>
              }
            />
            <Route
              path="/tasks/:id"
              element={
                <RequireAuth>
                  <TaskDetail />
                </RequireAuth>
              }
            />
            <Route
              path="/invoices"
              element={
                <RequireAuth>
                  <Invoices />
                </RequireAuth>
              }
            />
            <Route
              path="/invoices/:id"
              element={
                <RequireAuth>
                  <InvoiceDetail />
                </RequireAuth>
              }
            />
            <Route
              path="/customers"
              element={
                <RequireAuth>
                  <Customers />
                </RequireAuth>
              }
            />
            <Route
              path="/agents"
              element={
                <RequireAuth>
                  <Agents />
                </RequireAuth>
              }
            />
            <Route
              path="/settings"
              element={
                <RequireAuth>
                  <Settings />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
