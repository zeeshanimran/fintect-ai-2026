"use client";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueData, riskData, volumeData } from "@/lib/mock-data/analytics";
export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={revenueData}
        margin={{ left: 0, right: 12, top: 10, bottom: 0 }}
      >
        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2d9a70" stopOpacity=".28" />
            <stop offset="100%" stopColor="#2d9a70" stopOpacity="0" />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="#e8edea" />
        <XAxis
          dataKey="m"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 9, fill: "#7b8982" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 9, fill: "#7b8982" }}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="v"
          stroke="#21825d"
          strokeWidth={2}
          fill="url(#area)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
export function RiskChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={riskData}>
        <CartesianGrid vertical={false} stroke="#e8edea" />
        <XAxis
          dataKey="m"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 9 }}
        />
        <YAxis hide />
        <Tooltip />
        <Bar dataKey="low" stackId="a" fill="#4dab83" radius={[0, 0, 3, 3]} />
        <Bar dataKey="high" stackId="a" fill="#e5ae4e" radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
export function VolumeChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={volumeData}>
        <CartesianGrid vertical={false} stroke="#e8edea" />
        <XAxis
          dataKey="m"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 9 }}
        />
        <YAxis hide />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="v"
          stroke="#6d58a5"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
