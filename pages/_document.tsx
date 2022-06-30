import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-128x128.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#fff" />
        <meta name="theme-color" content="#f2f2f2" />
        <link
          rel="shortcut icon"
          href="/icons/icon-128x128.png"
          type="image/x-icon"
        />
        <meta charSet="UTF-8"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
