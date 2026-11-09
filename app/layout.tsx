import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daksh Kumar — Digital Creator & Developer",
  description: "The digital portfolio of Daksh Kumar — building intelligent products, immersive websites, apps and AI agents.",
  metadataBase: new URL("https://github.com/sureshkumak26-art")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
