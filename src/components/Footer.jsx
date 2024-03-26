import React from 'react'
import { FaMedium } from "react-icons/fa6";
import { FaGithub ,FaLinkedin ,FaInstagram } from "react-icons/fa";


 function Footer() {
  return (
    <div className='bg-[#9ca3af] items-center justify-center flex h-36 gap-7 font-medium'>
         EGEMEN SAHIN © 2024 <span className='flex gap-2 text-[20px]'>
          <a className='hover:text-black transition-all duration-200 ease-in' href="https://www.instagram.com/egemenshnq/"><FaInstagram /></a>
          <a className='hover:text-black transition-all duration-200 ease-in' href="https://www.linkedin.com/in/egemen-sahin-966359263/"><FaLinkedin /></a>
          <a className='hover:text-black transition-all duration-200 ease-in' href="https://github.com/EgemenShn01"><FaGithub /></a>
          <a className='hover:text-black transition-all duration-200 ease-in' href="https://medium.com/@egemensahin"><FaMedium /></a>
          </span>
    </div>
  )
}
export default Footer