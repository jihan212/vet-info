import React from 'react'

const Input = () => {
  return (
    <>
      <section className='p-8 m-8'>
        <h1 className='font-black text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 text-center header-font p-5 m-5'>
          Input Your Location
        </h1>
        <div className='grid grid-cols-4 gap-4 bg-indigo flex justify-around '>
          <div className='max-w-xs bg-inherit flex flex-col gap-2 m-5'>
            <label className='bg-inherit text-slate-900 font-semibold text-xl'>
              Division
            </label>
            <select className=' bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 text-lg text-slate-600'>
              <option value='US'>Choose a Division</option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Borisal</option>
              <option>Rajshahi</option>
            </select>
          </div>
          <div className='max-w-xs bg-inherit flex flex-col gap-2 m-5'>
            <label className='bg-inherit text-xl text-slate-900 font-semibold'>
              District
            </label>
            <select className=' bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 text-lg text-slate-600'>
              <option value='US'>Choose a District</option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Borisal</option>
              <option>Rajshahi</option>
            </select>
          </div>
          <div className='max-w-xs bg-inherit flex flex-col gap-2 m-5'>
            <label className='bg-inherit text-xl text-slate-900 font-semibold'>
              Upazila
            </label>
            <select className=' bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 text-lg text-slate-600'>
              <option value='US'>Choose a Upazila</option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Borisal</option>
              <option>Rajshahi</option>
            </select>
          </div>
          <div className='max-w-xs bg-inherit flex flex-col gap-2 m-5'>
            <label className='bg-inherit text-xl text-slate-900 font-semibold'>
              Search
            </label>
            <button className='bg-sky-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 text-lg text-slate-600'>
              Enter
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Input
