import React from "react";
import { Layout, Typography, Space } from "antd";
import { BankOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Title } = Typography;

export const HeaderComponent: React.FC = () => (
  <Header
    style={{ display: "flex", alignItems: "center", background: "#001529" }}
  >
    <Space>
      <BankOutlined style={{ fontSize: "28px", color: "#fff" }} />
      <Title level={3} style={{ color: "#fff", margin: 0 }}>
        Đầu Tư Thông Minh
      </Title>
    </Space>
  </Header>
);
