import React from 'react';
import { Tag, Button } from 'antd';
import { updateOpenModal, updateModalUser } from 'store/features/userSlide';
import { useAppDispatch } from 'store';

const useColumn = () => {
  const dispatch = useAppDispatch();

  const handleOpen = item => {
    dispatch(updateModalUser(item));
    dispatch(updateOpenModal(true));
  };

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
      title: `User name`,
      dataIndex: 'user_name',
      key: 'user_name',
      width: 140,
      render: text => {
        return <Tag>{text}</Tag>;
      },
    },
    {
      title: `Email`,
      dataIndex: 'email',
      key: 'email',
      width: 140,
    },
    {
      title: `Phone`,
      dataIndex: 'phone',
      key: 'phone',
      width: 120,
    },
    {
      title: `Address`,
      dataIndex: 'address',
      key: 'address',
      width: 190,
    },
    {
      title: `Notes`,
      dataIndex: 'notes',
      key: 'notes',
      width: 170,
    },
    {
      title: `Permissions`,
      dataIndex: 'permissions',
      key: 'permissions',
      width: 200,
      render: pers => {
        if (!pers) {
          return null;
        }
        return pers.map(per => (
          <Tag key={`item__per__${per}`} className="mr-2 mb-2">
            {per}
          </Tag>
        ));
      },
    },
    {
      title: `Action`,
      dataIndex: 'action',
      key: 'action',
      width: 80,
      fixed: 'right',
      render: (_, item) => (
        <div className="table__action d-flex">
          <Button onClick={() => handleOpen(item)}>{`Edit`}</Button>
        </div>
      ),
    },
  ];
};

export default useColumn;
