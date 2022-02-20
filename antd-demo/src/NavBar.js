import React from 'react';
import { Row, Menu, Layout } from 'antd';

import './App.css';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export const NavBar = () => {
    return (
        <Header className="header">
            <div className="logo" />
            <Row justify="end">
              <Menu className="menu-links" mode="horizontal">
                <Menu.Item key="1">
                  <Link to="/feed">
                    <span className="title-green-text">Home</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/dashboard">
                    <span className="title-green-text">Dashboard</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/dashboard">
                    <span className="title-green-text">Settings</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Row>
          </Header>
    )
}