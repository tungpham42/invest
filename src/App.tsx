import React, { useState } from "react";
import { Layout, Typography, theme } from "antd";
import { HeaderComponent } from "./components/HeaderComponent";
import { RiskAssessment } from "./components/RiskAssessment";
import { InvestmentRecommendations } from "./components/InvestmentRecommendations/InvestmentRecommendations";
import { UserProfile } from "./types/investment";

const { Content, Footer } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderComponent />
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: colorBgContainer,
            padding: 24,
            marginTop: 24,
            borderRadius: borderRadiusLG,
            minHeight: 280,
          }}
        >
          <Title level={2} style={{ textAlign: "center", marginBottom: 32 }}>
            Cố Vấn Đầu Tư Cá Nhân
          </Title>

          {!userProfile ? (
            <RiskAssessment onAssessmentComplete={setUserProfile} />
          ) : (
            <InvestmentRecommendations userProfile={userProfile} />
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Cố Vấn Đầu Tư ©{new Date().getFullYear()} - Chỉ dành cho mục đích giáo
        dục
      </Footer>
    </Layout>
  );
};

export default App;
