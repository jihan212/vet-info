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
  const imgRef = useRef()

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
    const img = imgRef.current.value

    const newVet = {
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
      img
    }

    fetch('http://localhost:5000/vets', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      bosy: JSON.stringify(newVet),
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
              className='block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2'
              htmlFor='grid-name'
            >
              Name
            </label>
            <input
              className='appearance-none block w-full bg-cyan-100 text-cyan-900 border border-cyan-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500'
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
              className='block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2'
              htmlFor='grid-email'
            >
              Email
            </label>
            <input
              className='appearance-none block w-full bg-cyan-100 text-cyan-900 border border-cyan-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500'
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
              className='block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2'
              htmlFor='grid-contact'
            >
              Contact
            </label>
            <input
              className='appearance-none block w-full bg-cyan-100 text-cyan-900 border border-cyan-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500'
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
              className='block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2'
              htmlFor='grid-division'
            >
              division
            </label>
            <div className='relative'>
              <input
                className='appearance-none block w-full bg-cyan-100 text-cyan-900 border border-cyan-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500'
                id='grid-division'
                type='text'
                placeholder='Chittagong'
                ref={divisionRef}
              />
            </div>
          </div>
          <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2'
              htmlFor='grid-district'
            >
              District
            </label>
            <input
              className='appearance-none block w-full bg-cyan-100 text-cyan-900 border border-cyan-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500'
              id='grid-district'
              type='text'
              placeholder='Feni'
              ref={districtRef}
            />
          </div>
          <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2'
              htmlFor='grid-upazilla'
            >
              Upazilla
            </label>
            <input
              className='appearance-none block w-full bg-cyan-100 text-cyan-900 border border-cyan-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500'
              id='grid-upazilla'
              type='text'
              placeholder='Feni Sadar'
              ref={upazillaRef}
            />
          </div>
          <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2'
              htmlFor='grid-upazilla'
            >
              Street
            </label>
            <input
              className='appearance-none block w-full bg-cyan-100 text-cyan-900 border border-cyan-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500'
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
              className='block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2'
              htmlFor='grid-bachelor'
            >
              Bachelor
            </label>
            <div className='relative'>
              <input
                className='appearance-none block w-full bg-cyan-100 text-cyan-900 border border-cyan-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500'
                id='grid-bachelor'
                type='text'
                placeholder='B.Sc'
                ref={bscRef}
              />
            </div>
          </div>
          <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2'
              htmlFor='grid-masters'
            >
              Masters
            </label>
            <input
              className='appearance-none block w-full bg-cyan-100 text-cyan-900 border border-cyan-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500'
              id='grid-masters'
              type='text'
              placeholder='M.Sc'
              ref={mscRef}
            />
          </div>
          <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2'
              htmlFor='grid-degree'
            >
              Degree
            </label>
            <input
              className='appearance-none block w-full bg-cyan-100 text-cyan-900 border border-cyan-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500'
              id='grid-degree'
              type='text'
              placeholder='degree'
              ref={degreeRef}
            />
          </div>
          <div className='w-full md:w-1/4 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2'
              htmlFor='grid-diploma'
            >
              Diploma
            </label>
            <input
              className='appearance-none block w-full bg-cyan-100 text-cyan-900 border border-cyan-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500'
              id='grid-diploma'
              type='text'
              placeholder='diploma'
              ref={diplomaRef}
            />
          </div>
        </div>
        <div>
          <label
            className='block uppercase tracking-wide text-cyan-900 text-xs font-bold mb-2'
            for='file_input'
          >
            Upload image file
          </label>
          <input
            className='block w-full text-sm text-cyan-900 bg-cyan-50 rounded-lg border border-cyan-300 cursor-pointer'
            id='file_input'
            type='file'
            ref={imgRef}
          />
        </div>
        <div className='flex justify-center items-center mt-10'>
          <button
            type='submit'
            value='add'
            className=' w-full md:w-1/2 px-3 mb-6 md:mb-0 rounded py-3 leading-tight font-bold hover:outline-none 
            transition ease-in-out delay-150 text-cyan-900 bg-cyan-100 border border-cyan-200 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-900 hover:text-cyan-200 duration-300 ...'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default VetaddScreen
