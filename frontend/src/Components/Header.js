import React from 'react'
import logo from '../Images/logo.png'


const Header = () => {
  return (
    <div className='header-container'>
      <div className='max-w-20 w-10 sm:w-16 md:w-20 cursor-pointer'>
        <img className='w-full' src={logo} alt='vetInfo' />
      </div>

    </div>
  )
}

export default Header
