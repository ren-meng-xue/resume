import type { Metadata } from "next";
import type { ReactNode } from "react";

import { resumeData } from "@/data/resume";

import "./globals.css";

export const metadata: Metadata = {
  title: resumeData.seoTitle,
  description: resumeData.seoDescription,
  applicationName: "任孟雪在线简历",
  keywords: ["WEB 前端工程师", "React", "Vue", "TypeScript", "Vercel", "在线简历"],
  openGraph: {
    title: resumeData.seoTitle,
    description: resumeData.seoDescription,
    locale: "zh_CN",
    siteName: "任孟雪在线简历",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: resumeData.seoTitle,
    description: resumeData.seoDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="bg-[var(--bg)] text-[var(--ink)] antialiased">{children}</body>
    </html>
  );
}
