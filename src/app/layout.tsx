import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/dashboardcomponents/Sidebar";
import Navbar from "@/dashboardcomponents/Navbar";
import Container from "@/dashboardcomponents/Container";
import AuthProvider from "@/lib/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-white`}
      >
        
        <AuthProvider>
          <div className="h-screen">
            <div className="w-[95%] h-[95%] p-4 m-4 bg-neutral-800 border-2 border-neutral-700 rounded-3xl grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] gap-4">
              <div className="col-span-2 w-[100%]">
                <Navbar />
              </div>
              <div className="h-[100%]">
                <Sidebar />
              </div>

              {/* <Container /> */}
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
