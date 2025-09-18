import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import './globals.css'
import Footer from "./components/footer";


const APP_NAME = "NJS App";
const APP_DESCRIPTION = "Next.js + Serwist PWA...";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s - NJS App",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ccc",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
      </head>
      <body className="bg-white dark:bg-gray-800">
        <div className="grid grid-cols-6">
          <div className="col-span-6 md:col-span-4 md:col-start-2">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html >
  );
}
