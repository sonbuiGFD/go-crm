import React, { memo } from 'react';

import FilterForm from './components/FilterForm';
import TableData from './components/TableData';

import './style.scss';

const Tasks = () => {
  return (
    <div className="invoices__page">
      <FilterForm />
      <div className="invoices__body">
        <TableData />
      </div>
    </div>
  );
};

export default memo(Tasks);
