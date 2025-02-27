import React, { memo } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Layout } from "antd";
import "./index.scss";

const { SubMenu } = Menu;

export default memo(function Sider(props) {
  return (
    <Layout.Sider  className="sider">
      <Menu mode="inline"
        theme="light" selectedKeys={[props.activeURL]}>
        {props.paths.map((path) => (
          <Menu.Item key={path.slug}>
            <NavLink to={path.route}>{path.label}</NavLink>
          </Menu.Item>
        ))}
              <SubMenu
          key="sub3"
          title={
            <span>
              <span>Admin</span>
            </span>
          }
        >
          <Menu.Item key="user-types">
            <Link to="/">User Types</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Layout.Sider>
  );
});
