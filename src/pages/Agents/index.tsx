import React, { memo } from 'react';

import FilterFrom from './components/FilterForm';
import TableData from './components/TableData';
import CreateModel from './components/CreateModel';

import './style.scss';

const Agents = () => {
  return (
    <div className="invoices__page">
      <FilterFrom />
      <div className="invoices__body">
        <TableData />
      </div>
      <CreateModel />
    </div>
  );
};

export default memo(Agents);
