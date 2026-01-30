import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - HuangQi",
  description: "Competitions, Activities, and Open Source contributions",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
