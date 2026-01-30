import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal INFO - HuangQi",
  description: "Education and Experience of HuangQi",
};

export default function PersonalInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
