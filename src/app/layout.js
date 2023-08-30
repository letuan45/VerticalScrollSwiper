import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css"; //importing font awesome css
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "../app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
