import type { Metadata } from "next";
import { exo, orbitron, rajdhani } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "./globals.css";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${exo.variable} ${orbitron.variable} ${rajdhani.variable} antialiased dark`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
