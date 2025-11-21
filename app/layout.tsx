import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "صفحة المنتج - عرض خاص",
  description:
    "احصل على المنتج بسعر 3500 دينار جزائري مع توصيل مجاني في جميع أنحاء الجزائر."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
