import Head from 'next/head'
import Nav from '@/components/Nav'

export default function DefaultHead({ title, pages }) {
  let pageTitle = [title, "Plenty Collective"].filter((val) => !!val).join(" - ")
  return (
  <Head>
    <title>{pageTitle}</title>
    {/* <link rel="icon" href="/favicon.ico" /> */}
    <Nav pages={pages}></Nav>
  </Head>
  )
}
