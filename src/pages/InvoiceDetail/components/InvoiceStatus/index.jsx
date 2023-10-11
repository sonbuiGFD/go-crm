import React from 'react';
import format from 'date-fns/format';
import { CheckCircleFilled, CalendarOutlined, InfoCircleFilled } from '@ant-design/icons';
import { useParams } from 'react-router-dom';

import { getRandomDate, formatDecimalVND } from 'utils';

import './style.scss';

const data = {
  status: 'paid',
  baseline_date: getRandomDate(),
  due_date: getRandomDate(),
  paid_date: getRandomDate(),
  payment_amount: 1000000,
  decline_reason: '',
};
const InvoiceStatus = ({ invoiceDetail = data }) => {
  const { baseline_date, due_date, paid_date, payment_amount } = invoiceDetail;
  const isAprroved = invoiceDetail.status === 'accepted';
  const isDeclined = invoiceDetail.status === 'declined';
  const isPaid = invoiceDetail.status === 'paid';
  const isClosed = invoiceDetail.status === 'closed';
  let { id } = useParams();

  const getDateStatus = () => {
    if (!due_date) {
      return '';
    }

    return (
      <div className="invoice_status__date">
        <div className="date item" style={{ display: 'inline-flex', color: ' #262626' }}>
          <div className="icon mr-2">
            <CalendarOutlined />
          </div>
          <span>
            {baseline_date ? `${format(new Date(baseline_date), 'dd/MM/yyyy')} - ` : ''}
            {format(new Date(due_date), 'dd/MM/yyyy')}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="invoice_status">
      <div className="invoice_status__top">
        <div className="title">
          <div className="invoice_status__title">
            {`Invoice`} {id}
          </div>
        </div>
      </div>

      <div className="invoice_status__content">
        <div
          className={`invoice_status__item Pending ${isAprroved || isDeclined || isPaid || isClosed ? 'checked' : ''}`}
        >
          <div className="item__content">
            <div className="item__dot"></div>

            <div className="item__icon show">
              <CheckCircleFilled />
            </div>
            <div className="item__name"> {`pending`}</div>
            <div className="item__des">{`Invoice is successfully submitted and waiting for approval`}</div>
          </div>
        </div>
        <div
          className={`invoice_status__item  Approved ${isDeclined ? 'Declined' : ''} ${
            isPaid || isClosed ? '' : 'notPaid'
          }  ${isAprroved || isDeclined || isPaid || isClosed ? 'checked' : ''}`}
        >
          <div className="item__content">
            <div className="item__dot"></div>
            <div className="item__icon">{isDeclined ? <InfoCircleFilled /> : <CheckCircleFilled />}</div>
            <div className="item__name">{isDeclined || isClosed ? `declined` : `approved`}</div>
            {isDeclined || isClosed ? (
              <div className="item__des">{`Invoice is declined due to invalid incorrenct data`}</div>
            ) : (
              <div className="item__des">
                {`Invoice is approved and waiting for payment`}
                {getDateStatus()}
              </div>
            )}
          </div>
        </div>

        <div className={`invoice_status__item  Paid ${isPaid || isClosed ? 'checked' : ''}`}>
          <div className="item__content">
            <div className="item__dot"></div>
            <div className="item__icon">
              <CheckCircleFilled />
            </div>
            <div className="item__name">{isClosed || isDeclined ? `closed` : `paid`}</div>
            {isClosed ? (
              <div className="item__des">
                <div className="">{`Invoice has been closed`}</div>
              </div>
            ) : (
              <div className="item__des">
                <div className="time item">
                  {paid_date ? (
                    <div className={`overdue paid`} style={{ color: '#52C41A' }}>
                      {`Paid on`} {format(new Date(paid_date), 'dd/MM/yyyy')}
                    </div>
                  ) : null}
                </div>
                <div className="">
                  {`Payment amount`}: <strong>{formatDecimalVND(payment_amount)}</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceStatus;
