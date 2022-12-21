import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

const prefix = process.env["NODE_ENV"] === "production" ? "/astroquirks-front" : "";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{"Astroquirks"}</title>
        <link rel="apple-touch-icon" sizes="180x180" href={`${prefix}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${prefix}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${prefix}/favicon-16x16.png`} />
        <link rel="manifest" href={`${prefix}/site.webmanifest`} />
        <meta name="theme-color" content="#000000" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line */}
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600&family=Passion+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
