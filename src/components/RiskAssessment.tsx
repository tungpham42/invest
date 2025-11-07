import React, { useState } from "react";
import {
  Form,
  InputNumber,
  Slider,
  Select,
  Button,
  Card,
  Steps,
  Space,
} from "antd";
import { UserProfile } from "../types/investment";

const { Step } = Steps;
const { Option } = Select;

interface RiskAssessmentProps {
  onAssessmentComplete: (profile: UserProfile) => void;
}

export const RiskAssessment: React.FC<RiskAssessmentProps> = ({
  onAssessmentComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();

  const steps = [
    "Thông tin cá nhân",
    "Tình hình tài chính",
    "Mục tiêu đầu tư",
    "Mức độ chấp nhận rủi ro",
  ];

  const onFinish = (values: any) => {
    console.log("Form values:", values);

    // Ensure proper number conversion
    const userProfile: UserProfile = {
      age: Number(values.age) || 0,
      income: Number(values.income) || 0,
      riskTolerance: values.riskTolerance || "Cân bằng",
      investmentGoal: values.investmentGoal || "Hưu trí",
      timeHorizon: Number(values.timeHorizon) || 5,
      currentSavings: Number(values.currentSavings) || 0,
    };

    console.log("User Profile created:", userProfile);
    onAssessmentComplete(userProfile);
  };

  const next = async () => {
    try {
      const fields = [];

      // Validate fields based on current step
      switch (currentStep) {
        case 0:
          fields.push("age");
          break;
        case 1:
          fields.push("income", "currentSavings");
          break;
        case 2:
          fields.push("investmentGoal", "timeHorizon");
          break;
        case 3:
          fields.push("riskTolerance");
          break;
      }

      await form.validateFields(fields);
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.log("Validation Failed:", error);
    }
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const stepContent = [
    <Form.Item
      key="age"
      name="age"
      label="Tuổi"
      rules={[
        {
          required: true,
          message: "Vui lòng nhập tuổi của bạn",
          type: "number",
          min: 18,
          max: 100,
        },
      ]}
    >
      <InputNumber
        min={18}
        max={100}
        style={{ width: "100%" }}
        placeholder="Nhập tuổi của bạn"
      />
    </Form.Item>,

    <Space key="financial" direction="vertical" style={{ width: "100%" }}>
      <Form.Item
        name="income"
        label="Thu nhập hàng năm (VND)"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập thu nhập của bạn",
            type: "number",
            min: 0,
          },
        ]}
      >
        <InputNumber
          style={{ width: "100%" }}
          min={0}
          placeholder="Ví dụ: 120,000,000"
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value?.replace(/\$\s?|(,*)/g, "") as any}
          addonAfter="VND"
        />
      </Form.Item>
      <Form.Item
        name="currentSavings"
        label="Tiết kiệm hiện tại (VND)"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập số tiền tiết kiệm",
            type: "number",
            min: 0,
          },
        ]}
      >
        <InputNumber
          style={{ width: "100%" }}
          min={0}
          placeholder="Ví dụ: 50,000,000"
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value?.replace(/\$\s?|(,*)/g, "") as any}
          addonAfter="VND"
        />
      </Form.Item>
    </Space>,

    <Space key="goals" direction="vertical" style={{ width: "100%" }}>
      <Form.Item
        name="investmentGoal"
        label="Mục tiêu đầu tư chính"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn mục tiêu của bạn",
          },
        ]}
      >
        <Select placeholder="Chọn mục tiêu đầu tư">
          <Option value="Hưu trí">Hưu trí</Option>
          <Option value="Xây dựng tài sản">Xây dựng tài sản</Option>
          <Option value="Giáo dục">Tài trợ giáo dục</Option>
          <Option value="Mua sắm lớn">Mua sắm lớn</Option>
          <Option value="Thu nhập thụ động">Thu nhập thụ động</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="timeHorizon"
        label="Thời gian đầu tư (năm)"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn thời gian đầu tư",
          },
        ]}
      >
        <Slider
          min={1}
          max={30}
          marks={{
            1: "1 năm",
            5: "5 năm",
            10: "10 năm",
            20: "20 năm",
            30: "30+ năm",
          }}
        />
      </Form.Item>
    </Space>,

    <Form.Item
      key="risk"
      name="riskTolerance"
      label="Mức độ chấp nhận rủi ro"
      rules={[
        {
          required: true,
          message: "Vui lòng chọn mức độ chấp nhận rủi ro",
        },
      ]}
    >
      <Select placeholder="Chọn mức độ chấp nhận rủi ro">
        <Option value="Bảo thủ">
          Bảo thủ - Ưa thích các khoản đầu tư ổn định, rủi ro thấp
        </Option>
        <Option value="Cân bằng">
          Cân bằng - Cân bằng giữa rủi ro và lợi nhuận
        </Option>
        <Option value="Mạo hiểm">
          Mạo hiểm - Sẵn sàng chấp nhận rủi ro cao hơn để có lợi nhuận tiềm năng
          cao hơn
        </Option>
      </Select>
    </Form.Item>,
  ];

  return (
    <Card>
      <Steps current={currentStep} style={{ marginBottom: 32 }}>
        {steps.map((title) => (
          <Step key={title} title={title} />
        ))}
      </Steps>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 600, margin: "0 auto" }}
        initialValues={{
          timeHorizon: 5,
          investmentGoal: "Hưu trí", // Default value
          riskTolerance: "Cân bằng", // Default value
        }}
      >
        {stepContent[currentStep]}

        <div style={{ marginTop: 24, textAlign: "center" }}>
          {currentStep > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={prev}>
              Quay lại
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              Tiếp theo
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button type="primary" htmlType="submit">
              Nhận Tư Vấn Đầu Tư
            </Button>
          )}
        </div>
      </Form>
    </Card>
  );
};
