import React, { useRef } from 'react'
import Header from '../Components/Header'

const VetaddScreen = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const contactRef = useRef()
  const divisionRef = useRef()
  const districtRef = useRef()
  const upazillaRef = useRef()
  const streetRef = useRef()
  const bscRef = useRef()
  const mscRef = useRef()
  const degreeRef = useRef()
  const diplomaRef = useRef()

  const handleAddUser = (e) => {
    const name = nameRef.current.value
    const email = emailRef.current.value
    const contact = contactRef.current.value
    const division = divisionRef.current.value
    const district = districtRef.current.value
    const upazilla = upazillaRef.current.value
    const street = streetRef.current.value
    const bsc = bscRef.current.value
    const msc = mscRef.current.value
    const degree = degreeRef.current.value
    const diploma = diplomaRef.current.value

    const newUser = {
      name,
      email,
      contact,
      division,
      district,
      street,
      upazilla,
      bsc,
      msc,
      degree,
      diploma,
    }

    fetch('http://localhost:5000/vets', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      bosy: JSON.stringify(newUser),
    }).then()

    e.preventDefault()
  }

  return (
    <div>
      <Header />
      <form className='w-full px-20 py-10' onSubmit={handleAddUser}>
        <h1 className='uppercase text-xl tracking-wide text-center text-gray-700 font-bold mb-2'>
          Add Vet Details Here
        </h1>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-name'
            >
              Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-name'
              type='text'
              placeholder='John Doe'
              ref={nameRef}
            />
          </div>
        </div>

        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-email'
            >
              Email
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-email'
              type='email'
              placeholder='johndoe@example.com'
              ref={emailRef}
            />
          </div>
        </div>

        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-contact'
            >
              Contact
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-contact'
              type='tel'
              placeholder='01*********'
              ref={contactRef}
            />
          </div>
        </div>

        <div className='flex flex-wrap -mx-3 mb-2'>
          <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-division'
            >
              division
            </label>
            <div className='relative'>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-division'
                type='text'
                placeholder='Chittagong'
                ref={divisionRef}
              />
            </div>
          </div>
          <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-district'
            >
              District
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-district'
              type='text'
              placeholder='Feni'
              ref={districtRef}
            />
          </div>
          <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-upazilla'
            >
              Upazilla
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-upazilla'
              type='text'
              placeholder='Feni Sadar'
              ref={upazillaRef}
            />
          </div>
          <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-upazilla'
            >
              Street
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-street'
              type='text'
              placeholder='Trunk Road'
              ref={streetRef}
            />
          </div>
        </div>

        <div className='flex flex-wrap -mx-3 mb-2'>
          <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-bachelor'
            >
              Bachelor
            </label>
            <div className='relative'>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-bachelor'
                type='text'
                placeholder='B.Sc'
                ref={bscRef}
              />
            </div>
          </div>
          <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-masters'
            >
              Masters
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-masters'
              type='text'
              placeholder='M.Sc'
              ref={mscRef}
            />
          </div>
          <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-degree'
            >
              Degree
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-degree'
              type='text'
              placeholder='degree'
              ref={degreeRef}
            />
          </div>
          <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-diploma'
            >
              Diploma
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-diploma'
              type='text'
              placeholder='diploma'
              ref={diplomaRef}
            />
          </div>
        </div>
        <div className='flex justify-center items-center mt-10'>
          <button
            type='submit'
            value='add'
            className=' w-full md:w-1/2 px-3 mb-6 md:mb-0 text-gray-200 bg-gray-700 border border-gray-200 rounded py-3 px-3 leading-tight font-bold hover:outline-none hover:bg-white hover:text-gray-700'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default VetaddScreen
