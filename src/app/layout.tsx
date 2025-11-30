import type { Metadata } from "next"
import Script from 'next/script'
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
      <head>
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N2TGBGJ8');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2TGBGJ8"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}>
          </iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
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
