import Head from 'next/head'

export default function DefaultHead({ title }) {
  let pageTitle = [title, "Plenty Collective"].filter((val) => !!val).join(" - ")
  return (
  <Head>
    <title>{pageTitle}</title>
    {/* <link rel="icon" href="/favicon.ico" /> */}
  </Head>
  )
}
