import React from 'react'
import Header from '../Components/Header'

const vetaddScreen = () => {
  return (
    <div>
      <Header />
      <form class='w-full max-w-lg'>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-name'
            >
              Name
            </label>
            <input
              class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-name'
              type='text'
              placeholder='John Doe'
            />
          </div>
        </div>

        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-email'
            >
              Email
            </label>
            <input
              class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-email'
              type='email'
              placeholder='johndoe@example.com'
            />
          </div>
        </div>

        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-contact'
            >
              Contact
            </label>
            <input
              class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-contact'
              type='tel'
              placeholder='01*********'
            />
          </div>
        </div>

        <div class='flex flex-wrap -mx-3 mb-2'>
          <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-division'
            >
              division
            </label>
            <div class='relative'>
              <input
                class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-division'
                type='text'
                placeholder='Chittagong'
              />
            </div>
          </div>
          <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-district'
            >
              District
            </label>
            <input
              class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-district'
              type='text'
              placeholder='Feni'
            />
          </div>
          <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-upazilla'
            >
              Upazilla
            </label>
            <input
              class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-upazilla'
              type='text'
              placeholder='Feni Sadar'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default vetaddScreen
