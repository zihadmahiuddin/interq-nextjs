import "./globals.css";
import type { Metadata } from "next";

import { roboto } from "./fonts";

export const metadata: Metadata = {
  title: "InterQ",
  description: "Make room for better living",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
