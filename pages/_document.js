import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <nav className="flex flex-row bg-purple-300 bg-opacity-30 p-2">
          <div className="grow">
            <a href="/" className="w-32 block"><Image src="/logo.svg" height={592} width={1839} /></a>
          </div>
          <a href="/contact" className="my-auto">Contact Us</a>
        </nav>
      </Head>
      <body className="bg-rose-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
