import Image from 'next/image'
import React from 'react'

const bigImage = () => {
  return (
    <div className="relative flex h-screen">
      <Image
        width={1950}
        height={1080}
        src="https://images.unsplash.com/photo-1520350094754-f0fdcac35c1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        alt="image"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute top-1/2 left-10 max-w-full md:left-20">
        <div className=" text-white md:text-5xl py-4">Transparent </div>
        <div className="bg-white text-7xl font-bold text-black mix-blend-screen px-10 py-5 ">
          Text Example
        </div>
      </div>
    </div>
  )
}

export default bigImage
