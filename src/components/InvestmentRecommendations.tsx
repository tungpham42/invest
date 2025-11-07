import React from "react";
import {
  Card,
  Row,
  Col,
  Tag,
  List,
  Typography,
  Space,
  Progress,
  Divider,
} from "antd";
import {
  SafetyCertificateOutlined,
  RiseOutlined,
  FallOutlined,
  UserOutlined,
  DollarOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { InvestmentAdvice, UserProfile } from "../types/investment";

const { Title, Text, Paragraph } = Typography;

interface InvestmentRecommendationsProps {
  userProfile: UserProfile | null;
}

export const InvestmentRecommendations: React.FC<
  InvestmentRecommendationsProps
> = ({ userProfile }) => {
  console.log("UserProfile in Recommendations:", userProfile); // Debug log

  const formatCurrency = (amount: number) => {
    if (isNaN(amount) || amount === null || amount === undefined) {
      return "0 ₫";
    }
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Thấp":
        return "green";
      case "Trung bình":
        return "orange";
      case "Cao":
        return "red";
      default:
        return "blue";
    }
  };

  const getRiskToleranceColor = (tolerance: string) => {
    switch (tolerance) {
      case "Bảo thủ":
        return "green";
      case "Cân bằng":
        return "orange";
      case "Mạo hiểm":
        return "red";
      default:
        return "blue";
    }
  };

  // Investment data without useMemo
  const investmentData: InvestmentAdvice[] = [
    {
      id: "1",
      title: "Tài khoản tiết kiệm lãi suất cao",
      description:
        "Hoàn hảo cho quỹ khẩn cấp với bảo hiểm tiền gửi và dễ dàng tiếp cận tiền mặt.",
      category: "Quỹ khẩn cấp",
      riskLevel: "Thấp",
      timeHorizon: "Ngắn hạn",
      minimumAmount: 0,
      pros: [
        "Được bảo hiểm tiền gửi",
        "Tiếp cận dễ dàng",
        "Không rủi ro cho vốn gốc",
      ],
      cons: ["Lợi nhuận thấp hơn", "Rủi ro lạm phát"],
    },
    {
      id: "2",
      title: "Quỹ đầu tư bất động sản (REITs)",
      description:
        "Đầu tư vào bất động sản mà không cần sở hữu tài sản vật chất. Cung cấp cổ tức thường xuyên.",
      category: "Bất động sản",
      riskLevel: "Trung bình",
      timeHorizon: "Trung đến dài hạn",
      minimumAmount: 10000000,
      pros: ["Thu nhập thường xuyên", "Đa dạng hóa", "Tính thanh khoản"],
      cons: ["Rủi ro thị trường", "Nhạy cảm với lãi suất"],
    },
    {
      id: "3",
      title: "Trái phiếu Chính phủ",
      description:
        "Đầu tư rủi ro thấp được chính phủ bảo lãnh với các khoản thanh toán lãi suất cố định.",
      category: "Trái phiếu",
      riskLevel: "Thấp",
      timeHorizon: "Trung hạn",
      minimumAmount: 1000000,
      pros: ["Được chính phủ bảo lãnh", "Lợi nhuận cố định", "Rủi ro thấp"],
      cons: ["Lợi nhuận thấp hơn", "Rủi ro lạm phát"],
    },
    {
      id: "4",
      title: "Quỹ chỉ số (Index Funds)",
      description:
        "Danh mục đầu tư đa dạng theo dõi chỉ số thị trường với phí thấp.",
      category: "Quỹ đầu tư",
      riskLevel:
        userProfile?.riskTolerance === "Bảo thủ" ? "Trung bình" : "Cao",
      timeHorizon: "Dài hạn",
      minimumAmount: 1000000,
      pros: ["Đa dạng hóa", "Phí thấp", "Quản lý chuyên nghiệp"],
      cons: ["Rủi ro thị trường", "Không có lợi nhuận đảm bảo"],
    },
    {
      id: "5",
      title: "Vàng & Kim loại quý",
      description: "Phòng ngừa lạm phát và bất ổn kinh tế.",
      category: "Vàng & Kim loại quý",
      riskLevel: "Trung bình",
      timeHorizon: "Dài hạn",
      minimumAmount: 5000000,
      pros: ["Phòng ngừa lạm phát", "Đa dạng hóa danh mục", "Tài sản hữu hình"],
      cons: ["Không tạo ra thu nhập", "Chi phí lưu trữ", "Biến động giá"],
    },
    {
      id: "6",
      title: "Tài khoản hưu trí",
      description:
        "Tài khoản hưu trí với tăng trưởng miễn thuế và rút tiền miễn thuế khi nghỉ hưu.",
      category: "Tài khoản hưu trí",
      riskLevel: "Trung bình",
      timeHorizon: "Dài hạn",
      minimumAmount: 0,
      pros: [
        "Tăng trưởng miễn thuế",
        "Rút tiền miễn thuế",
        "Đóng góp linh hoạt",
      ],
      cons: ["Giới hạn đóng góp", "Phạt rút tiền sớm"],
    },
  ];

  // Recommended allocation without useMemo
  const recommendedAllocation = {
    "Quỹ khẩn cấp": 15,
    "Trái phiếu": userProfile?.riskTolerance === "Bảo thủ" ? 40 : 25,
    "Bất động sản": 15,
    "Quỹ đầu tư": userProfile?.riskTolerance === "Mạo hiểm" ? 35 : 25,
    "Vàng & Kim loại quý": 5,
    "Tài khoản hưu trí": 20,
  };

  // Now the conditional return can happen after all hooks
  if (!userProfile) {
    return (
      <Card>
        <Title level={3}>Không có thông tin hồ sơ</Title>
        <Text>Vui lòng hoàn thành đánh giá rủi ro trước.</Text>
      </Card>
    );
  }

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      {/* User Profile Section - Improved */}
      <Card>
        <Title level={3} style={{ marginBottom: 24 }}>
          <UserOutlined /> Hồ Sơ Đầu Tư Của Bạn
        </Title>

        <Row gutter={[24, 16]}>
          <Col xs={24} sm={12} md={6}>
            <Space direction="vertical" size="small">
              <Text strong>
                <UserOutlined /> Tuổi
              </Text>
              <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
                {userProfile.age || 0}
              </Text>
            </Space>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Space direction="vertical" size="small">
              <Text strong>
                <DollarOutlined /> Mức độ rủi ro
              </Text>
              <Tag
                color={getRiskToleranceColor(
                  userProfile.riskTolerance || "Cân bằng"
                )}
                style={{ fontSize: "14px", padding: "4px 8px" }}
              >
                {userProfile.riskTolerance || "Cân bằng"}
              </Tag>
            </Space>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Space direction="vertical" size="small">
              <Text strong>
                <ClockCircleOutlined /> Thời gian đầu tư
              </Text>
              <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
                {userProfile.timeHorizon || 0} năm
              </Text>
            </Space>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Space direction="vertical" size="small">
              <Text strong>
                <TrophyOutlined /> Mục tiêu
              </Text>
              <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
                {userProfile.investmentGoal || "Hưu trí"}
              </Text>
            </Space>
          </Col>
        </Row>

        <Divider />

        <Row gutter={[24, 16]}>
          <Col xs={24} sm={12}>
            <Space direction="vertical" size="small">
              <Text strong>Thu nhập hàng năm</Text>
              <Text
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1890ff",
                }}
              >
                {formatCurrency(userProfile.income)}
              </Text>
            </Space>
          </Col>

          <Col xs={24} sm={12}>
            <Space direction="vertical" size="small">
              <Text strong>Tiết kiệm hiện tại</Text>
              <Text
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#52c41a",
                }}
              >
                {formatCurrency(userProfile.currentSavings)}
              </Text>
            </Space>
          </Col>
        </Row>
      </Card>

      <Card title="Phân Bổ Danh Mục Được Đề Xuất">
        <Row gutter={[16, 16]}>
          {Object.entries(recommendedAllocation).map(
            ([category, percentage]) => (
              <Col xs={24} sm={12} md={8} key={category}>
                <Card size="small" style={{ height: "100%" }}>
                  <Text strong style={{ fontSize: "14px" }}>
                    {category}
                  </Text>
                  <Progress
                    percent={percentage}
                    size="small"
                    style={{ marginTop: 8 }}
                    strokeColor={{
                      "0%": "#108ee9",
                      "100%": "#87d068",
                    }}
                  />
                  <Text
                    type="secondary"
                    style={{ display: "block", marginTop: 4, fontSize: "12px" }}
                  >
                    {percentage}% tổng danh mục
                  </Text>
                </Card>
              </Col>
            )
          )}
        </Row>
      </Card>

      <Title level={3}>Đầu Tư Được Đề Xuất</Title>

      <Row gutter={[16, 16]}>
        {investmentData.map((investment) => (
          <Col xs={24} md={12} key={investment.id}>
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
              style={{ height: "100%" }}
            >
              <Paragraph style={{ fontSize: "14px" }}>
                {investment.description}
              </Paragraph>

              <Space direction="vertical" style={{ width: "100%" }}>
                <Text strong>Thời gian đầu tư: {investment.timeHorizon}</Text>
                {investment.minimumAmount !== undefined &&
                  investment.minimumAmount > 0 && (
                    <Text strong>
                      Số tiền tối thiểu:{" "}
                      {formatCurrency(investment.minimumAmount)}
                    </Text>
                  )}
                {investment.minimumAmount === 0 && (
                  <Text strong>Số tiền tối thiểu: Không yêu cầu</Text>
                )}

                <div>
                  <Text strong style={{ color: "#52c41a" }}>
                    Ưu điểm:
                  </Text>
                  <List
                    size="small"
                    dataSource={investment.pros}
                    renderItem={(pro) => (
                      <List.Item style={{ padding: "4px 0" }}>
                        <RiseOutlined
                          style={{ color: "green", marginRight: 8 }}
                        />
                        <span style={{ fontSize: "13px" }}>{pro}</span>
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
                    renderItem={(con) => (
                      <List.Item style={{ padding: "4px 0" }}>
                        <FallOutlined
                          style={{ color: "red", marginRight: 8 }}
                        />
                        <span style={{ fontSize: "13px" }}>{con}</span>
                      </List.Item>
                    )}
                  />
                </div>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      <Card title="Tuyên Bố Miễn Trừ Trách Nhiệm Quan Trọng" type="inner">
        <Space direction="vertical">
          <Text type="secondary">
            <SafetyCertificateOutlined /> Đây chỉ là tư vấn giáo dục. Hãy tham
            khảo ý kiến cố vấn tài chính có trình độ trước khi đưa ra quyết định
            đầu tư.
          </Text>
          <Text type="secondary">
            Hiệu suất trong quá khứ không thể hiện kết quả tương lai. Tất cả các
            khoản đầu tư đều có rủi ro.
          </Text>
          <Text type="secondary">
            Không cung cấp lời khuyên về thị trường chứng khoán. Hãy xem xét
            tình hình tài chính và mục tiêu cá nhân của bạn.
          </Text>
        </Space>
      </Card>
    </Space>
  );
};
