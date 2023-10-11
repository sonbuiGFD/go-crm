import React, { memo } from 'react';

import FilterFrom from './components/FilterForm';
import TableData from './components/TableData';
import UserModel from './components/CreateModel';

import './style.scss';

const Customers = () => {
  return (
    <div className="invoices__page">
      <FilterFrom />
      <div className="invoices__body">
        <TableData />
      </div>

      <UserModel />
    </div>
  );
};

export default memo(Customers);
