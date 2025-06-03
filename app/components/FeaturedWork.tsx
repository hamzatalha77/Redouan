'use client' // if using in app directory

import React from 'react'

const videos = [
  {
    src: 'https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4',
    title: 'bodega x new balance',
    category: 'fashion/retail',
    description: 'the trail less taken'
  },
  {
    src: 'https://assets-global.website-files.com/62d57921074baa1ce7275405/640fe762f883d05b8f683c6d_HOKABODEGA-transcode.mp4',
    title: 'bodega x hoka',
    category: 'music video',
    description: 'the world at large'
  },
  {
    src: 'https://assets-global.website-files.com/62d57921074baa1ce7275405/6363f65c00474db467bed81b_Screen%20Recording%202022-11-03%20at%2011018%20PM-transcode.mp4',
    title: 'juno',
    category: 'music video',
    description: 'grandma cabbage'
  },
  {
    src: 'https://assets-global.website-files.com/62d57921074baa1ce7275405/63c084f55da78823643adbc3_ThePerfectPants-transcode.mp4',
    title: 'cala x public',
    category: 'music video',
    description: 'transportation the perfect pants'
  }
]

const VideoCard = ({
  src,
  title,
  category,
  description
}: {
  src: string
  title: string
  category: string
  description: string
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    videoRef.current?.pause()
  }

  return (
    <div
      className="md:w-1/2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="wrap-video">
        <video
          ref={videoRef}
          className="object-cover h-96 w-full bg-black"
          loop
          muted
          playsInline
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <span className="pt-4 grid grid-cols-6 gap-4">
        <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase">
          {title}
        </span>
        <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase flex justify-end">
          {category}
        </span>
      </span>
      <span className="block text-slate-400 text-xs uppercase">
        {description}
      </span>
    </div>
  )
}

const FeaturedWork = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-black">
      <div className="min-h-28">
        <div className="mx-auto py-4">
          <h2 className="font-black text-9xl text-white uppercase">gallery</h2>

          {/* First Row */}
          <div className="gap-6 mt-8 mx-4 md:flex">
            <VideoCard {...videos[0]} />
            <VideoCard {...videos[1]} />
          </div>

          {/* Second Row */}
          <div className="gap-6 mt-8 mx-4 md:flex">
            <VideoCard {...videos[2]} />
            <VideoCard {...videos[3]} />
          </div>

          <h2 className="font-black text-7xl text-white text-center uppercase my-16 hover:bg-white hover:text-black hover:rounded-full hover:px-6 transition-all duration-300 cursor-pointer">
            view select work
          </h2>
        </div>
      </div>
    </div>
  )
}

export default FeaturedWork
