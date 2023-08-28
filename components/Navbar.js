'use client'

import Link from 'next/link'
import React from 'react'
import { GiGuitarHead } from "react-icons/gi"
import Button from './Button'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="h-[60px] flex items-center justify-between p-6 font-bold text-sm tracking-widest drop-shadow-white bg-slate-900">
      <div className="flex items-center">  
        <div className="text-4xl ml-2 mr-4">
          <GiGuitarHead />
        </div>
        
        <ul className="flex items-center h-[60px] mx-4">
          <li className='flex items-center justify-center cursor-pointer min-w-[120px] h-full hover:opacity-80'><Link href="/Content/Home">HOME</Link></li>
          <li className='flex items-center justify-center cursor-pointer min-w-[120px] h-full hover:opacity-80'><Link href="/">SEARCH</Link></li>
          <li className='flex items-center justify-center cursor-pointer min-w-[120px] h-full hover:opacity-80'><Link href="/">ARTIST</Link></li>
          <li className='flex items-center justify-center cursor-pointer min-w-[120px] h-full hover:opacity-80'><Link href="/">PLAYLIST</Link></li>

          {session?.user ? (
            <>
              <li className='flex items-center justify-center cursor-pointer min-w-[120px] h-full hover:opacity-80'><Link href="/">LIBRARY</Link></li>
              <li className='flex items-center justify-center cursor-pointer min-w-[120px] h-full hover:opacity-80'><Link href="/">COMMUNITY</Link></li>
            </>
          ) : ''
        }
        </ul>
      </div>

      {session?.user ? (
        <div className="flex">
            <button 
              type='button' 
              onClick={signOut} 
              className='bg-gray-800 px-4 py-2 w-[100px] h-[40px] mr-4 rounded-md hover:opacity-80'
            >
              SIGN OUT
            </button>
            
            <Link href="#" className="UserCircle">
              <Image 
                src={session?.user?.image}
                width={40}
                height={40}
                alt="User"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <div className='flex'>
            <Link href="/Authentication/Login"><Button title="LOGIN" /></Link>
            <Link href="/Authentication/Signup"><Button title="SIGN UP" /></Link>
          </div>
        )
      }

    </nav>
  )
}

export default Navbar