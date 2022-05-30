import React, { useState } from 'react'
import fakedata from '../fakeData/fakedata.json'
import Header from '../Components/Header'
import Input from '../Components/Input'
import VetCard from '../Components/Vetcard'

const Homescreen = () => {
  const [vets, setVets] = useState(fakedata)
  return (
    <>
      <Header />
      <Input />

      <div className='grid grid-cols-3 gap-4 p-8 m-8 flex justify-around'>
        {vets.map((vet) => (
          <VetCard vet={vet}></VetCard>
        ))}
      </div>
    </>
  )
}

export default Homescreen
