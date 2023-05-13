import Image from 'next/image'
import Link from 'next/link'

export default function Nav({ pages }) {
  return (
    <nav className="flex flex-row bg-purple-300 bg-opacity-20 p-2 text-white text-xl font-bold">
      <div className="grow">
        <Link href="/" className="w-32 block"><Image src="/logo.svg" height={592} width={1839} /></Link>
      </div>
      {pages.map((page, idx) => {
        return <a href={`/${page.urlPath}`} className="my-auto" key={idx}>{page.title}</a>
      })}
      <a href="/contact" className="my-auto">Contact Us</a>
    </nav>
  )
}
