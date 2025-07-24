import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-15 bg-green-700 flex justify-between items-center text-white px-2 sm:px-3'>
      <div className="logo font-bold text-lg m-1">

        <Link href="/">  A-link</Link></div>
      <ul className='flex justify-center items-center gap-2 sm:gap-4 text-sm'>

        <Link href="/about"> <li>About</li></Link>
        <Link href="/shorten"> <li>Shorten</li></Link>
        <Link href="https://mailto:4contact2amansharm@gmail.com" target='_blank'> <li>Contact Us</li></Link>
        <li className='flex gap-2 sm:gap-4'>
          <Link href="/shorten"><button className='hidden sm:block bg-green-500 shadow-lg px-3 py-1 rounded-full cursor-pointer'>Try Now </button></Link>
          <Link href="https://github.com/aman-sharma-agnihotri" target='_blank'><button className='hidden sm:block bg-green-500 shadow-lg px-3 py-1 rounded-full cursor-pointer'>GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar 