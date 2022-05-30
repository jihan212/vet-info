import React from 'react'

const Vetcard = (props) => {
  return (
    <>
      <div class='rounded overflow-hidden shadow-lg bg-indigo-200'>
        <img class='object-contain' src={props.vet.img} alt='' />
        <div class='px-6 py-4 bg-indigo-200'>
          <div class='font-bold text-xl text-slate-900 mb-2 bg-indigo-200'>
            {props.vet.name}
          </div>
          <p class='text-slate-900 text-base bg-indigo-200'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </>
  )
}

export default Vetcard
