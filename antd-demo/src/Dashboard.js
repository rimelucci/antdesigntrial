import React from 'react';
import { Button, Input, Row, Col, Typography, Menu, Layout, Divider, Space } from 'antd';

import './Dashboard.css';
import { NavBar } from './NavBar';

const { Title, Text } = Typography;
const { Content } = Layout;


export const Dashboard = () => {
  return (
    <div className="feed-page">
        <Layout className="feed-page">
            <NavBar/>
            <Content>
                <div className="dashboard">
                    <Row justify="space-around">
                        <MyRequests/>
                        <OngoingEngagements/>
                        <IsVouchedFor/>
                    </Row>
                </div>
            </Content>
        </Layout>
    </div>
  );
};

const MyRequests = () => {
    return (
        <Col className="active-engagement" span={6}>
            <Row justify="center" align="middle">
                <Title className="title-green-text dashboard-box-title" level={4}>My Requests</Title>
            </Row>
            <RequestEntry name="Rick Melucci"/>
            <RequestEntry name="Dimitar Novakov"/>

        </Col>
    )
}

const RequestEntry = (props) => {
    return (
        <Row className="request-entry">
            <Row wrap={false} justify="space-between">
                <Space size={'middle'} split={<Divider type="vertical" />} align="center">
                    <Col>
                        <div className="profile-pic"></div>
                    </Col>
                    <Col>
                        <Title className="title-green-text" level={5}>{props.name}</Title>
                    </Col>
                    <Col style={{float: "right"}}>
                        <Title className="title-green-text" level={5}>2 hrs ago</Title>
                    </Col>
                </Space>
                    

            </Row>
            <Divider orientation="center" style={{margin: "12px 0"}}></Divider>
            <Row>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat neque, pretium vestibulum purus et, mattis scelerisque augue. Duis imperdiet rutrum bibendum.</Text>
            </Row>
            
            <Button style={{position: "relative", float: "right", marginTop: "10px"}}>See Suggestions</Button>
        </Row>
    )
}

const OngoingEngagements = () => {
    return (
        <Col className="active-engagement" span={6}>
            <Row justify="center" align="middle">
                <Title className="title-green-text dashboard-box-title" level={4}>Ongoing Engagements</Title>
            </Row>
            <EngagementEntry name="Max Vrancken"/>
            <EngagementEntry name="Rick Melucci"/>
            <EngagementEntry name="Rick Melucci"/>
        </Col>
    )
}

const EngagementEntry = (props) => {
    return (
        <Row className="request-entry">
            <Row wrap={false} justify="space-between">
                <Space size={'middle'} split={<Divider type="vertical" />} align="center">
                    <Col>
                        <div className="profile-pic"></div>
                    </Col>
                    <Col>
                        <Title className="title-green-text" level={5}>{props.name}</Title>
                    </Col>
                    <Col style={{float: "right"}}>
                        <Title className="title-green-text" level={5}>2 hrs ago</Title>
                    </Col>
                </Space>
                    

            </Row>
            <Divider orientation="center" style={{margin: "12px 0"}}></Divider>
            <Row>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat neque, pretium vestibulum purus et, mattis scelerisque augue. Duis imperdiet rutrum bibendum.</Text>
            </Row>
            
            <Button style={{position: "relative", float: "right", marginTop: "10px"}}>See Suggestions</Button>
        </Row>
    )
}

const IsVouchedFor = () => {
    return (
        <Col className="active-engagement" span={6}>
            <Row justify="center" align="middle">
                <Title className="title-green-text dashboard-box-title" level={4}>Ongoing Engagements</Title>
            </Row>
            <VouchedEntry name="Max Vrancken"/>
        </Col>
    )
}

const VouchedEntry = (props) => {
    return (
        <Row className="request-entry">
            <Row wrap={false} justify="space-between">
                <Space size={'middle'} split={<Divider type="vertical" />} align="center">
                    <Col>
                        <div className="profile-pic"></div>
                    </Col>
                    <Col>
                        <Title className="title-green-text" level={5}>{props.name}</Title>
                    </Col>
                    <Col style={{float: "right"}}>
                        <Title className="title-green-text" level={5}>2 hrs ago</Title>
                    </Col>
                </Space>
                    

            </Row>
            <Divider orientation="center" style={{margin: "12px 0"}}></Divider>
            <Row>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat neque, pretium vestibulum purus et, mattis scelerisque augue. Duis imperdiet rutrum bibendum.</Text>
            </Row>
            
            <Button style={{position: "relative", float: "right", marginTop: "10px"}}>See Suggestions</Button>
        </Row>
    )
}

export default Dashboard;