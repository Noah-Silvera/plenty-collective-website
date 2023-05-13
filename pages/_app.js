import '@/styles/globals.css'
import '@/styles/custom-fonts.css'
import '@splidejs/react-splide/css';
import DefaultHead from '@/components/DefaultHead'

export default function App({ Component, pageProps }) {
  return <>
    <DefaultHead title={pageProps.pageJSON?.title || null} pages={pageProps.pages}/>
    <Component {...pageProps} />
  </>
}
