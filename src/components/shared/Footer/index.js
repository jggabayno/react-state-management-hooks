import React, { memo } from "react";
import "./index.scss";
import { Layout, Typography } from "antd";

export default memo(function Footer() {
  return (
    <Layout.Footer className="footer">
      <Typography.Title level={4}>Boilerplate @ 2020</Typography.Title>
    </Layout.Footer>
  );
});
