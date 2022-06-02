import React from 'react';

const Intro = () => {
    return (
      <div>
        <div class='bg-gray-100'>
          <div class='container mx-auto flex flex-col items-center py-12 sm:py-24'>
            <div class='w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10'>
              <h1 class='sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 text-center leading-7 md:leading-10'>
                Welcome to
                <span class='text-gray-800'> PetInfo </span>
                <br />
                A trusted place for your pet
              </h1>
              <p class='mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg'>
                A professonal website drives sales. Create a beautiful website
                to impress and engage new customers and establish your business
                online{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Intro;