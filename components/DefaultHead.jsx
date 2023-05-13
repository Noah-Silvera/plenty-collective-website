import Head from 'next/head'
import Nav from '@/components/Nav'
import Link from 'next/link';
import Script from 'next/script'


export default function DefaultHead({ title, pages }) {
  let pageTitle = [title, "Plenty Collective"].filter((val) => !!val).join(" - ")
  return (
  <Head>
    <title>{pageTitle}</title>
    {/* <link rel="icon" href="/favicon.ico" /> */}
    <Nav pages={pages}></Nav>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" integrity="sha512-fD9DI5bZwQxOi7MhYWnnNPlvXdp/2Pj3XSTRrFs5FQa4mizyGLnJcN6tuvUS6LbmgN1ut+XGSABKvjN0H6Aoow==" crossOrigin="anonymous" referrerPolicy="no-referrer"></Script>
    <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  </Head>
  )
}
