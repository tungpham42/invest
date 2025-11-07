import React from "react";
import { Card, Row, Col, Typography, Space, Tag, Divider } from "antd";
import {
  UserOutlined,
  DollarOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { UserProfile } from "../../types/investment";
import { formatCurrency } from "../../utils/format";

const { Title, Text } = Typography;

const getRiskColor = (tolerance: string) => {
  return tolerance === "Bảo thủ"
    ? "green"
    : tolerance === "Cân bằng"
    ? "orange"
    : "red";
};

interface Props {
  profile: UserProfile;
}

export const UserProfileCard: React.FC<Props> = ({ profile }) => {
  return (
    <Card>
      <Title level={3}>
        <UserOutlined /> Hồ Sơ Đầu Tư Của Bạn
      </Title>

      <Row gutter={[24, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical">
            <Text strong>
              <UserOutlined /> Tuổi
            </Text>
            <Text strong style={{ fontSize: 18 }}>
              {profile.age}
            </Text>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical">
            <Text strong>
              <DollarOutlined /> Mức độ rủi ro
            </Text>
            <Tag
              color={getRiskColor(profile.riskTolerance)}
              style={{ fontSize: 14 }}
            >
              {profile.riskTolerance}
            </Tag>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical">
            <Text strong>
              <ClockCircleOutlined /> Thời gian
            </Text>
            <Text strong style={{ fontSize: 18 }}>
              {profile.timeHorizon} năm
            </Text>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical">
            <Text strong>
              <TrophyOutlined /> Mục tiêu
            </Text>
            <Text strong style={{ fontSize: 16 }}>
              {profile.investmentGoal}
            </Text>
          </Space>
        </Col>
      </Row>

      <Divider />

      <Row gutter={24}>
        <Col span={12}>
          <Text strong>Thu nhập hàng năm</Text>
          <Text style={{ fontSize: 18, color: "#1890ff", fontWeight: "bold" }}>
            {formatCurrency(profile.income)}
          </Text>
        </Col>
        <Col span={12}>
          <Text strong>Tiết kiệm hiện tại</Text>
          <Text style={{ fontSize: 18, color: "#52c41a", fontWeight: "bold" }}>
            {formatCurrency(profile.currentSavings)}
          </Text>
        </Col>
      </Row>
    </Card>
  );
};
