import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'

const Vetdetailscreen = () => {
  const { vetId } = useParams()
  const [vet, setVet] = useState({})

  useEffect(() => {
    const url = `http://localhost:5000/vets/${vetId}`

    fetch(url)
      .then((res) => res.json())
      .then((data) => setVet(data))
  }, [vetId])

  return (
    <>
      <Header />
      <div className='container p-10 m-10'>
        <div className='grid grid-cols-3 gap-4 p-2'>
          <div className='...'>
            <img src={vet.img} alt='' />
          </div>
          <div className='col-span-2'>
            <div className='grid grid-cols-2 gap-4 p-2'>
              <div className=''>
                <label className='font-semibold'>Name</label>
              </div>
              <div className=''>
                <p>{vet.name}</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 p-2'>
              <div className=''>
                <label className='font-semibold'>Email</label>
              </div>
              <div className=''>
                <p>{vet.email}</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 p-2'>
              <div className=''>
                <label className='font-semibold'>Phone</label>
              </div>
              <div className=''>
                <p>{vet.contact}</p>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 p-2'>
              <div className=''>
                <label className='font-semibold'>Facebook</label>
              </div>
              <div className=''>
                <a href='www://facebook.com'>{vet.name}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vetdetailscreen
