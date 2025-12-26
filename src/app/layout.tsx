import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/providers/themer-provider";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nextjs-portfolio-blog-one.vercel.app"),
  title: {
    default: "Abdessamie | Full Stack Developer & Automation Expert",
    template: "%s | Abdessamie",
  },
  description:
    "I build automation systems, internal tools, and client-facing applications that streamline business operations. Specializing in React, Next.js, Python, and PostgreSQL.",
  keywords: [
    "Full Stack Developer",
    "Automation Expert",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Internal Tools",
    "Business Automation",
    "API Integration",
  ],
  authors: [{ name: "Abdessamie" }],
  creator: "Abdessamie",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Abdessamie",
    title: "Abdessamie | Full Stack Developer & Automation Expert",
    description:
      "I build automation systems, internal tools, and client-facing applications that streamline business operations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdessamie - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdessamie | Full Stack Developer & Automation Expert",
    description:
      "I build automation systems, internal tools, and client-facing applications that streamline business operations.",
    images: ["/og-image.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.theme;
                var isDark = theme === 'dark' || ((theme === 'system' || !theme) && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ margin: 0 }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
