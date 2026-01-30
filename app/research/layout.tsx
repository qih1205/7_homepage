import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Interests - HuangQi",
  description: "Robotics, Reinforcement Learning, and Vision-Language Navigation research",
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
