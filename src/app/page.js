import React from "react";
import Contacts from "./dynamic/page";
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex-col w-full h-screen flex justify-center items-center bg-white gap-2'>
    <Link href="/dynamic" className='text-black'>
      <button className="px-7 pb-2.5 pt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  border border-blue-500 hover:border-transparent rounded">
      Dynamic Form 
      </button>
      </Link>
    <div>
    <Link href="/form" className='text-black'>      
    <button className=" px-16 pb-2.5 pt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded">
      Form 
      </button> </Link>
    </div>
  </div>
  )
}