import React, { memo } from "react";
import "./index.scss";
import { Row, Col } from "antd";

export default memo(function NotFound(props) {
  return (
    <Row className="not-found">
      <Col>
        <h1>404 page not found</h1>
        <p> We are sorry but the page you are looking for does not exist.</p>
        <p onClick={() => props.history.goBack()}>Go back.</p>
      </Col>
    </Row>
  );
});
