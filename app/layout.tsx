"use client";

import "../styles/index.css";
import { Fira_Sans, Fira_Code, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components";
import cx from "classnames";

const manRope = Manrope({
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={cx(
            firaSans.variable,
            firaCode.variable,
            manRope.variable,
            "bg-theme transition-all duration-500"
          )}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
