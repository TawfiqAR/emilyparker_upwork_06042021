import React, { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  const onFinish = (values) => {
    if (values.username === "employee" && values.password === "employee") {
      history.push("/employee");
    } else if (
      values.username === "employer1" &&
      values.password === "employer1"
    ) {
      history.push("/employer/1");
    } else if (
      values.username === "employer2" &&
      values.password === "employer2"
    ) {
      history.push("/employer/2");
    }
  };

  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <h1>Get Your Job Done</h1>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Login;
