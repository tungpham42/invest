export const formatCurrency = (value: number | undefined | null): string => {
  if (value == null || isNaN(value)) return "0 ₫";
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};
