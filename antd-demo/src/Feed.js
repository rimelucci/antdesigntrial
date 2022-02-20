import React from 'react';
import { Button, Input, Row, Typography, Menu, Layout, Col, Space, Divider} from 'antd';

import './App.css';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';

const { Title } = Typography;
const { Content, Header } = Layout;


export const Feed = () => {
  return (
    <div className="feed-page">
        <Layout className="feed-page">
          <NavBar />
          <Content justify="center">
            <div className="feed-container">
              <div className="request-input">
                <Title style={{color: "#008080"}} level={3} justify="left">Who are you looking to meet today?</Title>
                <Input placeholder="Basic usage" />
                <Button style={{marginTop: "10px", marginBottom: "10px"}}>Submit</Button>
                <Divider></Divider>
              </div>
              <Request name="Rick Melucci" title="Looking for rapper for a feature on my track!"/>
              <Request name="Dimitar Novakov" title="Looking for crypto specialist..."/>
              <Request name="Max Vrancken" title="Seeking React engineer for a project"/>
            </div>
          </Content>
        </Layout>
    </div>
  );
};


export const Request = (props) => {
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <Row justify="center" align="middle" className="request-box" >
      <Row>
        <Space size={'middle'} split={<Divider type="vertical" />} align="middle">
          <Col>
            <div className="profile-pic"></div>
          </Col>
          <Col>
            <Title className="title-green-text" level={5}>{props.title}</Title>
          </Col>
          <Col>
            <Title className="title-green-text-secondary" level={5}>{props.name}</Title>
          </Col>
          <Col style={{float: "right"}}>
            <Title className="title-green-text-secondary" level={5}>2 hrs ago</Title>
          </Col>
        </Space>
      </Row>
      <Row>
        <Title style={{color: "#008080", margin: "15px"}} level={5}>{description}</Title>
      </Row>
      <Row style={{float: "right"}}>
        <Button>Vouch for a friend</Button>
      </Row>
      <Divider/>
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