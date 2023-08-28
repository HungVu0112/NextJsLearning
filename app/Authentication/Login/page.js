'use client'

import Link from 'next/link'
import React from 'react'
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi'
import { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react'
import { useFormik } from 'formik'
import { loginValidate } from '@/lib/validate'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: loginValidate,
    onSubmit
  })

  async function onSubmit(values) {
    const checkLogin = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/Content/Home'
    })

    if(checkLogin.error) {
      alert(checkLogin.error)
    } else {
      router.push('/Content/Home')
    }
  }

  const handleGoogleSignin = async () => {
    signIn('google', { callbackUrl: '/Content/Home' })
  }

  return (
    <>
      <section className="w-3/4 mx-auto flex flex-col gap-10 text-gray-700">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Sign in</h1>
        </div>

        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={`flex border rounded-xl relative ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
            <input 
              type='email'
              name='email'
              placeholder='Email'
              autoComplete='off'
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none focus:text-[#6366f1]"
              {...formik.getFieldProps('email')}
            />
            <span className="icon flex items-center px-4 text-[#6366f1]">
              <HiAtSymbol size={25}/>
            </span>
          </div>
          <div className={`flex border rounded-xl relative ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
            <input 
              type={show ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              autoComplete='off'
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none focus:text-[#6366f1]"
              {...formik.getFieldProps('password')}
            />
            <span className="icon flex items-center px-4 cursor-pointer text-[#6366f1] hover:opacity-80" onClick={() => setShow(!show)} >
              <HiFingerPrint size={25}/>
            </span>
          </div>

          <div className="input-button">
            <button type='submit' className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md py-3 text-gray-50 text-lg hover:opacity-80">
              Login
            </button>
          </div>
          <div className="input-button">
            <button type='button' onClick={handleGoogleSignin} className="flex items-center justify-center w-full border-2 border-stone-500 py-3 rounded-md hover:opacity-80">
              <p className="mr-4">Sign in with Google</p>
              <FcGoogle size={25} />
            </button>
          </div>
        </form>

        <p className="mt-[-12px] text-center text-sm text-gray-400">
          Don't have an account yet ? <Link href='/Authentication/Signup' className="text-blue-700">Signup</Link>
        </p>
      </section>
    </>
  )
}

export default Login