import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { getRandomDate, formatDecimalVND } from 'utils';

import './style.scss';

const InvoiceInfomation = props => {
  const {
    data = {
      user_name: 'Son Bui',
      serial_number: '#12456',
      invoice_date: getRandomDate(),
      invoice_number: 1000000,
    },
  } = props;

  return (
    <Card className="invoice_infomation">
      <div className="invoice_infomation__info">
        <div className="info_header" style={{ marginTop: 0 }}>
          <div className="title">{`Basic Infomation`}</div>
          <div className="edit">
            <Button type="primary">Edit</Button>
          </div>
        </div>
        <Row className="info_basic">
          <Col flex="5" className="mr-3">
            <div className="info_basic__key">{`User name`}</div>
            <div className="info_basic__value">{data.user_name}</div>
          </Col>
          <Col flex="5" className="mr-3">
            <div className="info_basic__key">{`Serial number`}</div>
            <div className="info_basic__value">{data.serial_number}</div>
          </Col>
        </Row>
        <Row className="info_basic">
          <Col flex="5" className="mr-3">
            <div className="info_basic__key">{`Invoice date`}</div>
            <div className="info_basic__value">{data.invoice_date}</div>
          </Col>
          <Col flex="5" className="mr-3">
            <div className="info_basic__key">{`Invoice number`}</div>
            <div className="info_basic__value">{formatDecimalVND(data.invoice_number)}</div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default InvoiceInfomation;
