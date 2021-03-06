import React from 'react';
import {
  Form,
  Input,
  Button,
  Checkbox,
} from 'antd';
import { UserOutlined, LockFilled } from '@ant-design/icons';

const layout = {
  // labelCol: {
  //   span: 8,
  // },
  // wrapperCol: {
  //   span: 16,
  // },
};
const tailLayout = {
  // wrapperCol: {
  //   offset: 8,
  //   span: 16,
  // },
};

const FormDemo = (props) => {
  console.log(props);
  const { history } = props;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  const validate = (_, value) => {
    if (value === 'demo') {
      return Promise.resolve();
    }
    if (!value) {
      return Promise.reject(`${_.field} is required`);
    }

    return Promise.reject(`The ${_.field} is incorrect`);
  };

  return (
    <Form
      {...layout}
      layout="vertical"
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
    >
      <Form.Item label="Username">
        <Form.Item
          name="username"
          noStyle
          rules={[
            // { required: true, message: 'Username is required' },
            {
              validator: validate,
            },
          ]}
        >
          <Input
            placeholder="Username"
            addonBefore={<UserOutlined />}

            // prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Password" className="margin-0">
        <Form.Item
          name="password"
          rules={[
            // { required: true, message: 'Please input your password!' },
            {
              validator: validate,
            },
          ]}
        >
          <Input.Password placeholder="Password" addonBefore={<LockFilled />} />
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Form.Item
          name="remember"
          // noStyle
          valuePropName="checked"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item className="margin-0">
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormDemo;
