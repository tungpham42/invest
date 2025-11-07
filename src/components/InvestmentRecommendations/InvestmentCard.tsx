import React from "react";
import { Card, Tag, Space, List, Typography } from "antd";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import { InvestmentAdvice } from "../../types/investment";
import { formatCurrency } from "../../utils/format";

const { Paragraph, Text } = Typography;

interface Props {
  investment: InvestmentAdvice;
}

const getRiskColor = (risk: string) =>
  risk === "Thấp" ? "green" : risk === "Trung bình" ? "orange" : "red";

export const InvestmentCard: React.FC<Props> = ({ investment }) => {
  return (
    <Card
      title={
        <Space>
          {investment.title}
          <Tag color={getRiskColor(investment.riskLevel)}>
            Rủi ro {investment.riskLevel}
          </Tag>
        </Space>
      }
      extra={<Tag color="blue">{investment.category}</Tag>}
    >
      <Paragraph>{investment.description}</Paragraph>

      <Space direction="vertical" style={{ width: "100%" }}>
        <Text strong>Thời gian: {investment.timeHorizon}</Text>
        <Text strong>
          Tối thiểu:{" "}
          {investment.minimumAmount === 0
            ? "Không yêu cầu"
            : formatCurrency(investment.minimumAmount)}
        </Text>

        <div>
          <Text strong style={{ color: "#52c41a" }}>
            Ưu điểm:
          </Text>
          <List
            size="small"
            dataSource={investment.pros}
            renderItem={(item) => (
              <List.Item>
                <RiseOutlined style={{ color: "green", marginRight: 8 }} />{" "}
                {item}
              </List.Item>
            )}
          />
        </div>

        <div>
          <Text strong style={{ color: "#f5222d" }}>
            Nhược điểm:
          </Text>
          <List
            size="small"
            dataSource={investment.cons}
            renderItem={(item) => (
              <List.Item>
                <FallOutlined style={{ color: "red", marginRight: 8 }} /> {item}
              </List.Item>
            )}
          />
        </div>
      </Space>
    </Card>
  );
};
