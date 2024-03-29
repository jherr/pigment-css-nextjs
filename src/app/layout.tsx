import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@pigment-css/react/styles.css";
import { css } from "@pigment-css/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// const htmlClass = css`
//   background-color: ${({ theme }) => theme.colorSchemes.dark.colors.background};
//   color: ${({ theme }) => theme.colorSchemes.dark.colors.foreground};
//   @media (prefers-color-scheme: light) {
//     background-color: ${({ theme }) =>
//       theme.colorSchemes.light.colors.background};
//     color: ${({ theme }) => theme.colorSchemes.light.colors.foreground};
//   }
// `;

// const htmlClass = css(({ theme }) => ({
//   backgroundColor: theme.colorSchemes.dark.colors.background,
//   color: theme.colorSchemes.dark.colors.foreground,
//   "@media (prefers-color-scheme: light)": {
//     backgroundColor: theme.colorSchemes.light.colors.background,
//     color: theme.colorSchemes.light.colors.foreground,
//   },
// }));

const htmlClass = css(({ theme }) => ({
  backgroundColor: theme.colorSchemes.dark.colors.background,
  color: theme.colorSchemes.dark.colors.foreground,
  ...theme.applyStyles("light", {
    backgroundColor: theme.colorSchemes.light.colors.background,
    color: theme.colorSchemes.light.colors.foreground,
  }),
}));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={htmlClass}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
