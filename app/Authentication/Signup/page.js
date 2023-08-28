'use client'

import Link from 'next/link'
import React from 'react'
import { HiAtSymbol, HiFingerPrint, HiUser } from 'react-icons/hi'
import { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useFormik } from 'formik'
import { signupValidate } from '@/lib/validate'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

const Signup = () => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      cpassword: ''
    },
    validate: signupValidate,
    onSubmit
  })

  async function onSubmit(values) {
    try {
      const res = await fetch('/api/authentication/signup', {
        method: 'POST',
        body: JSON.stringify(values)
      })

      if(res.ok) {
        const mes = await res.text()

        if(mes !== "Successfully created!") {
          alert(mes)
        } else {
          router.push('/Authentication/Login')
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleGoogleSignin = async () => {
    signIn('google', { callbackUrl: '/Content/Home' })
  }

  return (
    <>
      <section className="w-3/4 mx-auto flex flex-col mt-[-10px] mb-[24px] text-gray-700">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Sign up</h1>
        </div>

        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={`flex border rounded-md text-sm relative ${formik.errors.username && formik.touched.username ? 'border-rose-600' : ''}`}>
            <input 
              type='text'
              name='username'
              placeholder='Username'
              autoComplete='off'
              className="w-full py-2 px-3 border rounded-xl bg-slate-50 focus:outline-none border-none focus:text-[#6366f1]"
              {...formik.getFieldProps('username')}
            />
            <span className="icon flex items-center px-4 text-[#6366f1]">
              <HiUser size={15}/>
            </span>
          </div>
          <div className={`flex border rounded-md text-sm relative ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
            <input 
              type='email'
              name='email'
              placeholder='Email'
              autoComplete='off'
              className="w-full py-2 px-3 border rounded-xl bg-slate-50 focus:outline-none border-none focus:text-[#6366f1]"
              {...formik.getFieldProps('email')}
            />
            <span className="icon flex items-center px-4 text-[#6366f1]">
              <HiAtSymbol size={15}/>
            </span>
          </div>
          <div className={`flex border rounded-md text-sm relative ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
            <input 
              type={show ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              autoComplete='off'
              className="w-full py-2 px-3 border rounded-xl bg-slate-50 focus:outline-none border-none focus:text-[#6366f1]"
              {...formik.getFieldProps('password')}
            />
            <span className="icon flex items-center px-4 cursor-pointer text-[#6366f1] hover:opacity-80" onClick={() => setShow(!show)} >
              <HiFingerPrint size={15}/>
            </span>
          </div>
          <div className={`flex border rounded-md text-sm relative ${formik.errors.cpassword && formik.touched.cpassword ? 'border-rose-600' : ''}`}>
            <input 
              type={show ? 'text' : 'password'}
              name='cpassword'
              placeholder='Confirm Password'
              autoComplete='off'
              className="w-full py-2 px-3 border rounded-xl bg-slate-50 focus:outline-none border-none focus:text-[#6366f1]"
              {...formik.getFieldProps('cpassword')}
            />
            <span className="icon flex items-center px-4 cursor-pointer text-[#6366f1] hover:opacity-80" onClick={() => setShow(!show)} >
              <HiFingerPrint size={15}/>
            </span>
          </div>

          <div className="input-button">
            <button type='submit' className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md py-2 text-gray-50 text-sm hover:opacity-80">
              Signup
            </button>
          </div>
          <div className="input-button">
            <button type='button' onClick={handleGoogleSignin} className="flex items-center justify-center w-full border-2 border-stone-500 py-1 rounded-md hover:opacity-80">
              <p className="mr-4">Sign in with Google</p>
              <FcGoogle size={20} />
            </button>
          </div>
        </form>

        <p className="text-center text-gray-400 mt-[16px] text-sm">
          Already have an account ? <Link href='/Authentication/Login' className="text-blue-700">Sign in</Link>
        </p>
      </section>
    </>
  )
}

export default Signup