import React from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav class='w-full border-b'>
        <div class='py-5 md:py-0 container mx-auto px-6 flex items-center justify-between'>
          <div aria-label='Home.logo' role='img'>
            <Link to='/'>
              <img className='w-2/6' src={logo} alt='vetInfo' />
            </Link>
          </div>
          <div>
            <div id='menu' class='md:block lg:block hidden'>
              <ul class='flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20'>
                <li class='text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0'>
                  <Link
                    to='/about'
                    class='no-underline text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
                  >
                    About
                  </Link>
                </li>
                <li class='text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10'>
                  <Link
                    to='/rescue'
                    class='no-underline text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
                  >
                    Rescue
                  </Link>
                </li>
                <li class='text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10'>
                  <Link
                    to='/foster'
                    class='no-underline text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
                  >
                    Foster
                  </Link>
                  <Link
                    to='/carrier'
                    class='no-underline text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
                  >
                    Pet Carrier
                  </Link>
                  <Link
                    to='/blogs'
                    class='no-underline text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
