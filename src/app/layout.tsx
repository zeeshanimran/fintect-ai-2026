import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinTech-AI 2026 | Financial Operations Intelligence",
  description: "AI-enhanced financial operations for modern finance teams.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
