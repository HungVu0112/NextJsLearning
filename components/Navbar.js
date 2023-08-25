import Link from 'next/link'
import React from 'react'
import { GiGuitarHead } from "react-icons/gi";
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="h-[60px] flex items-center justify-between p-6 font-bold text-sm tracking-widest bg-slate-900">
      <div className="flex items-center">  
        <div className="text-4xl ml-2 mr-4">
          <GiGuitarHead />
        </div>
        
        <ul className="flex items-center h-[60px] mx-4">
          <li className='flex items-center justify-center cursor-pointer min-w-[120px] h-full hover:opacity-80'><Link href="/">HOME</Link></li>
          <li className='flex items-center justify-center cursor-pointer min-w-[120px] h-full hover:opacity-80'><Link href="/">SEARCH</Link></li>
          <li className='flex items-center justify-center cursor-pointer min-w-[120px] h-full hover:opacity-80'><Link href="/">ARTIST</Link></li>
          <li className='flex items-center justify-center cursor-pointer min-w-[120px] h-full hover:opacity-80'><Link href="/">LIBRARY</Link></li>
          <li className='flex items-center justify-center cursor-pointer min-w-[120px] h-full hover:opacity-80'><Link href="/">RECENT</Link></li>
          <li className='flex items-center justify-center cursor-pointer min-w-[120px] h-full hover:opacity-80'><Link href="/">COMMUNITY</Link></li>
        </ul>
      </div>

      <div className='flex'>
        <Link href="/"><Button title="SIGN IN" /></Link>
        <Link href="/"><Button title="SIGN UP" /></Link>
      </div>
    </nav>
  )
}

export default Navbar