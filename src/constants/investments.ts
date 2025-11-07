import { InvestmentAdvice } from "../types/investment";

export const INVESTMENTS: InvestmentAdvice[] = [
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
    riskLevel: "Trung bình",
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
    pros: ["Tăng trưởng miễn thuế", "Rút tiền miễn thuế", "Đóng góp linh hoạt"],
    cons: ["Giới hạn đóng góp", "Phạt rút tiền sớm"],
  },
];
