import React from 'react';
import { Row, Col, Input, Button, Form } from 'antd';
import './style.scss';

const FilterForm = props => {
  const [form] = Form.useForm();
  const { filter = {}, updateActionProps = () => {}, getUsers = () => {} } = props;

  const handleClearFilter = () => {
    form.resetFields();
    getUsers();
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
    getUsers();
  };

  return (
    <div className="invoice_filter">
      <div className="invoice_filter__top">
        <div className="invoice_filter__title">{`Users Listing`}</div>
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
        <Row gutter={[16, 20]} align={'bottom'}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="invoice_filter__label">{`Search`}</div>
            <Form.Item name={'po_code'} noStyle>
              <Input placeholder={`${`Search users`}`} />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="">
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
    </div>
  );
};

export default FilterForm;
