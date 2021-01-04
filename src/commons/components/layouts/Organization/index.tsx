import React, { useState } from "react";
import { BaseLayoutProps } from "../Empty";
import { Layout, Menu } from "antd";
import "./style.scss";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const OrganizationLayout = (props: BaseLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Layout className="organization-layout">
      <Layout className="organization-header">
        <Sider trigger={null} collapsible collapsed={isCollapsed} theme="light">
          <div className="logo" />
        </Sider>
        <Content>
          <Header className="organization-layout-background">
            {React.createElement(
              isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>
        </Content>
      </Layout>
      <Layout className="organization-content" hasSider={true}>
        <Sider trigger={null} collapsible collapsed={isCollapsed} theme="light">
          <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<ApartmentOutlined />}>
              Organization
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content
            className="organization-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default OrganizationLayout;
