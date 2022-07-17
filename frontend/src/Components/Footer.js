import React from 'react'
import { BsFacebook, BsTwitter, BsGithub } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='bg-sky-100'>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 '>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 '>
          <div className='flex mt-8 space-x-6 text-gray-600 '>
            <a
              href='www.facebook.com/'
              target='_blank'
              className='p-4 w-2.5 font-medium cursor-pointer'
            >
              <BsFacebook size={25} />
            </a>

            <a
              href='www.twitter.com/'
              target='_blank'
              className='p-4 w-2.5 font-medium cursor-pointer'
            >
              <BsTwitter size={25} />
            </a>
            <a
              href='www.github.com/'
              target='_blank'
              className='p-4 w-2.5 font-medium cursor-pointer'
            >
              <BsGithub size={25} />
            </a>
            <a
              href='www.website.com/'
              target='_blank'
              className='p-4 w-2.5 font-medium cursor-pointer'
            >
              <BiWorld size={25} />
            </a>
          </div>
          <div className='grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3 '>
            <div>
              <p className='font-medium '>Services</p>
              <nav className='flex flex-col mt-4 space-y-2 text-sm text-gray-500 '>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  1on1 Coaching{' '}
                </a>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  Company Review{' '}
                </a>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  Accounts Review{' '}
                </a>
              </nav>
            </div>
            <div>
              <p className='font-medium '>Helpful Links</p>
              <nav className='flex flex-col mt-4 space-y-2 text-sm text-gray-500 '>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  Contact{' '}
                </a>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  FAQs{' '}
                </a>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  Live Chat{' '}
                </a>
              </nav>
            </div>
            <div>
              <p className='font-medium '>Legal</p>
              <nav className='flex flex-col mt-4 space-y-2 text-sm text-gray-500 '>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  Privacy Policy{' '}
                </a>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  Terms &amp; Conditions{' '}
                </a>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  Returns Policy{' '}
                </a>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  Accessibility{' '}
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p className='mt-8 text-xs text-gray-800 '>© 2022 Comany Name</p>
      </div>
    </footer>
  )
}

export default Footer
