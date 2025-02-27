import React, { memo } from "react";
import "./index.scss";
import { Layout, Row, Col, Typography } from "antd";

export default memo(function Home() {
  return (
    <Layout className="usertypes-page page">
      <Layout.Content className="page-content">
        <Row type="flex" align="middle" className="title-add">
          <Col span={12}>
            <Typography.Title className="page-title">Title</Typography.Title>
          </Col>
          {/* <Col span={12} align="right">
            <Button type="primary">Add New ?</Button>
          </Col> */}
        </Row>
        <Row type="flex" align="middle">
          <Col span={24}></Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
});
