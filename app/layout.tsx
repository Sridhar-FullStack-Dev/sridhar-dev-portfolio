import Audio from "@/components/Audio/Audio";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/Topbar/Topbar";
import DotPattern from "@/components/ui/dot-pattern";

export const metadata: Metadata = {
  metadataBase: new URL("https://sridhar-portfolio.com"),
  title: "Sridhar | Full Stack Developer",
  description:
    "Experienced Full Stack Developer specializing in modern web technologies. Connect with me on LinkedIn and Instagram for professional updates.",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
  ],
  authors: [
    {
      name: "Sridhar",
      url: "https://www.linkedin.com/in/e-sridhar-1720721a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
  creator: "Sridhar",
  publisher: "Sridhar",
  alternates: {
    canonical: "https://sridhar-portfolio.com",
  },
  openGraph: {
    title: "Sridhar | Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in modern web technologies. Follow me on Instagram and connect on LinkedIn.",
    url: "https://sridhar-portfolio.com",
    siteName: "Sridhar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sridhar - Full Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-alt-black text-alt-white selection:bg-black selection:text-white houseMontage-font">
        <SmoothScroll>
          <Topbar />
          {children}
          <Audio />
        </SmoothScroll>
      </body>
    </html>
  );
}
