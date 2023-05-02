import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <nav className="flex flex-row bg-purple-300 bg-opacity-20 p-2 text-white text-xl font-bold">
          <div className="grow">
            <a href="/" className="w-32 block"><Image src="/logo.svg" height={592} width={1839} /></a>
          </div>
          <a href="/contact" className="my-auto">Contact Us</a>
        </nav>
      </Head>
      <body className="min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-plenty-pink-300 via-plenty-purple-300 to-plenty-blue-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
