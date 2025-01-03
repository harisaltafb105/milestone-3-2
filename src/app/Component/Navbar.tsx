import React from 'react'
import { FaHamburger } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Image from 'next/image';





export const Navbar = () => {
  return (
    <div>
    <div className='grid xl:grid-cols-1 grid-cols-1'>
<div className='p-5'> 
<div className='py-3 px-3 rounded-xl border w-full'>
<div className='flex justify-between items-center'>
<div className='flex justify-items-center items-center gap-2'>
<FaHamburger className='w-6 h-6 text-yellow-400 hover:text-cyan-400'/>

{/*search icon*/}

<div style={{position:'relative'}}>
<input className='rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block'
placeholder='Search for your favourite burger from menu'/>

<FaSearch className='w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/12 hidden lg:block md:block'/>

</div>
</div>

<div className='flex justify-center items-center gap-2'> 
<FaBolt className='w-5 h-5 text-amber-400 hidden lg:block md:block'/>
<p className='text-sm text-white hidden lg:block md:block'> Order now and get it with</p>
<span className='text-amber-400'> 15 minutes!</span>


<FaCartShopping className='p-1 w-8 h-8 rounded-full  relative hover:ring-amber-400 text-cyan-400' />

<img className='inline-block w-8 text-sky-400 rounded-full p-1 relative hover:text-amber-400' src="/download.jpg" alt="user avtar"></img>
</div>
</div>
</div>
</div>
</div>
</div>
  )
}
