import Image from 'next/image'
import { BsFillArrowUpCircleFill } from "react-icons/bs"

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-60px)] flex-col items-center justify-center p-24 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="title text-center font-serif italic">      
        <h1 className="text-7xl text-cyan-600">WELCOME TO</h1>
        <h2 className="text-4xl mt-2 text-teal-200">MY MUSIC WEBSITE</h2>
      </div>

      <div className="mt-8 text-lg font-bold ">
        <button type="button" class="bg-slate-900 border-2 border-teal-300 hover:opacity-80 w-[240px] px-8 py-2 rounded-md ">
          SIGN UP
        </button>
      </div>

      <div className="animate-bounce mt-7 text-3xl">
        <BsFillArrowUpCircleFill />
      </div>

      <p className="mt-4 font-serif italic text-lg">Click here to become our member !!!</p>

    </main>
  )
}
