import '@/styles/globals.css'
import '@/styles/custom-fonts.css'
import '@splidejs/react-splide/css';
import DefaultHead from '@/components/DefaultHead'
import Link from 'next/link';
import Script from 'next/script'
import Nav from '@/components/Nav'

export default function App({ Component, pageProps }) {
  return <>
    <DefaultHead title={pageProps.pageJSON?.title || null} />
    <Nav pages={pageProps.pages}></Nav>
    <Component {...pageProps} />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" integrity="sha512-fD9DI5bZwQxOi7MhYWnnNPlvXdp/2Pj3XSTRrFs5FQa4mizyGLnJcN6tuvUS6LbmgN1ut+XGSABKvjN0H6Aoow==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>
    <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  </>
}
