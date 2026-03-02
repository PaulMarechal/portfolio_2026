import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation/Navigation.js"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio de Paul Maréchal",
  description: "Développeur web front-end.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navigation/>
        <main>{children}</main>
      </body>
    </html>
  );
}
