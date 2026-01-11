import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banner | CapEx Management for Real Estate",
  description: "Banner centralizes CapEx for real estate teams, linking plans, budgets, and daily execution in one platform.",
  openGraph: {
    title: "Banner",
    description: "Banner centralizes CapEx for real estate teams, linking plans, budgets, and daily execution in one platform.",
    images: ["/images/Banner-opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/css/normalize.css" rel="stylesheet" />
        <link href="/css/webflow.css" rel="stylesheet" />
        <link href="/css/banner-oratory.webflow.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="/images/favicon.png" rel="shortcut icon" type="image/x-icon" />
      </head>
      <body>
        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />
        <Script id="webfont-loader" strategy="beforeInteractive">
          {`WebFont.load({ google: { families: ["Lexend:100,200,300,regular,500,600,700,800,900","Inter:100,200,300,regular,500,600,700,800,900"] }});`}
        </Script>
        <div className="page-wrapper">
          <div className="global-styles">
            <div className="style-overrides w-embed">
              <style dangerouslySetInnerHTML={{__html: `
                * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
                a, .w-input, .w-select, .w-tab-link, .w-nav-link, .w-nav-brand, .w-dropdown-btn, .w-dropdown-toggle, .w-dropdown-link { color: inherit; text-decoration: inherit; font-size: inherit; }
                .container-medium, .container-small, .container-large { margin-right: auto !important; margin-left: auto !important; }
              `}} />
            </div>
          </div>
          <div className="main-wrapper">
            <ScrollToTop />
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js"
          strategy="beforeInteractive"
        />
        <Script src="/webflow.js" strategy="afterInteractive" />
        <Script id="webflow-init" strategy="afterInteractive">
          {`
            if (typeof Webflow !== 'undefined') {
              Webflow.destroy();
              Webflow.ready();
              Webflow.require('ix2').init();
            }
          `}
        </Script>
      </body>
    </html>
  );
}
