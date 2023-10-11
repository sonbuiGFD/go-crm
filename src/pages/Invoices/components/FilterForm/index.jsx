import React from 'react';
import { Row, Col, Select, Input, Button, DatePicker, Form } from 'antd';
import './style.scss';

const { RangePicker } = DatePicker;

const { Option } = Select;

const FilterForm = props => {
  const [form] = Form.useForm();
  const { filter = {}, updateActionProps = () => {}, getInvoices = () => {} } = props;

  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YYYY'];

  const handleClearFilter = () => {
    form.resetFields();
    getInvoices();
  };

  const onSubmit = values => {
    const parrams = {};

    updateActionProps({
      filter: {
        ...filter,
        ...parrams,
        page: 1,
      },
    });
    getInvoices();
  };

  return (
    <div className="invoice_filter">
      <div className="invoice_filter__top">
        <div className="invoice_filter__title">{`Invoice Listing`}</div>
      </div>

      <Form
        colon={false}
        form={form}
        onFinish={onSubmit}
        initialValues={{
          invoice_number: null,
          invoice_id: null,
          po_code: null,
          invoice_type: null,
          created_by: null,
          page: 1,
          created_at: null,
        }}
      >
        <Row gutter={[16, 20]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={6}>
            <div className="invoice_filter__label">{`Code`}</div>
            <Form.Item name={'po_code'} noStyle>
              <Input placeholder={`${`Search by`} ${`code`}`} />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={6}>
            <div className="invoice_filter__label">{`Invoice Type`}</div>
            <Form.Item name={'invoice_type'} noStyle>
              <Select className="w-100" placeholder={`Select a type`} allowClear={true}>
                <Option value="instock">{`stockable`}</Option>
                <Option value="consignment">{`consignment`}</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={6}>
            <div className="invoice_filter__label">{`Invoice Status`}</div>
            <Form.Item name={'invoice_status'} noStyle>
              <Select className="w-100" placeholder={`Select one or multiple status`} allowClear={true} mode="multiple">
                <Option value="pending">{`Pending`}</Option>
                <Option value="declined">{`Declined`}</Option>
                <Option value="accepted">{`Approved`}</Option>
                <Option value="paid">{`Paid`}</Option>
                <Option value="closed">{`Closed`}</Option>
                <Option value="payment_overdue">{`Overdue`}</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6}>
            <div className="invoice_filter__label">{`Created Date`}</div>
            <Form.Item name={'created_at'} noStyle>
              <RangePicker className="w-100" format={dateFormatList} placeholder={['Start time', 'End time']} />
            </Form.Item>
          </Col>

          <Col span="24" className="">
            <div className="invoice_filter__actions">
              <div className="left"></div>
              <div className="right">
                <Button onClick={handleClearFilter} className="invoice_filter__clear mr-4">
                  {`Clear all`}
                </Button>
                <Button htmlType="submit" type="primary" className="invoice_filter__filter">
                  {`Apply`}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Form>

      {/* <FilterStatus form={form} /> */}
    </div>
  );
};

export default FilterForm;
