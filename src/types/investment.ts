export interface InvestmentAdvice {
  id: string;
  title: string;
  description: string;
  category: InvestmentCategory;
  riskLevel: "Thấp" | "Trung bình" | "Cao";
  timeHorizon: string;
  minimumAmount?: number;
  pros: string[];
  cons: string[];
}

export type InvestmentCategory =
  | "Bất động sản"
  | "Trái phiếu"
  | "Quỹ đầu tư"
  | "Tiền điện tử"
  | "Vàng & Kim loại quý"
  | "Tài khoản hưu trí"
  | "Tiết kiệm giáo dục"
  | "Quỹ khẩn cấp";

export interface UserProfile {
  age: number;
  income: number;
  riskTolerance: "Bảo thủ" | "Cân bằng" | "Mạo hiểm";
  investmentGoal: string;
  timeHorizon: number;
  currentSavings: number;
}
