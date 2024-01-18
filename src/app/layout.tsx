import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provides";
import MainLayout from "@/containers/Mainlayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dinh Quang Huy",
  description: "Curriculum Vitae Dinh Quang Huy",
  icons: '/svg/next.svg'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className={inter.className}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
