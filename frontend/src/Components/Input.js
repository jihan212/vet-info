import React from 'react'

const Input = () => {
  return (
    <div className='grid grid-cols-3 gap-4 bg-indigo flex justify-around '>
      <div className='max-w-xs bg-inherit flex flex-col gap-2 m-5'>
        <label className='bg-inherit font-serif text-xl text-slate-900'>
          Division
        </label>
        <select className=' bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600'>
          <option selected>Choose a Division</option>
          <option value='US'>Dhaka</option>
          <option value='CA'>Chittagong</option>
          <option value='FR'>Borisal</option>
          <option value='DE'>Rajshahi</option>
        </select>
      </div>
      <div className='max-w-xs bg-inherit flex flex-col gap-2 m-5'>
        <label className='bg-inherit font-serif text-xl text-slate-900'>
          District
        </label>
        <select className=' bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600'>
          <option selected>Choose a District</option>
          <option value='US'>Dhaka</option>
          <option value='CA'>Chittagong</option>
          <option value='FR'>Borisal</option>
          <option value='DE'>Rajshahi</option>
        </select>
      </div>
      <div className='max-w-xs bg-inherit flex flex-col gap-2 m-5'>
        <label className='bg-inherit font-serif text-xl text-slate-900'>
          Sub-district
        </label>
        <select className=' bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600'>
          <option selected>Choose a Sub-District</option>
          <option value='US'>Dhaka</option>
          <option value='CA'>Chittagong</option>
          <option value='FR'>Borisal</option>
          <option value='DE'>Rajshahi</option>
        </select>
      </div>
    </div>
  )
}

export default Input
