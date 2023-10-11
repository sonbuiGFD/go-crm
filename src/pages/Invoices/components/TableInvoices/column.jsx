import React from 'react';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { formatDecimalVND } from 'utils';
import format from 'date-fns/format';

const useColumn = () => {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 110,
      fixed: 'left',
      render: text => {
        return <Tag>#{text}</Tag>;
      },
    },
    {
      title: `Invoice Number`,
      dataIndex: 'invoice_number',
      fixed: 'left',
      key: 'invoice_number',
      width: 140,
      render: text => {
        return <Tag>{text}</Tag>;
      },
    },
    {
      title: `Serial Number`,
      dataIndex: 'serial_number',
      key: 'serial_number',
      width: 140,
    },
    {
      title: `Invoice Date`,
      dataIndex: 'invoice_date',
      key: 'invoice_date',
      width: 120,
      render: text => {
        return <div>{format(new Date(text), 'dd/MM/yyyy')}</div>;
      },
    },
    {
      title: `Total Payment`,
      dataIndex: 'total_payment',
      key: 'total_payment',
      width: 190,
      render: text => {
        return <div>{formatDecimalVND(text, 0)}</div>;
      },
    },
    {
      title: `Payment Amount`,
      dataIndex: 'payment_amount',
      key: 'payment_amount',
      width: 170,
      className: '',
      render: text => {
        return <div>{formatDecimalVND(text, 0)}</div>;
      },
    },
    {
      title: `Created Date`,
      dataIndex: 'created_at',
      key: 'created_at',
      width: 160,
      render: text => {
        return <div>{format(new Date(text), 'dd/MM/yyyy HH:mm:ss')}</div>;
      },
    },
    {
      title: `Created By`,
      dataIndex: 'created_by_email',
      key: 'created_by_email',
      width: 130,
      render: _ => {
        return <Tag>{'system'}</Tag>;
      },
    },
    {
      title: `Updated Date`,
      dataIndex: 'updated_at',
      key: 'updated_at',
      width: 160,
      render: text => {
        return <div>{format(new Date(text), 'dd/MM/yyyy HH:mm:ss')}</div>;
      },
    },

    {
      title: `Action`,
      dataIndex: 'action',
      key: 'action',
      width: 110,
      fixed: 'right',
      render: (_, item) => (
        <div className="table__action">
          <Link className="mr-3 ant-btn ant-btn-primary" to={`/invoices/${item.id}`}>
            {`Detail`}
          </Link>
        </div>
      ),
    },
  ];
};

export default useColumn;
