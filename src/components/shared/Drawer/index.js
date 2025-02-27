import React, { useContext, memo } from "react";
import { NavLink } from "react-router-dom";
import { ToggleContext } from "../../../globalState/index";

import { Menu, Drawer } from "antd";

import "./index.scss";

export default memo(function DefaultDrawer(props) {
  const [toggler, setToggler] = useContext(ToggleContext);

  return (
    <Drawer
      className="drawer"
      placement="left"
      visible={toggler}
      closable={false}
      onClose={() => setToggler(false)}
    >
      <Menu selectedKeys={[props.activeURL]} onSelect={() => setToggler(false)}>
        {props.paths.map((path) => (
          <Menu.Item key={path.slug}>
            <NavLink to={path.route}>{path.label}</NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </Drawer>
  );
});
