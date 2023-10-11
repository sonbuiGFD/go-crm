import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import InvoiceStatus from 'pages/InvoiceDetail/components/InvoiceStatus';
import InvoiceInfomation from 'pages/InvoiceDetail/components/InvoiceInfomation';

import './style.scss';

const InvoiceDetail = () => {
  let { id } = useParams();

  useEffect(() => {
    // if (!id) {
    //   history.push('/invoices');
    //   return;
    // }
  }, [id]);

  return (
    <div className="invoice__page">
      <InvoiceStatus />
      <InvoiceInfomation />
    </div>
  );
};

export default memo(InvoiceDetail);
