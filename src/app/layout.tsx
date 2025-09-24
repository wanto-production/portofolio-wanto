import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  weight: "400",
  subsets: ["latin"]
})

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: {
    template: `ikhwan | %s`,
    default: 'ikhwan | portofolio'
  },
  keywords: ["portofolio", "portofolio ikhwan", "portofolio ikhwan satrio", "ikhwan,ikhwan satrio", "young dev portofolio"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
