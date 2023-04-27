import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <nav>
          <a href="/">Home</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
