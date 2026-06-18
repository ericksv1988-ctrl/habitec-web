import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Habi-Tec Diseño & Construcción | Ingeniería Civil y Avalúos en Costa Rica",
  description:
    "Servicios de ingeniería civil, diseño arquitectónico, construcción por administración, avalúos y gestión de permisos en Costa Rica.",
  verification: {
    google: "4r0BhnbEQFxhfkKW2YW7RjkkdTjJkxxe34y36ZuTDdw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
