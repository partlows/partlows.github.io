import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "./Header";
import { Footer } from "./Footer";

const defaultFont = localFont({
  src: [
    {
      path: "./fonts/Satoshi/Satoshi-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Sam's Portfolio",
  description: "A web application with various projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        fontFamily: defaultFont.style.fontFamily,
        backgroundColor: "#b1b4ef",
        height: "100%",
      }}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@301&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, height: "100%" }}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
