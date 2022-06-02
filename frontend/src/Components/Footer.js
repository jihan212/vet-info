import React from 'react'
import { BsFacebook, BsTwitter, BsGithub } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='bg-slate-200'>
      <div class='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 '>
        <div class='grid grid-cols-1 gap-8 lg:grid-cols-3 '>
          <div class='flex mt-8 space-x-6 text-gray-600 '>
            <a
              href='www.facebook.com/'
              target='_blank'
              class='p-4 w-2.5 font-medium cursor-pointer'
            >
              <BsFacebook size={25} />
            </a>

            <a
              href='www.twitter.com/'
              target='_blank'
              class='p-4 w-2.5 font-medium cursor-pointer'
            >
              <BsTwitter size={25} />
            </a>
            <a
              href='www.github.com/'
              target='_blank'
              class='p-4 w-2.5 font-medium cursor-pointer'
            >
              <BsGithub size={25} />
            </a>
            <a
              href='www.website.com/'
              target='_blank'
              class='p-4 w-2.5 font-medium cursor-pointer'
            >
              <BiWorld size={25} />
            </a>
          </div>
          <div class='grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3 '>
            <div>
              <p class='font-medium '>Services</p>
              <nav class='flex flex-col mt-4 space-y-2 text-sm text-gray-500 '>
                <a class='hover:opacity-75 ' href>
                  {' '}
                  1on1 Coaching{' '}
                </a>
                <a class='hover:opacity-75 ' href>
                  {' '}
                  Company Review{' '}
                </a>
                <a class='hover:opacity-75 ' href>
                  {' '}
                  Accounts Review{' '}
                </a>
              </nav>
            </div>
            <div>
              <p class='font-medium '>Helpful Links</p>
              <nav class='flex flex-col mt-4 space-y-2 text-sm text-gray-500 '>
                <a class='hover:opacity-75 ' href>
                  {' '}
                  Contact{' '}
                </a>
                <a class='hover:opacity-75 ' href>
                  {' '}
                  FAQs{' '}
                </a>
                <a class='hover:opacity-75 ' href>
                  {' '}
                  Live Chat{' '}
                </a>
              </nav>
            </div>
            <div>
              <p class='font-medium '>Legal</p>
              <nav class='flex flex-col mt-4 space-y-2 text-sm text-gray-500 '>
                <a class='hover:opacity-75 ' href>
                  {' '}
                  Privacy Policy{' '}
                </a>
                <a class='hover:opacity-75 ' href>
                  {' '}
                  Terms &amp; Conditions{' '}
                </a>
                <a class='hover:opacity-75 ' href>
                  {' '}
                  Returns Policy{' '}
                </a>
                <a class='hover:opacity-75 ' href>
                  {' '}
                  Accessibility{' '}
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p class='mt-8 text-xs text-gray-800 '>© 2022 Comany Name</p>
      </div>
    </footer>
  )
}

export default Footer
