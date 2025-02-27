import React, { useContext, memo } from "react";

import "./index.scss";
import { Link } from "react-router-dom";

import { Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import { AuthContext, ToggleContext } from "../../../globalState/index";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

export default memo(function Header({ location, paths }) {
  const [, dispatch] = useContext(AuthContext);
  const [, setToggler] = useContext(ToggleContext);
  const width = useWindowWidth();

  return (
    <Layout.Header className="header">
      <Link to="/">Logo</Link>
      {width >= 768 ? (
        <Link onClick={() => dispatch({ type: "LOGOUT" })} to="/">
          Logout
        </Link>
      ) : (
        <MenuOutlined
          className="burger-menu"
          onClick={() => setToggler((prev) => !prev)}
        />
      )}
    </Layout.Header>
  );
});
