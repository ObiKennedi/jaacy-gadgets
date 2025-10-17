import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Jaacyy's gadgets",
  description: "An online store for shopping quality and reliable gadgets, with quick delivery",
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}