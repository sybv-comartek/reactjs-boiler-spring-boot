import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./styled/index.scss";
import { Card } from "antd";
import useLogin from "@modules/Auth/hooks/useLogin";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const LoginPage = () => {
  const { onLogin, loading } = useLogin();
  const onFinish = (values: any) => {
    onLogin({
      email: values.email,
      password: values.password,
    });
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contai d-flex align-items-center justify-content-center">
      <Card
        style={{
          width: 500,
          height: 400,
          backgroundColor: "#EEEEEE",
          borderRadius: 30,
        }}
        className="d-flex align-items-center justify-content-center"
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
