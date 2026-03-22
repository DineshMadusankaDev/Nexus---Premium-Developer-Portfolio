import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Nexus | Premium Full Stack Developer & Product Strategist",
    template: "%s | Nexus Portfolio",
  },
  description: "High-converting developer portfolio for startup founders and SaaS companies. Specializing in Next.js, TypeScript, and AI integrations.",
  keywords: ["Full Stack Developer", "SaaS Builder", "Web Strategist", "Nexus Portfolio", "Next.js Expert", "React Developer", "AI Integration"],
  authors: [{ name: "Nexus" }],
  creator: "Nexus",
  publisher: "Nexus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Nexus | Premium Full Stack Developer & Product Strategist",
    description: "High-converting developer portfolio for startup founders and SaaS companies. Specializing in Next.js, TypeScript, and AI integrations.",
    url: "https://nexus-portfolio.run.app",
    siteName: "Nexus Portfolio",
    images: [
      {
        url: "https://picsum.photos/seed/og/1200/630",
        width: 1200,
        height: 630,
        alt: "Nexus Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus | Premium Full Stack Developer & Product Strategist",
    description: "High-converting developer portfolio for startup founders and SaaS companies.",
    images: ["https://picsum.photos/seed/og/1200/630"],
    creator: "@nexus_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
