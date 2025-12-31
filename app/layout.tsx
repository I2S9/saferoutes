import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SafeRoutes",
  description: "Prévoir le danger avant qu'il n'existe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-bricolage-grotesque">{children}</body>
    </html>
  );
}
