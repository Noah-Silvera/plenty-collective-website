import Image from 'next/image'
import Link from 'next/link'
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";
import { useState } from 'react'


export default function Nav({ pages }) {
  const [navOpen, setNavOpen] = useState(false)

  pages = pages || []

  const logo = <div className="grow">
    <Link href="/" className="w-32 block"><Image src="/logo.svg" height={592} width={1839} /></Link>
  </div>

  return (
    <>
      <ResponsiveNavbar
        logo={logo}
        className='sm:hidden'
        toggleNavigationBarSmallValue={navOpen}
        toggleNavigationBarSmallFunction={() => setNavOpen(!navOpen)}
        styles={{
          navigation: { fontFamily: 'Arial, Helvetica, sans-serif' },
          navigationBarSmall: {
            backgroundColor: 'rgba(168, 85, 247, 0.2)',
            height: '80px'
          },
          navigationCardSmall: {
            backgroundColor: 'rgba(245, 240, 240, 0.7)',
            alignItems: 'flex-start'
          },
        }}
      >
        <ul className="w-full !pt-[85px]">
          {pages.map((page, idx) => {
            return <Link href={`/${page.urlPath}`} className="text-3xl !py-4 !pl-4 border-b-2 border-purple-300 bg-purple-100 opacity-60 font-cooper-hewitt" key={idx} onClick={() => setNavOpen(false)}>{page.title}</Link>
          })}
        </ul>
      </ResponsiveNavbar>
      <nav className="hidden sm:flex flex-row bg-purple-500 bg-opacity-20 p-2 text-white text-xl font-bold gap-2 sm:gap-4">
        {logo}
        {pages.map((page, idx) => {
          return <Link href={`/${page.urlPath}`} className="my-auto text-base sm:text-lg" key={idx}>{page.title}</Link>
        })}
        <Link href="https://www.instagram.com/plenty.collective/" className="my-auto" target="_blank">
          <span className="sr-only text-primary-light md:text-primary-dark text-2xl pr-5 py-0 sm:pt-2">Instagram</span>
          <span className='text-primary-light md:text-primary-dark'><i aria-hidden="true" className="fab fa-instagram text-3xl md:text-4xl pr-5 pl-2" title="Instagram"></i></span>
        </Link>
      </nav>
    </>
  )
}
