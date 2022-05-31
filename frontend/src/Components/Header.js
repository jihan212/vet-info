import React from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav class='font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 shadow sm:items-baseline w-full'>
      <div className='mb-2 sm:mb-0 flex flex-row'>
        <Link to='/'>
          <img className='w-2/6' src={logo} alt='vetInfo' />
        </Link>
      </div>
      <div className='sm:mb-0 self-center'>
        <Link
          to='/about'
          class='no-underline text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
        >
          About
        </Link>
        <Link
          to='/'
          class='no-underline text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
        >
          FAQ
        </Link>
        <Link
          to='/'
          class='no-underline text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Header
