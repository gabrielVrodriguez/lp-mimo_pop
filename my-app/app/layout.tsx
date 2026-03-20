import type { Metadata } from "next";
import { Poppins as FontSans, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const seoDescription =
  "Presentes personalizados em Santos, SP: Funkos customizados, action figures, miniaturas de casal, casamento e pets feitos a mao sob encomenda.";

const seoKeywords = [
  "presentes personalizados",
  "presentes personalizados em Santos",
  "funko personalizado",
  "funko customizado",
  "funko sob encomenda",
  "action figure personalizada",
  "miniatura personalizada",
  "presente para casal",
  "presente de casamento personalizado",
  "miniatura de pet personalizada",
  "presente criativo artesanal",
  "Mimo Pop",
];

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Mimo Pop | Funkos e Presentes Personalizados",
  description: seoDescription,
  keywords: seoKeywords,
  icons: {
    icon: {
      url: "/mimo-pop.svg",
      // sizes: "600x600",
    },
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${fontSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
