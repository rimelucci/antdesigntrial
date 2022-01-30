import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, Typography, Col } from 'antd';
import { Feed } from './Feed';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './App.css';

const { Title } = Typography;

export const NormalLoginContainer = () => {
    return (
        // <div style={{minHeight: "100%"}}>
            <Row justify="center" align="middle" style={{height: "100vh"}}>
            <div style={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "center"}}>
                <Title level={2} >Vouch</Title>
                <LoginForm/>
            </div>
            </Row>
        // </div>
    );
};


const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
            >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
            >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
            />
            </Form.Item>
            <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
                Forgot password
            </a>
            </Form.Item>

            <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" href="/feed">
                Log in
            </Button>
            <br/>
            Or <a href="">register now!</a>
            </Form.Item>
        </Form>
        </>
    );
};
