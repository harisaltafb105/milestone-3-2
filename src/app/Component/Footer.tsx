import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





export const Footer = () => {
  return (
    <div>
<footer className='flex flex-col space-y-10 justify-center m-10 mb-0'>
<nav className='flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700'>
<Link className='hover:text-cyan-500 text-amber-500' href="#"> Home</Link>
<Link className='hover:text-cyan-500 text-amber-500' href="#"> about</Link>
<Link className='hover:text-cyan-500 text-amber-500' href="#"> Delivery</Link>
<Link className='hover:text-cyan-500 text-amber-500' href="#"> Contact</Link>

</nav>

<div className='flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105'>

<Link href="https://facebook.com" target="blank" rel="nofollow noopener" >
<FaFacebookSquare />
</Link>

<Link href="https://instagram.com" target="blank" rel="nofollow noopener" >
<FaInstagram />

</Link>

<Link href="https://twitter.com" target="blank" rel="nofollow noopener" >
<FaTwitter />

</Link>

<Link href="https://linkedin.com" target="blank" rel="nofollow noopener" >
<FaLinkedin />

</Link>


</div>

<p className='text-center'>2024 Haris Altaf. All Rights Reserved.</p>

</footer>



    </div>
  )
}
