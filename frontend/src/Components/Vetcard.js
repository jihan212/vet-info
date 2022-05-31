import React from 'react'
import { Link } from 'react-router-dom'

const Vetcard = (props) => {
  return (
    <>
      <div class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
        <div class='flex justify-end px-4 pt-4'></div>
        <div class='flex flex-col items-center pb-10'>
          <img
            class='mb-3 w-24 h-24 rounded-full shadow-lg'
            src={props.vet.img}
            alt=''
          />
          <h5 class='mb-1 text-xl font-medium text-gray-900'>
            {props.vet.name}
          </h5>
          <span class='text-sm text-gray-500 dark:text-gray-400'>
            {props.vet.email}
          </span>
          <div class='flex mt-4 space-x-3 lg:mt-6'>
            <Link
              to='/details'
              class='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vetcard
