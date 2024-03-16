import { withPigment, extendTheme } from "@pigment-css/nextjs-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPigment(nextConfig, {
  theme: extendTheme({
    colorSchemes: {
      light: {
        colors: {
          background: "#a5a5c5",
          foreground: "#333377",
        },
      },
      dark: {
        colors: {
          background: "#333377",
          foreground: "#a5a5c5",
        },
      },
    },
  }),
});
