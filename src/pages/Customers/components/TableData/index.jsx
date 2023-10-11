import React, { useEffect } from 'react';
import { Table, Select, Pagination, Button } from 'antd';
import reduce from 'lodash/reduce';
import { useAppDispatch } from 'store';
import { updateOpenModal, updateModalUser } from 'store/features/userSlide';

import useColumn from './column';
import dataList from './data';

const { Option } = Select;
const TableData = props => {
  const {
    data = dataList,
    loading = false,
    limit = 100,
    page = 1,
    total = 100,
    updateFilter = () => {},
    getCustomers = () => {},
  } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    // getCustomers();
  }, []);

  const current = page || 1;
  const columns = useColumn();

  const windW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  const windownTableWidth = windW - 288;

  const columnsWitdth = reduce(
    columns,
    (result, item) => {
      if (item.width) {
        return result + item.width;
      }
      return result;
    },
    0,
  );

  const scrollWitdth = Math.max(columnsWitdth, windownTableWidth);

  const handleChangeLimit = limit => {
    updateFilter({
      page: 1,
      limit,
    });
    getCustomers();
  };

  const onChange = (newPage, newLimit) => {
    updateFilter({
      page: newPage,
      limit: newLimit,
    });
    getCustomers();
  };

  const handleOpen = item => {
    dispatch(
      updateModalUser({
        user_name: '',
        email: '',
        phone: '',
        address: '',
        notes: '',
      }),
    );
    dispatch(updateOpenModal(true));
  };

  return (
    <div className="invoices__table">
      <div className="table__header">
        <div className="table__controls">
          <span className="mr-5">
            {`${limit * (current - 1) + 1} -
                ${limit * current} ${`of`} ${total} ${`Customers`}`}
          </span>
          <Select value={limit} onChange={handleChangeLimit} style={{ width: 110 }} className="mr-5">
            <Option value={20}>20 / {`page`}</Option>
            <Option value={30}>30 / {`page`}</Option>
            <Option value={50}>50 / {`page`}</Option>
            <Option value={80}>80 / {`page`}</Option>
            <Option value={100}>100 / {`page`}</Option>
          </Select>
        </div>
        <div className="">
          <Button type="primary" onClick={handleOpen}>
            Create
          </Button>
        </div>
      </div>
      <div className="table__body">
        <Table
          columns={columns}
          loading={loading}
          dataSource={data}
          pagination={false}
          rowKey="id"
          scroll={{ x: scrollWitdth + 100 }}
          sticky={true}
          bordered
        />
      </div>
      <div className="invoices__pagination">
        <Pagination
          current={current}
          pageSize={limit}
          total={total}
          showSizeChanger={false}
          onChange={onChange}
          showTotal={totalProduct => {
            return `${limit * (current - 1) + 1} -
          ${limit * current} ${`of`} ${totalProduct} ${`Customers`}`;
          }}
        />
        <Select value={limit} onChange={handleChangeLimit} style={{ width: 110, marginLeft: '16px' }}>
          <Option value={20}>20 / {`page`}</Option>
          <Option value={30}>30 / {`page`}</Option>
          <Option value={50}>50 / {`page`}</Option>
          <Option value={80}>80 / {`page`}</Option>
          <Option value={100}>100 / {`page`}</Option>
        </Select>
      </div>
    </div>
  );
};

export default TableData;
