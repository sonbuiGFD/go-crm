import React from 'react';

import { getRandomDate } from 'utils';

import './style.scss';

const data = {
  status: 'paid',
  baseline_date: getRandomDate(),
  due_date: getRandomDate(),
  paid_date: getRandomDate(),
  payment_amount: 1000000,
  decline_reason: '',
};

const WorkFlow = ({ invoiceDetail = data }) => {
  return <div className="invoice_WorkFlow"></div>;
};

export default WorkFlow;
