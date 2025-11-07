import React, { useMemo } from "react";
import { Space, Card, Row, Col, Typography } from "antd";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { UserProfile } from "../../types/investment";
import { INVESTMENTS } from "../../constants/investments";
import { UserProfileCard } from "./UserProfileCard";
import { AllocationChart } from "./AllocationChart";
import { InvestmentCard } from "./InvestmentCard";

const { Title, Text } = Typography;

interface Props {
  userProfile: UserProfile;
}

export const InvestmentRecommendations: React.FC<Props> = ({ userProfile }) => {
  const recommendedAllocation = useMemo(
    () => ({
      "Quỹ khẩn cấp": 15,
      "Trái phiếu": userProfile.riskTolerance === "Bảo thủ" ? 40 : 25,
      "Bất động sản": 15,
      "Quỹ đầu tư": userProfile.riskTolerance === "Mạo hiểm" ? 35 : 25,
      "Vàng & Kim loại quý": 5,
      "Tài khoản hưu trí": 20,
    }),
    [userProfile.riskTolerance]
  );

  const investments = useMemo(
    () =>
      INVESTMENTS.map((inv) => ({
        ...inv,
        riskLevel:
          inv.id === "4" && userProfile.riskTolerance === "Bảo thủ"
            ? "Trung bình"
            : inv.riskLevel,
      })),
    [userProfile.riskTolerance]
  );

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <UserProfileCard profile={userProfile} />
      <AllocationChart allocation={recommendedAllocation} />

      <Title level={3}>Đầu Tư Được Đề Xuất</Title>
      <Row gutter={[16, 16]}>
        {investments.map((inv) => (
          <Col xs={24} md={12} lg={8} key={inv.id}>
            <InvestmentCard investment={inv} />
          </Col>
        ))}
      </Row>

      <Card title="Tuyên Bố Miễn Trừ Trách Nhiệm" type="inner">
        <Space direction="vertical">
          <Text type="secondary">
            <SafetyCertificateOutlined /> Đây chỉ là tư vấn giáo dục.
          </Text>
          <Text type="secondary">
            Hiệu suất quá khứ không đảm bảo tương lai.
          </Text>
          <Text type="secondary">
            Hãy tham khảo cố vấn tài chính chuyên nghiệp.
          </Text>
        </Space>
      </Card>
    </Space>
  );
};
