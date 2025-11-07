import React from "react";
import { Card, Row, Col, Progress, Typography } from "antd";

interface Allocation {
  [category: string]: number;
}

interface Props {
  allocation: Allocation;
}

const { Text } = Typography;

export const AllocationChart: React.FC<Props> = ({ allocation }) => {
  return (
    <Card title="Phân Bổ Danh Mục Được Đề Xuất">
      <Row gutter={[16, 16]}>
        {Object.entries(allocation).map(([category, percent]) => (
          <Col xs={24} sm={12} md={8} key={category}>
            <Card size="small">
              <Text strong>{category}</Text>
              <Progress
                percent={percent}
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
              />
              <Text type="secondary" style={{ fontSize: 12 }}>
                {percent}%
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};
