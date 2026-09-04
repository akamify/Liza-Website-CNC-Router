import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import EnquiryModalProvider from "./components/EnquiryModalProvider";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import Navbar from "./components/Navbar";
import SiteFooter from "./components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: {
    default: "LIZA CNC Router Solutions",
    template: "%s | LIZA CNC Router Solutions",
  },
  description:
    "LIZA Enterprise and Technology offers CNC router machines, wood carving machines, engraving solutions, and workshop support for production-focused businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f6fafc]">
        <EnquiryModalProvider>
          <Navbar />
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
          <FloatingWhatsAppButton />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}
