import { Poppins as Font } from "next/font/google";
import "./globals.css";

const font = Font({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Connectics",
  description: "Next generation chat app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
        />
        <link rel="icon" href="./favicon.ico" type="image/ico"></link>
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${font.className} bg-stone-100 text-sm`}>
        {children}
      </body>
    </html>
  );
}
