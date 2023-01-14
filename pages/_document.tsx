import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line */}
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600&family=Passion+One&display=swap"
          rel="stylesheet"
        />

        {/* Twitter card metadatas */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@astroquirks" />
        <meta name="twitter:title" content="Astroquirks - Osmosis validator" />
        <meta name="twitter:description" content="Profit Sharing is Caring ❤️3" />
        <meta name="twitter:image" content="https://astroquirks.com/img/screenshot.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
