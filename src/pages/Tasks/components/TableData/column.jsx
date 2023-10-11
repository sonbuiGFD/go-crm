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
      title: `Customer`,
      dataIndex: 'custommer',
      fixed: 'left',
      key: 'custommer',
      width: 110,
      render: text => {
        return <Tag>{text}</Tag>;
      },
    },
    {
      title: `Type`,
      dataIndex: 'task_type',
      key: 'task_type',
      width: 110,
      render: text => {
        return <Tag>{text}</Tag>;
      },
    },
    {
      title: `Price Range`,
      dataIndex: 'price_min',
      key: 'price_min',
      width: 190,
      render: (_, item) => {
        return (
          <div>
            {formatDecimalVND(item.price_min, 0)} - {formatDecimalVND(item.price_max, 0)}
          </div>
        );
      },
    },
    {
      title: `Commision`,
      dataIndex: 'commission',
      key: 'commission',
      width: 110,
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
          <Link className="" to={`/tasks/${item.id}`}>
            {`Detail`}
          </Link>
        </div>
      ),
    },
  ];
};

export default useColumn;
