import React from 'react'
import Image from 'next/image'
import Logo from '../assets/logo.webp'

const Nav = () => {
  return (
    <div className='Navy'>
        <div className = 'Nav_Image'>
            <Image src={Logo}alt = 'logo' height= {50} width = {50} />
        </div>
        <div className = 'Nav_Button'>
            <button className='colored'>Register</button>
            <button className='non_colored'>Login</button>
        </div>
    </div>
  )
}

export default Nav