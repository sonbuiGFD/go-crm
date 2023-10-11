import React from 'react';
import { Row, Col, Card, Button } from 'antd';

import './style.scss';

const Infomation = props => {
  const {
    data = {
      custmer: 'Son Bui',
      email: 'sonbui@gmail.com',
      phone: '0912345678',
      address: '181/30 Phan Dang Luu, P1, Q.Phu Nhuan',
      notes: 'Khách dễ chịu, dễ nói chuyện, nhắn tin khách sẽ trả lời khi rảnh chứ đừng call spam',
    },
  } = props;

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={12} lg={12}>
        <Card className="invoice_infomation" style={{ marginBottom: 20, height: '100%' }}>
          <div className="invoice_infomation__info">
            <div className="info_header" style={{ marginTop: 0 }}>
              <div className="title">{`Customer`}</div>
              <div className="edit">
                <Button type="primary">Edit</Button>
              </div>
            </div>
            <Row className="">
              <Col xs={24} sm={24} md={12} lg={12} className="mb-3">
                <div className="info_basic__key">{`Customer`}</div>
                <div className="info_basic__value">{data.custmer}</div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} className="mb-3">
                <div className="info_basic__key">{`Email`}</div>
                <div className="info_basic__value">{data.email}</div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} className="mb-3">
                <div className="info_basic__key">{`Phone`}</div>
                <div className="info_basic__value">{data.phone}</div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} className="mb-3">
                <div className="info_basic__key">{`Address`}</div>
                <div className="info_basic__value">{data.address}</div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} className="mb-3">
                <div className="info_basic__key">{`Notes`}</div>
                <div className="info_basic__value">{data.notes}</div>
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12}>
        <Card className="invoice_infomation" style={{ marginBottom: 20, height: '100%' }}>
          <div className="invoice_infomation__info">
            <div className="info_header" style={{ marginTop: 0 }}>
              <div className="title">{`Request`}</div>
              <div className="edit">
                <Button type="primary">Edit</Button>
              </div>
            </div>
            <Row className="">
              <Col xs={24} sm={24} md={24} lg={24}>
                <div className="">
                  <p className="mb-3">
                    Tôi đang tìm kiếm một căn hộ ở Phú Nhuận, nằm gần trung tâm chợ và đầy đủ tiện ích, dự kiến mức giá
                    tối đa 5 triệu đồng mỗi tháng. Căn hộ lý tưởng sẽ nằm gần bờ sông và tọa lạc trong một khu vực dân
                    cư yên tĩnh.
                  </p>
                  <p className="mb-3">
                    Với mức giá này, tôi mong muốn tìm được căn hộ đã được trang bị sẵn nội thất cơ bản hoặc đầy đủ. Căn
                    hộ cần có ít nhất một phòng ngủ, một phòng tắm, và không gian sinh hoạt chung với khu vực bếp.
                  </p>
                  <p className="mb-3">
                    Vị trí gần bờ sông là một điểm quan trọng, bởi đó là nơi tôi muốn tận hưởng không gian xanh mát và
                    tĩnh lặng. Khu dân cư xung quanh nên yên tĩnh để đảm bảo cuộc sống hàng ngày của tôi sẽ được nghỉ
                    ngơi và thư giãn sau một ngày làm việc.
                  </p>
                  <p className="mb-3">
                    Nếu bạn có thông tin hoặc gợi ý về căn hộ phù hợp, xin vui lòng liên hệ với tôi. Tôi rất mong tìm
                    được một nơi ở lý tưởng và hài lòng tại Phú Nhuận.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Infomation;
