import React from 'react';
import { Button, Input, Row, Typography, Menu, Layout } from 'antd';

import './App.css';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const { Content, Header } = Layout;


export const Feed = () => {
  return (
    <div className="feed-page">
        <Layout className="feed-page">
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
          <Content justify="center">
            <div className="feed-container">
              <div className="request-input">
                <Title style={{color: "#008080"}} level={3} justify="left">Who are you looking to meet today?</Title>
                <Input placeholder="Basic usage" />
                <Button style={{marginTop: "10px", marginBottom: "10px"}}>Submit</Button>
              </div>
              <Request />
              <Request />
              <Request />
            </div>
          </Content>
        </Layout>
    </div>
  );
};


export const Request = () => {
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <Row justify="center" align="middle" className="request-box" >
      <Title style={{color: "#66B2B2"}} level={2}>Rick Melucci</Title>
      <Title style={{color: "#008080"}} level={5}>{description}</Title>
    </Row>
  )
}

export const TestPaths = () => {
  <div className="App">
    <h1>yurrr</h1>
    <Button href="/">Take me back yurr</Button>
  </div>
}

export default Feed;