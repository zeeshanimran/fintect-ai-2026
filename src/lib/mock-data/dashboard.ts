import {
  Banknote,
  CircleDollarSign,
  FileCheck2,
  ShieldAlert,
  Sparkles,
  Waypoints,
} from "lucide-react";

export const tenants = [
  { name: "Northstar Ventures", initials: "NV", plan: "Enterprise workspace" },
  { name: "Aurelia Capital EU", initials: "AC", plan: "Growth workspace" },
  { name: "Meridian Payments", initials: "MP", plan: "Enterprise workspace" },
];

export const dashboardKpis = [
  {
    label: "Monthly revenue",
    value: "$1.42M",
    trend: "+12.6%",
    icon: Banknote,
  },
  {
    label: "Available cash",
    value: "$4.86M",
    trend: "+4.2%",
    icon: CircleDollarSign,
  },
  {
    label: "Open workflows",
    value: "24",
    trend: "6 high priority",
    icon: Waypoints,
  },
  { label: "Automation rate", value: "78.4%", trend: "+8.1%", icon: Sparkles },
];

export const recentActivity = [
  {
    title: "Invoice batch approved",
    detail: "12 invoices · $186,420",
    time: "8 min ago",
    icon: FileCheck2,
  },
  {
    title: "Cash threshold triggered",
    detail: "Operating account below target",
    time: "31 min ago",
    icon: ShieldAlert,
  },
  {
    title: "Renewal workflow advanced",
    detail: "Encompass GmbH · Enterprise",
    time: "1 hr ago",
    icon: Waypoints,
  },
  {
    title: "Payment received",
    detail: "Invoice #NS-2841 · $42,900",
    time: "2 hrs ago",
    icon: CircleDollarSign,
  },
];

export const workflowHealth = [
  { name: "Invoice approval", count: 18, progress: 72, tone: "green" },
  { name: "Compliance review", count: 7, progress: 48, tone: "amber" },
  { name: "Client onboarding", count: 4, progress: 86, tone: "green" },
  { name: "Subscription renewal", count: 3, progress: 35, tone: "red" },
];

export const riskFlags = [
  {
    title: "July cash buffer",
    detail: "Forecast falls 4.8% below policy threshold",
    tone: "red" as const,
  },
  {
    title: "Vendor review overdue",
    detail: "Kinetic Labs review is 2 days late",
    tone: "amber" as const,
  },
  {
    title: "Duplicate expense pattern",
    detail: "Two entries require analyst confirmation",
    tone: "amber" as const,
  },
];

export const upcomingBilling = [
  {
    title: "Stripe platform renewal",
    detail: "Jun 18 · $12,400",
    status: "Scheduled",
  },
  {
    title: "Encompass GmbH renewal",
    detail: "Jun 22 · $86,000 ARR",
    status: "Action needed",
  },
  {
    title: "Cloud infrastructure",
    detail: "Jun 28 · forecast $9,820",
    status: "Forecast",
  },
];
