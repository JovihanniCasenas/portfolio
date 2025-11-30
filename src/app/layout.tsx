import type { Metadata } from "next"
import { GoogleTagManager } from '@next/third-parties/google'
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import colors from "@/utils/colors"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Stars from "@/components/Stars"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Jovihanni Casenas | Software Engineer and Virtual Assistant",
  description: "Jovihanni Casenas | Software Engineer and Virtual Assistant Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-N2TGBGJ8" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="animated-background" style={{
          background: `linear-gradient(125deg, 
          ${colors.skyGradientStart} 0%, 
          ${colors.skyGradientMiddle1} 25%, 
          ${colors.skyGradientMiddle2} 50%, 
          ${colors.skyGradientMiddle3} 75%, 
          ${colors.skyGradientEnd} 100%)`,
          minHeight: "100vh",
          width: "100vw",
          overflow: "hidden",
          color: colors.textLight,
          position: "relative"
        }}>
          <Stars count={150} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <Header />
          </div>
          <div style={{ minHeight: "calc(100vh - 270px)" }}>
            {children}
          </div>
          <div style={{ height: "10px" }}></div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
