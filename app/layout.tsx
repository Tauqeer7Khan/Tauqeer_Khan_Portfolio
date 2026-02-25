import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Tauqeer Khan - Front-end Developer",
  description:
    "Computer Science undergraduate focused on front-end development, UI design, and responsive web experiences. Skilled in HTML, CSS, JavaScript, Bootstrap, Git, and GitHub.",
  keywords: [
    "Tauqeer Khan",
    "Front-end Developer",
    "Web Developer",
    "UI Designer",
    "JavaScript Developer",
    "Next.js Portfolio",
    "Portfolio",
  ],
  authors: [{ name: "Tauqeer Khan" }],
  creator: "Tauqeer Khan",
  publisher: "Tauqeer Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: "Tauqeer Khan - Front-end Developer",
    description:
      "Computer Science undergraduate focused on front-end development, UI design, and responsive web experiences.",
    siteName: "Tauqeer Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tauqeer Khan - Front-end Developer",
    description:
      "Computer Science undergraduate focused on front-end development and UI design.",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://example.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="font-sans antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
