import React, { memo } from 'react';

import FilterFrom from './components/FilterForm';
import TableInvoices from './components/TableInvoices';

import './style.scss';

const Invoices = () => {
  return (
    <div className="invoices__page">
      <FilterFrom />
      <div className="invoices__body">
        <TableInvoices />
      </div>
    </div>
  );
};

export default memo(Invoices);
