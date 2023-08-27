'use client'

import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { CgPassword } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { useState, useEffect } from 'react';
import { signIn, getProviders } from 'next-auth/react'

const page = () => {
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }

    setUpProviders()
  }, [])

  return (
    <div className="p-6 w-1/3 h-3/4 bg-foggy border-2 border-cyan-500 rounded-md text-slate-700">
      <h1 className="mt-4 text-4xl text-center font-bold">SIGNUP</h1>

      <form className="mt-8">
        <div className="mt-4">
          <div>
            <AiOutlineUser className="inline-block text-2xl mr-1" />
            <label for="username" className="mr-3 font-bold text-base">Username</label>
          </div>
          <input type="text"  id="username" className="bg-transparent w-full mt-1 border-b-2 border-black outline-0 text-sm p-1" placeholder="Type your username ..." required autoComplete="off"/>
        </div>

        <div className="mt-4">
          <div>
            <MdOutlineEmail className="inline-block text-2xl mr-1" />
            <label for="email" className="mr-3 font-bold text-base">Email</label>
          </div>
          <input type="email"  id="email" className="bg-transparent w-full mt-1 border-b-2 border-black outline-0 text-sm p-1" placeholder="Type your email ..." required autoComplete="off"/>
        </div>

        <div className="mt-4">
          <div>
            <CgPassword className="inline-block text-2xl mr-1" />
            <label for="password" className="mr-3 font-bold text-base">Password</label>
          </div>
          <input type="password"  id="password" className="bg-transparent w-full mt-1 border-b-2 border-black outline-0 text-sm p-1" placeholder="Type your password ..." required/>
        </div>

        <button type="submit" className="mt-8 text-white w-full h-12 rounded-md p-2 bg-slate-900 hover:opacity-80">Signup</button>

        {providers && Object.values(providers).map((provider) => (
          <button 
            type='button'
            key={provider.name}
            onClick={() => signIn(provider.id, {
              callbackUrl: '/Content/Home'
            })}
            className="flex items-center justify-center mt-4 w-full h-12 border-2 border-red-500 rounded-md p-4 hover:opacity-80"
          >
            <p className="text-lg font-bold">Continue with Google <FcGoogle className="ml-4 inline-block text-3xl"/></p>
          </button>
        ))}
      </form>
    </div>
  )
}

export default page