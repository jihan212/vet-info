import React from 'react'
import Header from '../Components/Header'

const Vetdetailscreen = () => {
  return (
    <>
      <Header />
      <div className='container p-10 m-10'>
        <div className='grid grid-cols-3 gap-4 p-2'>
          <div className='...'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog'
              alt=''
            />
          </div>
          <div className='col-span-2'>
            <div className='grid grid-cols-2 gap-4 p-2'>
              <div className=''>
                <label className='font-semibold'>User Id</label>
              </div>
              <div className=''>
                <p>Kshiti123</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 p-2'>
              <div className=''>
                <label className='font-semibold'>Name</label>
              </div>
              <div className=''>
                <p>Kshiti Ghelani</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 p-2'>
              <div className=''>
                <label className='font-semibold'>Email</label>
              </div>
              <div className=''>
                <p>kshitighelani@gmail.com</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 p-2'>
              <div className=''>
                <label className='font-semibold'>Phone</label>
              </div>
              <div className=''>
                <p>123 456 7890</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 p-2'>
              <div className=''>
                <label className='font-semibold'>Whatsapp</label>
              </div>
              <div className=''>
                <p>123 456 789</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 p-2'>
              <div className=''>
                <label className='font-semibold'>Facebook</label>
              </div>
              <div className=''>
                <a href='www://facebook.com'>Ghelani Kshiti</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vetdetailscreen
