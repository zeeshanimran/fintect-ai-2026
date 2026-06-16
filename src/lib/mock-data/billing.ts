export type PlanName = "Starter" | "Growth" | "Enterprise";

export const plans = [
  {
    name: "Starter" as PlanName,
    price: "$890",
    description: "For focused finance teams",
    features: ["10 team seats", "2,000 documents", "1,000 AI decisions"],
  },
  {
    name: "Growth" as PlanName,
    price: "$2,400",
    description: "For scaling operations",
    features: ["25 team seats", "7,500 documents", "4,000 AI decisions"],
  },
  {
    name: "Enterprise" as PlanName,
    price: "$4,800",
    description: "For regulated multi-team operations",
    features: ["50 team seats", "12,000 documents", "8,000 AI decisions"],
  },
];

export const usageMetrics = [
  { label: "Team seats", value: "38 / 50", progress: 76 },
  { label: "Documents", value: "8,421 / 12k", progress: 70 },
  { label: "AI decisions", value: "4,208 / 8k", progress: 53 },
  { label: "API requests", value: "61.2k / 100k", progress: 61 },
];

export const billingHistory = [
  {
    invoice: "FT-260601",
    period: "Jun 1 – Jun 30, 2026",
    amount: "$4,800",
    status: "Paid",
  },
  {
    invoice: "FT-260501",
    period: "May 1 – May 31, 2026",
    amount: "$4,800",
    status: "Paid",
  },
  {
    invoice: "FT-260401",
    period: "Apr 1 – Apr 30, 2026",
    amount: "$4,620",
    status: "Paid",
  },
];
