import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import { Inter,Noto_Kufi_Arabic } from "next/font/google";
import Header from "@/components/header/Header"
import FooterPage from "@/components/Footer/footer";

import { UserProvider } from "@/components/context1/UserContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({subsets:['latin']});
const notoKufiArabic = Noto_Kufi_Arabic({subsets:['arabic']});

export const metadata: Metadata = {
  title: "AMS",
  description: "AMS Company",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      
      <UserProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased notoKufiArabic.className`}
        >
            <Header/>
            <ToastContainer theme="colored" position="top-center" />
            {children}
            < FooterPage />
        </body>
      
      </UserProvider>
    </html>
  );
}
