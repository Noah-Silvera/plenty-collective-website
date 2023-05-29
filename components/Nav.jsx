import Image from 'next/image'
import Link from 'next/link'

export default function Nav({ pages }) {
  pages = pages || []

  return (
    <nav className="flex flex-row bg-purple-500 bg-opacity-20 p-2 text-white text-xl font-bold gap-2 sm:gap-4">
      <div className="grow">
        <Link href="/" className="w-32 block"><Image src="/logo.svg" height={592} width={1839} /></Link>
      </div>
      {pages.map((page, idx) => {
        return <Link href={`/${page.urlPath}`} className="my-auto text-base sm:text-lg" key={idx}>{page.title}</Link>
      })}
      <Link href="https://www.instagram.com/plenty.collective/" className="my-auto" target="_blank">
        <span className="sr-only text-primary-light md:text-primary-dark text-2xl pr-5 py-0 sm:pt-2">Instagram</span>
        <span className='text-primary-light md:text-primary-dark'><i aria-hidden="true" className="fab fa-instagram text-3xl md:text-4xl pr-5 pl-2" title="Instagram"></i></span>
      </Link>
    </nav>
  )
}
