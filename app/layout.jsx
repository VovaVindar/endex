import "./styles/design-system.css";
import "./styles/globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer/footer";

const aeonik = localFont({
  src: [
    {
      path: "./fonts/AeonikTRIAL-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  adjustFontFallback: "Arial",
  preload: true,
  display: "swap",
  variable: "--aeonik",
});
const nbgrotesk = localFont({
  src: [
    {
      path: "./fonts/NBGroteskPro55MNormal-TRIAL.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NBGroteskPro75MFett-TRIAL.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  adjustFontFallback: "Arial",
  preload: true,
  display: "swap",
  variable: "--nbgrotesk",
});

export const metadata = {
  title: {
    template: "%s | Endex: Modern Financial Intelligence",
    default: "Endex: Modern Financial Intelligence",
  },
  description:
    "Deploy a secure, generative AI model trained on your internal knowledge. Supercharge your firm with instant context at their fingertips.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-192x192.png",
    apple: "/apple-touch-icon.png",
  },
  appLinks: {
    web: {
      url: "https://app.endex.ai/",
    },
  },
  category: "AI",
  openGraph: {
    title: "Endex: Modern Financial Intelligence",
    description:
      "Deploy a secure, generative AI model trained on your internal knowledge. Supercharge your firm with instant context at their fingertips.",
    url: "https://endex.ai/",
    siteName: "Endex",
    images: [
      {
        url: "https://endex.ai/img/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Endex: Modern Financial Intelligence",
    description:
      "Deploy a secure, generative AI model trained on your internal knowledge. Supercharge your firm with instant context at their fingertips.",
    images: ["https://endex.ai/img/og.png"],
  },
};
export const viewport = {
  themeColor: "black",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${aeonik.variable} ${nbgrotesk.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
