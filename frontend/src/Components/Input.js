import React from 'react'

const Input = () => {
  return (
    <>
      <section class='p-8 m-8'>
        <h1 className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 text-center header-font p-5 m-5'>
          Input Your Location
        </h1>
        <div className='grid grid-cols-4 gap-4 bg-indigo flex justify-around '>
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
              Upazila
            </label>
            <select className=' bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600'>
              <option selected>Choose a Upazila</option>
              <option value='US'>Dhaka</option>
              <option value='CA'>Chittagong</option>
              <option value='FR'>Borisal</option>
              <option value='DE'>Rajshahi</option>
            </select>
          </div>
          <div className='max-w-xs bg-inherit flex flex-col gap-2 m-5'>
            <label className='bg-inherit font-serif text-xl text-slate-900'>
              Search
            </label>
            <button className='bg-sky-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600'>
              Enter
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Input
