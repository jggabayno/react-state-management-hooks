import React, { useContext, memo } from "react";
import { loginRequest } from "../../utilities/api";
import { AuthContext } from "../../globalState/index";
import "./index.scss";
import { Row, Col, Form, Input, Button } from "antd";

export default memo(function Login() {
  const [state, dispatch] = useContext(AuthContext);
  const [form] = Form.useForm();

  async function handleSubmit(values) {
    dispatch({ type: "LOGIN" });

    try {
      const response = await loginRequest("adminLogin", values);
      const data = await response.data;
      dispatch({ type: "SUCCESS", payload: data });
      window.location.href = "/";
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  }

  return (
    <Row type="flex" justify="space-between" align="middle" className="login">
      <Col span={18} className="bg"></Col>
      <Col span={6} className="wrapForm">
        <p>{state.error && state.error}</p>
        <Form
          form={form}
          name="login"
          onFinish={handleSubmit}
          layout="vertical"
          hideRequiredMark
          scrollToFirstError
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input autoFocus />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">Login</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
});
