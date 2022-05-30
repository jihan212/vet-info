import React from 'react'
import logo from '../Images/logo.png'

const Header = () => {
  return (
    <nav class='font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 shadow sm:items-baseline w-full'>
      <div className='mb-2 sm:mb-0 flex flex-row'>
        <div className='cursor-pointer'>
          <img className='w-4/6' src={logo} alt='vetInfo' />
        </div>
      </div>
      <div className='sm:mb-0 self-center'>
        <a
          href='/'
          class='no-underline text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
        >
          About
        </a>
        <a
          href='/'
          class='no-underline text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
        >
          FAQ
        </a>
        <a
          href='/'
          class='no-underline text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Header
