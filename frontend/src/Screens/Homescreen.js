import React, { useState } from 'react'
import fakedata from '../fakeData/fakedata.json'
import Header from '../Components/Header'
import Input from '../Components/Input'
import VetCard from '../Components/Vetcard'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'

const Homescreen = () => {
  const [vets, setVets] = useState(fakedata)
  return (
    <>
      <Header />
      <Input />
      <section>
        <h1 className='text-4xl font-semibold subpixel-antialiased text-center underline decoration-3 text-slate-900 p-5 m-5'>
          Available Vets In Your Area
        </h1>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-8 m-8'>
          {vets.map((vet) => (
            <VetCard vet={vet}></VetCard>
          ))}
        </div>
      </section>
      <FAQ />
      <Footer />
    </>
  )
}

export default Homescreen
