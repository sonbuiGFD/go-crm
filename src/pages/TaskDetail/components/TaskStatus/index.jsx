import React from 'react';
import { CheckCircleFilled, InfoCircleFilled } from '@ant-design/icons';
import { useParams } from 'react-router-dom';

import { getRandomDate } from 'utils';

import './style.scss';

const data = {
  status: 'paid',
};
const TaskStatus = ({ detail = data }) => {
  const isAprroved = detail.status === 'accepted';
  const isDeclined = detail.status === 'declined';
  const isPaid = detail.status === 'paid';
  const isClosed = detail.status === 'closed';

  return (
    <div className="invoice_status mt-5">
      <div className="invoice_status__content">
        <div
          className={`invoice_status__item Pending ${isAprroved || isDeclined || isPaid || isClosed ? 'checked' : ''}`}
        >
          <div className="item__content">
            <div className="item__dot"></div>
            <div className="item__icon show">
              <CheckCircleFilled />
            </div>
            <div className="item__name"> {`New`}</div>
            <div className="item__des">{`Investigate on user request`}</div>
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
            <div className="item__name">{isDeclined || isClosed ? `In Progress` : `In Progress`}</div>
            <div className="item__des">{`Contact customer with matched infomation`}</div>
          </div>
        </div>

        <div className={`invoice_status__item  Paid ${isPaid || isClosed ? 'checked' : ''}`}>
          <div className="item__content">
            <div className="item__dot"></div>
            <div className="item__icon">
              <CheckCircleFilled />
            </div>
            <div className="item__name">{isClosed || isDeclined ? `Done` : `Done`}</div>
            <div className="item__des">
              <div className="">{`Send invoice to customer`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
