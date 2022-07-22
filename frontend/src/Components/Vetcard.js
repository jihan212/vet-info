import React from 'react'
import { Link } from 'react-router-dom'
import {
  BsFacebook,
  BsWhatsapp,
  BsTelegram,
  BsTelephoneFill,
} from 'react-icons/bs'
import { HiMailOpen } from 'react-icons/hi'

const Vetcard = (props) => {
  const { _id, name, email, contact, img, address, social } = props.vet

  return (
    <>
      <div class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
        <div class='flex justify-end px-4 pt-4'></div>
        <div class='flex flex-col items-center pb-10'>
          <img class='mb-3 w-20 h-20 rounded-full shadow-lg' src={img} alt='' />
          <h5 class='mb-1 text-xl text-2xl text-gray-900'>{name}</h5>
          <p class='flex mt-4 space-x-3 lg:mt-6 font-medium'>
            Division: {address.division} <br />
            District: {address.district} <br />
            Upazila: {address.upazila}
          </p>
          {/* <p class='flex mt-4 space-x-3 lg:mt-6 font-medium'>
            Bachelor: {education.bachelor} <br />
            Masters: {education.masters} <br />
          </p> */}
          <div class='flex mt-4 space-x-3 lg:mt-6'>
            <Link
              to={`/details/${_id}`}
              class='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-gradient-to-r from-green-400 to-blue-600 rounded-lg border hover:bg-blue-700 hover:border-blue-900  focus:ring-4 focus:outline-none focus:ring-blue-700'
            >
              See Details
            </Link>
          </div>
          <div class='flex mt-4 space-x-3 lg:mt-6'>
            <a
              href={social.whatsapp}
              class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
            >
              <BsWhatsapp size={25} />
            </a>
            <a
              href={social.telegram}
              class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
            >
              <BsTelegram size={25} />
            </a>
            <a
              href={contact}
              class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
            >
              <BsTelephoneFill size={25} />
            </a>
            <a
              href={social.facebook}
              class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
            >
              <BsFacebook size={25} />
            </a>
            <a
              href={email}
              class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
            >
              <HiMailOpen size={25} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vetcard
